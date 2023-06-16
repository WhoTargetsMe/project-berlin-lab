<script lang="ts">
	export let post = {};
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import PostMessage from './PostMessage.svelte';
	import PostImage from './PostImage.svelte';
	import Reactions from './Reactions.svelte';
	import LikeCommentShareButtons from './LikeCommentShareButtons.svelte';
	import { flags } from '$lib/flags-store';

	const video =
		post.node.comet_sections.content.story.attachments[0].styles.attachment.media?.playable_url;

	$: hasFlags = Object.keys($flags).length > 0;
</script>

<main class="card bg-white m-4">
	{#if hasFlags}
		{#if $flags.should_show_labels.enabled}
			<p class="p-4 text-slate-600">Suggested for you</p>
			<hr class="divide-slate-200 mx-4" />
		{/if}
	{/if}
	<header class="card-header flex">
		<Avatar {post} />
		<PosterName {post} />
	</header>
	<section class="mx-0">
		<PostMessage {post} />
		{#if PostImage}
			<PostImage {post} />
		{/if}
		{#if video}
			<video class="w-full" controls src={video}>
				<track kind="captions" />
			</video>
		{/if}
	</section>
	<Reactions feedback={post.node.comet_sections.feedback} />
	<LikeCommentShareButtons />
</main>
