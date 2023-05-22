<script lang="ts">
	export let post = {};
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import PostMessage from './PostMessage.svelte';
	import PostImage from './PostImage.svelte';
</script>

<main class="card p-4 m-4 bg-white">
	<p>Engagement post</p>
	<header class="card-header flex">
		<Avatar {post} />
		<PosterName {post} />
	</header>
	<section class="p-4">
		<PostMessage {post} />
		<PostImage {post} />
	</section>
</main>
