<script lang="ts">
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import TimePosted from './TimePosted.svelte';
	import PostMessage from './PostMessage.svelte';
	import PostImage from './PostImage.svelte';
	import Reactions from './Reactions.svelte';
	import PostVideo from './PostVideo.svelte';

	export let post:Post = {};

	// example display switch
	export let shouldDisplayReactions = true;
	export let shouldDisplayTimePosted = false;
	export let shouldDisplayPostImages = true;
</script>

<main class="card m-4 bg-white shadow-sm">
	<header class="card-header flex">
		<Avatar {post} />
		<section>
			<PosterName {post} />
			{#if shouldDisplayTimePosted}
				<TimePosted {post} />
			{/if}
		</section>
	</header>
	<section>
		<PostMessage {post} />
		{#if shouldDisplayPostImages}
			<PostImage {post} />
			<PostVideo {post} />
		{/if}
	</section>

	{#if shouldDisplayReactions}
		<Reactions feedback={post.node.comet_sections.feedback} />
	{/if}
</main>
