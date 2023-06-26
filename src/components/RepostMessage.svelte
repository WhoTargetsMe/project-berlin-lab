<script lang="ts">
	export let post: Post = {};
	import { JSONPath } from 'jsonpath-plus';

	let attachedMessage = JSONPath({ path: '$..attached_story.message.text', json: post });
</script>

<p class="text-sm">{attachedMessage || ''}</p>
