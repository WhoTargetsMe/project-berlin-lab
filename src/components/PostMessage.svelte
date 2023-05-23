<script>
	export let post = {};

	let postMessage = post.node.comet_sections.content?.story.message?.text;
</script>

<p>{postMessage || ''}</p>
