<script lang="ts">
	import Avatar from './Avatar.svelte';
	import CallToAction from './CallToAction.svelte';
	import LikeCommentShareButtons from './LikeCommentShareButtons.svelte';
	import PosterName from './PosterName.svelte';
	import PostMessage from './PostMessage.svelte';
	import Reactions from './Reactions.svelte';
	export let post: Post = {};
	import { flags } from '$lib/flags-store';

	$: hasFlags = Object.keys($flags).length > 0;
</script>

<main class="card m-4 bg-white shadow-sm">
	<header class="card-header flex">
		<Avatar {post} />
		<section>
			<PosterName {post} />
			{#if hasFlags}
				{#if $flags.should_show_labels.enabled}
					<p class="p-0 m-0 text-sm text-slate-400">Sponsored</p>
				{/if}
			{/if}
		</section>
	</header>
	<section class="mx-0 px-0">
		<PostMessage {post} />
		<CallToAction {post} />
	</section>
	<Reactions feedback={post.node.comet_sections.feedback} />
	<LikeCommentShareButtons shouldShowShare={false} />
</main>
