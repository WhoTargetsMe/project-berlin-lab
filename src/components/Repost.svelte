<script lang="ts">
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import TimePosted from './TimePosted.svelte';
	import RepostMessage from './RepostMessage.svelte';
	import RepostAvatar from './RepostAvatar.svelte';
	import Reactions from './Reactions.svelte';
	import RepostImage from './RepostImage.svelte';
	import RepostName from './RepostName.svelte';

	export let post: Post = {};

	let videoSrc =
		post.node.comet_sections.content.story.attached_story.attachments[0]?.styles.attachment.media
			?.playable_url;
</script>

<main class="card m-4 bg-white">
	<header class="card-header flex">
		<Avatar {post} />
		<section>
			<PosterName {post} />
			<TimePosted {post} />
		</section>
	</header>
	<section class="border rounded-md mt-4">
		<RepostImage {post} />
		{#if videoSrc}
			<video class="w-full aspect-video" controls src={videoSrc}>
				<track kind="captions" />
			</video>
		{/if}
		<header class="card-header flex">
			<RepostAvatar {post} />
			<RepostName {post} />
		</header>

		<RepostMessage {post} />
	</section>
	<Reactions feedback={post.node.comet_sections.feedback} />
</main>
