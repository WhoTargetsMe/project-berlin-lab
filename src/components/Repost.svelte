<script>
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import TimePosted from './TimePosted.svelte';
	import RepostMessage from './RepostMessage.svelte';
	import RepostAvatar from './RepostAvatar.svelte';
	import Reactions from './Reactions.svelte';
	import RepostImage from './RepostImage.svelte';
	import RepostName from './RepostName.svelte';

	export let shouldDisplayReactions = true;
	export let shouldDisplayTimePosted = false;
	export let shouldDisplayPostImages = true;

	export let post = {};

	let originalPoster =
		post.node.comet_sections.content.story.comet_sections.attached_story.story.attached_story
			.comet_sections.attached_story_layout.story.comet_sections.actor_photo.story.actors[0].name;

	let videoSrc =
		post.node.comet_sections.content.story.attached_story.attachments[0].styles.attachment.media
			?.playable_url;
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
	</header>
	<section class="p-4">
		{#if shouldDisplayPostImages}
			<RepostImage {post} />
		{/if}
		{#if videoSrc}
			<video controls src={videoSrc}>
				<track kind="captions" />
			</video>
		{/if}
		<header class="card-header flex">
			<RepostAvatar {post} />
			<RepostName {post} />
		</header>

		<RepostMessage {post} />
	</section>

	{#if shouldDisplayReactions}
		<Reactions feedback={post.node.comet_sections.feedback} />
	{/if}

	<!-- <footer class="card-footer">Like Comment Share</footer> -->
</main>
