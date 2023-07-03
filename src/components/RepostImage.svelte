<script lang="ts">
	import Carousel from './Carousel.svelte';
	import { JSONPath } from 'jsonpath-plus';
	export let post: Post = {};

	let multipleImages = JSONPath({ path: '$..all_subattachments.nodes', json: post })[0];

	if (multipleImages) {
		multipleImages.map((img: { [key: string]: any }) => img.media.image.uri);
	}

	let imageRepost = JSONPath({ path: '$..media.photo_image.uri', json: post })[0];
</script>

{#if imageRepost}
	<img src={imageRepost} alt="organic re-posts" class="min-w-full" />
{/if}

{#if multipleImages}
	<Carousel {multipleImages} />
{/if}
