<script lang="ts">
	export let post: { [key: string]: any };

	let videoSrc =
		post.node.comet_sections.content.story.attachments[0].styles.attachment.style_infos?.[0]
			.fb_shorts_story?.short_form_video_context.playback_video.playable_url;
</script>

{#if videoSrc}
	<video class="w-full aspect-video" controls src={videoSrc}>
		<track kind="captions" />
	</video>
{/if}
