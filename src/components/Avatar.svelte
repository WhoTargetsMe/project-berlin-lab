<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let post: Post = {};

	let src =
		post.node.comet_sections.content.story.comet_sections.context_layout.story.comet_sections
			.actor_photo.story.actors[0].profile_picture.uri;
	let alt = 'Profile picture';
</script>

<Avatar {src} {alt} class="border mr-3" />
