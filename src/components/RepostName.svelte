<script land="ts">
	export let post = {};
	let posterName =
		post.node.comet_sections.content.story.comet_sections.attached_story.story.attached_story
			.comet_sections.attached_story_layout.story.comet_sections.actor_photo.story.actors[0].name;

	let nameWithDetails =
		post.node.attached_story.comet_sections.context_layout.story.comet_sections.title.story.title
			?.text;
</script>

<p class="font-medium mt-1">{nameWithDetails || posterName}</p>
