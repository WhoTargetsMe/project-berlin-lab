<script lang="ts">
	import Avatar from './Avatar.svelte';
	import CallToAction from './CallToAction.svelte';
	import LikeCommentButtons from './LikeCommentButtons.svelte';
	import PosterName from './PosterName.svelte';
	import PostImage from './PostImage.svelte';
	import PostMessage from './PostMessage.svelte';
	import Reactions from './Reactions.svelte';
	export let post = {};

	let postMessage = post.node.comet_sections.content.story.message.text;

	console.log(post);

	const lineClampText = document.querySelectorAll('.line-clamp-2');
	const readMoretext = document.querySelectorAll('.read-more-text');

	// const isTextClamped = (text) =>
	// 	text.scrollHeight > text.clientHeight || text.offsetWidth < text.scrollWidth;

	const readMore = () =>
		readMoretext.forEach((seeMore) => {
			seeMore.addEventListener('click', () => {
				lineClampText?.classList.remove('line-clamp-2');
				readMoretext.textContent = '';
			});
		});
</script>

<main class="card my-4 bg-white shadow-sm">
	<header class="card-header flex">
		<Avatar {post} />
		<section>
			<PosterName {post} />
			<p class="p-0 m-0">Sponsored</p>
		</section>
	</header>
	<section class="mx-0 px-0">
		<PostMessage {post} />
		<CallToAction {post} />
	</section>
	<Reactions feedback={post.node.comet_sections.feedback} />
	<LikeCommentButtons />
</main>

<style>
	p {
		font-size: 0.8em !important;
		color: grey;
	}
</style>
