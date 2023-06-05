<script lang="ts">
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import TimePosted from './TimePosted.svelte';
	import PostMessage from './PostMessage.svelte';
	import PostImage from './PostImage.svelte';
	import Reactions from './Reactions.svelte';

	export let post = {};

	// example display switch
	export let shouldDisplayReactions = true;
	export let shouldDisplayTimePosted = false;
	export let shouldDisplayPostImages = true;

	const isRepost = (post:[]) => {
		 post.node.comet_sections.content.story.attached_story !== null
	}
</script>

<main class="card p-4 m-4 bg-white">
	<header class="card-header flex">
		<Avatar {post} />
		<section>
			<PosterName {post} />
			{#if shouldDisplayTimePosted}
				<TimePosted {post} />
			{/if}
		</section>
		<p>...</p>
	</header>
	<section class="p-4">
		<PostMessage {post} />
		{#if shouldDisplayPostImages}
			<PostImage {post} />
		{/if}
	</section>

	{#if shouldDisplayReactions}
		<Reactions feedback={post.node.comet_sections.feedback} />
	{/if}

	<!-- <footer class="card-footer">Like Comment Share</footer> -->
</main>
