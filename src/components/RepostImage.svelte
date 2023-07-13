<script lang="ts">
	import Carousel from './Carousel.svelte';
	import { JSONPath } from 'jsonpath-plus';
	export let post: Post = {};

	let multipleImages: [] = JSONPath({ path: '$..all_subattachments.nodes', json: post })[0] ;

	if (multipleImages) {
		multipleImages = multipleImages.map((img: { [key: string]: any }) => img.media.image.uri);
	}

	let imageRepost: string = JSONPath({ path: '$..media.photo_image.uri', json: post })[0] || '';

	let videoSrc: string = JSONPath({ path: '$..playable_url', json: post })[0] || '';
</script>

{#if imageRepost}
	<img src={imageRepost} alt="organic re-posts" class="min-w-full rounded-t" />
{:else if multipleImages}
	<Carousel {multipleImages} />
{:else if videoSrc}
	<video class="w-full aspect-video" controls src={videoSrc}>
		<track kind="captions" />
	</video>
{/if}
