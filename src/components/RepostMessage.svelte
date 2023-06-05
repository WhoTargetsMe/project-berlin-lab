<script>
	export let post = {};

	let attachedMessage = post.node.comet_sections.content?.story.attached_story?.message.text;
</script>

<p>{attachedMessage || ''}</p>
