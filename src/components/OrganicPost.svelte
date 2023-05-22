<script lang="ts">
	import Avatar from './Avatar.svelte';
	import PostImage from './PostImage.svelte';
	import Reactions from './Reactions.svelte';

	export let post = {};

	// example display switch
	export let shouldDisplayReactions = true;

	const isRepost = (post) => {
		return post.node.attached_story !== null;
	};

	const isNoImagePost = (post) => {
		return post.node.content?.story.attachments.length === 0;
	};

	// TODO move to avatar components


	// expect this will be generic
	let posterName =
		post.node.comet_sections.content.story.comet_sections.context_layout?.story.comet_sections
			.actor_photo.story.actors[0].name;

	// FIXME will this be generic? maybe move to context component
	let timePosted = '';
	// post.node.comet_sections.context_layout.story.comet_sections.metadata[1].story.creation_time;

	let postMessage = post.node.comet_sections.content?.story.message?.text;

	// TODO move to PostImage component
	// let postImage =
	// 	post.node.comet_sections.content.story.attachments[0]?.styles.attachment.media?.photo_image
	// 		?.uri;
	// let postSrc =
	// 	post.node.comet_sections.content.story.attachments[0]?.styles.attachment.media?.photo_image
	// 		?.uri;
	// let postAlt =
	// 	post.node.comet_sections.content.story?.attachments[0]?.styles.attachment.media
	// 		?.accessibility_caption;
</script>

<main class="card p-4 m-4 bg-white">
	<header class="card-header flex">
		<Avatar post={post}/>
		<section>
			<p>
				{posterName}
			</p>
			<p>
				{timePosted}
			</p>
		</section>
		<p>...</p>
	</header>
	<section class="p-4">
		<p>
			{!postMessage ? '' : postMessage}
		</p>
		<PostImage post={post} />
	</section>

	{#if shouldDisplayReactions}
		<Reactions feedback={post.node.comet_sections.feedback} />
	{/if}

	<!-- <footer class="card-footer">Like Comment Share</footer> -->
</main>
