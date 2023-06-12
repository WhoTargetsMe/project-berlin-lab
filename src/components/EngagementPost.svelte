<script lang="ts">
	export let post = {};
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import PostMessage from './PostMessage.svelte';
	import PostImage from './PostImage.svelte';
	import Reactions from './Reactions.svelte';
	import LikeCommentShareButtons from './LikeCommentShareButtons.svelte';
</script>

<main class="card bg-white m-4">
	<p class="p-4 text-slate-600">Suggested for you</p>
	<hr class="divide-slate-200 mx-4" />
	<header class="card-header flex">
		<Avatar {post} />
		<PosterName {post} />
	</header>
	<section class="mx-0">
		<PostMessage {post} />
		<PostImage {post} />
	</section>
	<Reactions feedback={post.node.comet_sections.feedback} />
	<LikeCommentShareButtons />
</main>
