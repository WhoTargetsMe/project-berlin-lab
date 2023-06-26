<script lang="ts">
	import { JSONPath } from 'jsonpath-plus';
	export let post: { [key: string]: any };

	let videoSrc = JSONPath({ path: '$..playable_url', json: post })[0];
</script>

{#if videoSrc}
	<video class="w-full aspect-video" controls src={videoSrc}>
		<track kind="captions" />
	</video>
{/if}
