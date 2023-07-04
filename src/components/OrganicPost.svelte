<script lang="ts">
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import TimePosted from './TimePosted.svelte';
	import PostMessage from './PostMessage.svelte';
	import PostImage from './PostImage.svelte';
	import Reactions from './Reactions.svelte';
	import LikeCommentShareButtons from './LikeCommentShareButtons.svelte';
	import TrackedEvent from './TrackedEvent.svelte';
	export let post: Post = {};
</script>

<main class="card m-4 bg-white shadow-sm">
	<header class="card-header flex">
		<Avatar {post} />
		<section>
			<PosterName {post} />
			<TimePosted {post} />
		</section>
	</header>
	<section>
		<PostMessage {post} />
		<TrackedEvent eventName="Organic Post Engagement" postMetaData={post}>
			<PostImage {post} />
		</TrackedEvent>
	</section>
	<TrackedEvent postMetaData={post} eventName="Organic Post Reaction clicked">
		<Reactions feedback={post.node.comet_sections.feedback} />
		<LikeCommentShareButtons />
	</TrackedEvent>
</main>
