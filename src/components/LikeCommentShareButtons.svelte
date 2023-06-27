<script lang="ts">
	export let shouldShowShare = true;
	import Like from './icons/Like.svelte';
	import LikeFilled from './icons/LikeFilled.svelte';
	import Comment from './icons/Comment.svelte';
	import Share from './icons/Share.svelte';
	// import TrackedEvent from './TrackedEvent.svelte';

	let liked: boolean = false;
	
	const clickLike = (): void => {
		liked ? (liked = false) : (liked = true);
	};
</script>

<!-- <TrackedEvent postMetaData={post} > -->
<hr class="divide-slate-200 mx-6" />
<main class="flex justify-around p-2">
	<button class="flex flex-1 justify-center py-1" on:click={clickLike}>
		{#if liked}
			<LikeFilled />
		{:else}
			<Like />
		{/if}
		<p class="mx-1">Like</p>
	</button>
	<button class="flex flex-1 justify-center py-1">
		<Comment />
		<p class="mx-1">Comment</p>
	</button>
	{#if shouldShowShare}
		<button class="flex flex-1 justify-center py-1">
			<Share />
			<p class="mx-1">Share</p>
		</button>
	{/if}
</main>

<style>
	hr {
		border-color: rgb(218, 218, 218);
	}
	button:hover {
		background-color: rgb(228, 227, 227);
	}
</style>
