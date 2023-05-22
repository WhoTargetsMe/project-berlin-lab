<script lang="ts">
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	// import PostImage from './PostImage.svelte';
	import PostMessage from './PostMessage.svelte';
	import Reactions from './Reactions.svelte';
	export let post = {};
	export let shouldDisplayReactions = true;

	let postMessage = post.node.comet_sections.content?.story.message?.text;
</script>

<main class="card p-4 m-4 bg-white">
	<p>Sponsored post</p>
	<header class="card-header flex">
		<Avatar {post} />
		<PosterName {post} />
	</header>
	<section class="p-4">
		<PostMessage {post} />
		<!-- <PostImage {post} /> -->
	</section>
	{#if shouldDisplayReactions}
		<Reactions feedback={post.node.comet_sections.feedback} />
	{/if}
</main>
