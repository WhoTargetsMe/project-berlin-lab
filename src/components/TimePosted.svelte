<script lang="ts">
	export let post: Post = {};
	import { flags } from '$lib/flags-store';
	import { format, fromUnixTime, formatDistanceToNowStrict } from 'date-fns';
	import _ from 'lodash';

	const timePosted =
		post.node.comet_sections.context_layout?.story.comet_sections.metadata[1]?.story
			.creation_time ||
		post.node.comet_sections.content.story.attachments?.[0].styles.attachment.style_infos?.[0]
			.fb_shorts_story?.creation_time ||
		post.node.comet_sections.content.story.comet_sections.context_layout.story.comet_sections
			.metadata[1].story.creation_time ||
		post.node.comet_sections.content?.story.comet_sections.context_layout?.story.comet_sections
			.metadata[1].story.creation_time ||
		post.node.comet_sections.context_layout.story.comet_sections.metadata[1].story.creation_time ||
		post.node.comet_sections.content.story.comet_sections.context_layout.story.comet_sections
			.metadata[0].story.creation_time ||
		_.now();

	const convertTime = (timeStamp) => {
		const dateOfPost = fromUnixTime(timeStamp);
		const formattedDate = format(dateOfPost, 'dd MMM');
		const formattedTimeDistance = formatDistanceToNowStrict(dateOfPost);

		let [n, unit] = formattedTimeDistance.split(' ');

		return unit.includes('year')
			? formattedDate
			: unit === 'days' && parseInt(n) > 6
			? formattedDate
			: formattedTimeDistance
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
