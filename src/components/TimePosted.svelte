<script>
	export let post = {};

	//todo format time?

	let timePosted =
		post.node.comet_sections.context_layout.story.comet_sections.metadata[1].story.creation_time;
</script>

<p>{timePosted}</p>
