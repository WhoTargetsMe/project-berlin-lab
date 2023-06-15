<script lang="ts">
	export let post: Post = {};

	let src =
		post.node.comet_sections.content.story.comet_sections.context_layout?.story.comet_sections
			.actor_photo.story.actors[0].profile_picture.uri;
	let alt = 'Profile picture';
</script>

<img class="inline-block h-12 w-12 rounded-full mr-3" {src} {alt} />
