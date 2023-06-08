<script>
	export let shouldShowShare = true;
	import Like from './icons/Like.svelte';
	import Comment from './icons/Comment.svelte';
	import Share from './icons/Share.svelte';
</script>

<hr class="divide-slate-200 mx-6" />
<main class="flex justify-around p-2 m-y">
	<section class="flex">
		<Like />
		<p>Like</p>
	</section>
	<section class="flex">
		<Comment />
		<p>Comment</p>
	</section>
	{#if shouldShowShare}
		<section class="flex">
			<Share />
			<p>Share</p>
		</section>
	{/if}
</main>

<style>
	hr {
		border-color: rgb(218, 218, 218);
	}
</style>
