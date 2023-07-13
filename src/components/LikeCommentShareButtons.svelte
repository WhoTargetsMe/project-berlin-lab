<script lang="ts">
	export let shouldShowShare = true;
	import Like from './icons/Like.svelte';
	import LikeFilled from './icons/LikeFilled.svelte';
	import Comment from './icons/Comment.svelte';
	import Share from './icons/Share.svelte';
	import CommentFilled from './icons/CommentFilled.svelte';
	import ShareFilled from './icons/ShareFilled.svelte';

	let liked: boolean = false;
	let shared: boolean = false;
	let commented: boolean = false;

	const clickLike = (): void => {
		liked ? (liked = false) : (liked = true);
	};

	const clickShare = (): void => {
		shared ? (shared = false) : (shared = true);
	};

	const clickComment = (): void => {
		commented ? (commented = false) : (commented = true);
	};
</script>

<!-- <TrackedEvent postMetaData={post} > -->
<hr class="divide-slate-200 mx-6" />
<main class="flex justify-around p-2">
	<button class="flex flex-1 justify-center py-1 like-button" on:click={clickLike}>
		{#if liked}
			<LikeFilled />
		{:else}
			<Like />
		{/if}
		<p class="mx-1">Like</p>
	</button>
	<button class="flex flex-1 justify-center py-1 comment-button" on:click={clickComment}>
		{#if commented}
			<CommentFilled />
		{:else}
			<Comment />
		{/if}
		<p class="mx-1">Comment</p>
	</button>
	{#if shouldShowShare}
		<button class="flex flex-1 justify-center py-1 share-button" on:click={clickShare}>
			{#if shared}
				<ShareFilled />
			{:else}
				<Share />
			{/if}
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
