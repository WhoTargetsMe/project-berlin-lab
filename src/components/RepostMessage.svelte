<script>
	export let post = {};

	let attachedMessage = post.node.comet_sections.content?.story.attached_story?.message?.text;
</script>

<p class="px-4 py-2">{attachedMessage || ''}</p>

<style>
	p {
		font-size: 0.9em !important;
	}
</style>
