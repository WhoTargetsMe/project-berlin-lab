<script>
	export let post = {};

	let postMessage = post.node.comet_sections.content?.story.message?.text;
</script>

<p class="px-5 py-2">{postMessage || ''}</p>
