<script lang="ts">
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import TimePosted from './TimePosted.svelte';
	import PostMessage from './PostMessage.svelte';
	import PostImage from './PostImage.svelte';
	import Reactions from './Reactions.svelte';
	import LikeCommentShareButtons from './LikeCommentShareButtons.svelte';
	import PostVideo from './PostVideo.svelte';
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
		<PostImage {post} />
		<PostVideo {post} />
	</section>
	<TrackedEvent postMetaData={post} eventName="Organic Post Reaction Clicked">
		<Reactions feedback={post.node.comet_sections.feedback} />
		<LikeCommentShareButtons />
	</TrackedEvent>
</main>
