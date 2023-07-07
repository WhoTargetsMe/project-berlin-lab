<script lang="ts">
	import Avatar from './Avatar.svelte';
	import PosterName from './PosterName.svelte';
	import TimePosted from './TimePosted.svelte';
	import RepostMessage from './RepostMessage.svelte';
	import RepostAvatar from './RepostAvatar.svelte';
	import Reactions from './Reactions.svelte';
	import RepostImage from './RepostImage.svelte';
	import RepostName from './RepostName.svelte';
	import { JSONPath } from 'jsonpath-plus';
	export let post: Post = {};
</script>

<main class="card m-5 p-3 bg-white">
	<header class="card-header flex">
		<Avatar {post} />
		<section>
			<PosterName {post} />
			<TimePosted {post} />
		</section>
	</header>
	<RepostMessage {post} />
	<section class="border rounded mt-4">
		<RepostImage {post} />
		<header class="card-header flex items-center mb-2">
			<RepostAvatar {post} />
			<RepostName {post} />
		</header>
	</section>
	<Reactions feedback={post.node.comet_sections.feedback} />
</main>
