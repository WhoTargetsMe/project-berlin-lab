<script land="ts">
	export let post = {};
	let posterName =
		post.node.comet_sections.content.story.comet_sections.context_layout?.story.comet_sections
			.actor_photo.story.actors[0].name;
</script>

<p>{posterName}</p>
