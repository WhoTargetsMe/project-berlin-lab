<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let post = {};

	let avatarSrc =
		post.node.comet_sections.content.story.comet_sections.attached_story.story.attached_story
			.comet_sections.attached_story_layout.story.comet_sections.actor_photo.story.actors[0]
			.profile_picture.uri;

	let avatarAlt =
		post.node.comet_sections.content.story.comet_sections.context_layout.story.comet_sections
			.actor_photo.story.actors[0].profile_uri;
</script>

<Avatar src={avatarSrc} alt={avatarAlt} class="border mr-3 w-12"/>
