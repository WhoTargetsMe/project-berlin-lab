<script lang="ts">
	import Carousel from './Carousel.svelte';
	import { JSONPath } from 'jsonpath-plus';
	export let post: Post = {};

	let postSrc: string = JSONPath({ path: '$..large_share_image.uri', json: post })[0];

	let postAlt: string = JSONPath({ path: '$..accessibility_caption', json: post })[0];

	let multipleImages: {} =
		post.node.comet_sections.content.story.attachments[0]?.styles.attachment.all_subattachments?.nodes.map(
			(img: { [key: string]: any }) => img.media.image.uri
		);

	let imageRepost: string = JSONPath({ path: '$..photo_image.uri', json: post })[0];

	let imageRepostAlt: string = JSONPath({ path: '$..accessibility_caption', json: post });
</script>

{#if postSrc}
	<img src={postSrc} alt={postAlt} class="min-w-full" />
{/if}

{#if multipleImages}
	<Carousel {multipleImages} />
{/if}

{#if imageRepost}
	<img src={imageRepost} alt={imageRepostAlt} class="min-w-full" />
{/if}
