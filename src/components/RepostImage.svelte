<script lang="ts">
	import Carousel from './Carousel.svelte';

	export let post = {};

	let multipleImages =
		post.node.comet_sections.content.story.attached_story?.attachments[0]?.styles.attachment.all_subattachments?.nodes.map(
			(img) => img.media.image.uri
		);

	let imageRepost =
		post.node?.comet_sections.content.story.attached_story?.comet_sections.attached_story?.story
			.attached_story.comet_sections.attached_story_layout.story.attachments[0].styles.attachment
			.media.photo_image.uri ||
		post.node.comet_sections.content.story.attached_story?.attachments[0]?.styles.attachment.media
			?.photo_image?.uri;

	// let imageRepostAlt =
	// 	post.node.comet_sections.content.story.attached_story.comet_sections.content.story.attached_story.styles?.attachment.media
	// 		.accessibility_caption;

	// let postVideo =
</script>

{#if imageRepost}
	<img src={imageRepost} alt={imageRepost} />
{/if}

{#if multipleImages}
	<Carousel {multipleImages} />
{/if}

<style>
	img {
		margin-top: 0;
		padding: 0;
		width: 100%;
	}
</style>
