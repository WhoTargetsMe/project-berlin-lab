<script lang="ts">
	import Carousel from './Carousel.svelte';
	import { JSONPath } from 'jsonpath-plus';
	export let post: Post = {};

	let postSrc: string = JSONPath({ path: '$..large_share_image.uri', json: post })[0] || '';

	let postAlt: string = JSONPath({ path: '$..accessibility_caption', json: post })[0] || '';

	let multipleImages: {} = JSONPath({ path: '$..all_subattachments.nodes', json: post })[0];
	if (multipleImages) {
		multipleImages = multipleImages.map((img: { [key: string]: any }) => img.media.image.uri);
	}

	let imageRepost: string = JSONPath({ path: '$..photo_image.uri', json: post })[0] || '';

	let imageRepostAlt: string = JSONPath({ path: '$..accessibility_caption', json: post }) || '';

	let videoSrc: string = JSONPath({ path: '$..playable_url', json: post })[0] || '';
</script>

{#if postSrc}
	<img src={postSrc} alt={postAlt} class="w-full" />
{:else if multipleImages}
	<Carousel {multipleImages} />
{:else if imageRepost}
	<img src={imageRepost} alt={imageRepostAlt} class="min-w-full" />
{:else if videoSrc}
	<video class="w-full" controls src={videoSrc}>
		<track kind="captions" />
	</video>
{/if}
