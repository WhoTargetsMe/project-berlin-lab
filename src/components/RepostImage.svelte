<script lang="ts">
	import Carousel from './Carousel.svelte';

	export let post:Post = {};

	let multipleImages =
		post.node.comet_sections.content.story.attached_story?.attachments[0]?.styles.attachment.all_subattachments?.nodes.map(
			(img:{[key:string]:any}) => img.media.image.uri
		);

	let imageRepost =
		post.node?.comet_sections.content.story.attached_story?.comet_sections.attached_story?.story
			.attached_story.comet_sections.attached_story_layout.story.attachments[0].styles.attachment
			.media.photo_image.uri ||
		post.node.comet_sections.content.story.attached_story?.attachments[0]?.styles.attachment.media
			?.photo_image?.uri;
</script>

{#if imageRepost}
	<img src={imageRepost} alt={imageRepost} />
	console.log(imageRepost)
{/if}

{#if multipleImages}
	<Carousel {multipleImages} />
{/if}
