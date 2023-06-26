<script lang="ts">
	export let post: Post = {};
	import { flags } from '$lib/flags-store';
	import { format, fromUnixTime, formatDistanceToNowStrict } from 'date-fns';
	import { JSONPath } from 'jsonpath-plus';

	let timePosted: number = JSONPath({ path: '$..creation_time', json: post })[0];

	const convertTime = (timeStamp: number) => {
		let dateOfPost: Date = fromUnixTime(timeStamp);
		let formattedDate: string = format(dateOfPost, 'dd MMM');
		let formattedTimeDistance: string = formatDistanceToNowStrict(dateOfPost);
		let [n, unit]: string[] = formattedTimeDistance.split(' ');

		if (unit.includes('year')) {
			return formattedDate;
		}

		if (unit === 'days' && parseInt(n) > 6) {
			return formattedDate;
		}

		return formattedTimeDistance
			.replaceAll(' ', '')
			.replaceAll('hours', 'h')
			.replaceAll('days', 'd')
			.replaceAll('day', 'd');
	};

	$: hasFlags = Object.keys($flags).length > 0;
</script>

{#if hasFlags}
	{#if $flags.should_display_time_posted.enabled}
		<p>{convertTime(timePosted)}</p>
	{/if}
{/if}
