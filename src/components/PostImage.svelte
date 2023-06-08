<script lang="ts">
	import Carousel from './Carousel.svelte';
	export let post: Post = {};

	let postMedia = post.node.comet_sections.content.story.attachments[0]?.styles.attachment.media;

	let postSrc = postMedia?.photo_image?.uri || postMedia?.large_share_image?.uri;

	let postAlt =
		post.node.comet_sections.content.story.attachments[0]?.styles.attachment.media
			?.accessibility_caption;

	let multipleImages =
		post.node.comet_sections.content.story.attachments[0]?.styles.attachment.all_subattachments?.nodes.map(
			(img: { [key: string]: any }) => img.media.image.uri
		);

	let imageRepost =
		post.node?.comet_sections.content.story.attached_story?.comet_sections.attached_story?.story
			.attached_story.comet_sections.attached_story_layout.story.attachments[0].styles.attachment
			.media.photo_image.uri ||
		post.node.comet_sections.content.story.attached_story?.attachments[0]?.styles.attachment.media
			?.photo_image?.uri;

	let imageRepostAlt =
		post.node.comet_sections.content.story.attached_story?.comet_sections.content.story
			.attached_story.styles?.attachment.media.accessibility_caption;
</script>

{#if postSrc}
	<img src={postSrc} alt={postAlt} class="min-w-full" />
{/if}

{#if multipleImages}
	<Carousel {multipleImages} />
{/if}

{#if imageRepost}
	<img src={imageRepost} alt={imageRepostAlt} />
{/if}
