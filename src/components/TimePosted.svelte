<script lang="ts">
	export let post: Post = {};
	import { flags } from '$lib/flags-store';
	import { format, fromUnixTime, formatDistanceToNowStrict } from 'date-fns';
	import _ from 'lodash';

	let timePosted =
		post.node.comet_sections.context_layout?.story.comet_sections.metadata[1]?.story
			.creation_time ||
		post.node.comet_sections.content.story.attachments?.[0].styles.attachment.style_infos?.[0]
			.fb_shorts_story?.creation_time ||
		post.node.comet_sections.content?.story.comet_sections.context_layout?.story.comet_sections
			.metadata[1].story.creation_time ||
		post.node.comet_sections.content.story.comet_sections.context_layout.story.comet_sections
			.metadata[0].story.creation_time;

	const convertTime = (timeStamp) => {
		const dateOfPost = fromUnixTime(timeStamp);
		const formattedDate = format(dateOfPost, 'dd MMM');
		const formattedTimeDistance = formatDistanceToNowStrict(dateOfPost);

		let [n, unit] = formattedTimeDistance.split(' ');

		switch (true) {
			case !timeStamp:
				//format time to now minus one hour
				formatDistanceToNowStrict(fromUnixTime(Math.floor(Date.now() / 1000) - 3600));
				break;
			case unit.includes('year'):
				formattedDate;
				break;
			case unit === 'days' && parseInt(n) > 6:
				formattedDate;
				break;
			default:
				return formattedTimeDistance;
		}
	};

	$: hasFlags = Object.keys($flags).length > 0;
</script>

{#if hasFlags}
	{#if $flags.should_display_time_posted.enabled}
		<p>{convertTime(timePosted)}</p>
	{/if}
{/if}
