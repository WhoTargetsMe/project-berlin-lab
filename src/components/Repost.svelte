<script lang="ts">
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import TimePosted from './TimePosted.svelte';
	import RepostMessage from './RepostMessage.svelte';
	import RepostAvatar from './RepostAvatar.svelte';
	import Reactions from './Reactions.svelte';
	import RepostImage from './RepostImage.svelte';
	import RepostName from './RepostName.svelte';
	import { JSONPath } from 'jsonpath-plus';
	export let post: Post = {};

	let videoSrc: string = JSONPath({ path: '$..playable_url', json: post })[0];
</script>

<main class="card m-4 p-3 bg-white">
	<header class="card-header flex">
		<Avatar {post} />
		<section>
			<PosterName {post} />
			<TimePosted {post} />
		</section>
	</header>
	<section class="rounded-md mt-4">
		<RepostMessage {post} />
		<RepostImage {post} />
		{#if videoSrc}
			<video class="w-full aspect-video" controls src={videoSrc}>
				<track kind="captions" />
			</video>
		{/if}
		<header class="card-header flex items-center">
			<RepostAvatar {post} />
			<RepostName {post} />
		</header>
	</section>
	<hr class="divide-slate-200 mx-6 mt-4" />
	<Reactions feedback={post.node.comet_sections.feedback} />
</main>
