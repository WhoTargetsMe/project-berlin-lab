<script lang="ts">
	export let post: Post = {};

	let postMessage = post.node.comet_sections.content?.story.message?.text;
	let attachedMessage = post.node.comet_sections.content?.story.attached_story?.message.text;
</script>

<p class="px-4 py-2">{postMessage || attachedMessage || ''}</p>
