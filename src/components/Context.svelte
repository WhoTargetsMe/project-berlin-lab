<script>
	export let posts = {};

	let posterName =
		post.node.comet_sections.content.story.comet_sections.context_layout?.story.comet_sections
			.actor_photo.story.actors[0].name;

	let postMessage = post.node.comet_sections.content?.story.message?.text;

	let timePosted =
		post.node.comet_sections.context_layout.story.comet_sections.metadata[1].story.creation_time;
</script>

<p>{posterName}</p>
<p>{timePosted}</p>
<p>{postMessage}</p>
