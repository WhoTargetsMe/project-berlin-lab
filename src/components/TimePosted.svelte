<script lang="ts">
	export let post: Post = {};
	import { flags } from '$lib/flags-store';
	import { format, fromUnixTime, formatDistanceToNowStrict } from 'date-fns';

	//to fix: if it says 53years, it's the wrong date/time posted
	const timePosted =
		post.node.comet_sections.context_layout?.story.comet_sections.metadata[1]?.story
			.creation_time || new Date(0);

	const dateOfPost = fromUnixTime(timePosted);
	const formattedDate = format(dateOfPost, 'dd MMM yyyy');
	const formattedTimeDistance = formatDistanceToNowStrict(dateOfPost);

	const time = () => {
		let [n, frame] = formattedTimeDistance.split(' ');

		if (frame === 'days' && parseInt(n) > 6) {
			return formattedDate;
		} else {
			return formattedTimeDistance
				.replaceAll(' ', '')
				.replaceAll('hours', 'h')
				.replaceAll('days', 'd')
				.replaceAll('day', 'd');
		}
	};

	$: hasFlags = Object.keys($flags).length > 0;
</script>

{#if hasFlags}
	{#if $flags.should_display_time_posted}
		<p>{time()}</p>
	{/if}
{/if}
