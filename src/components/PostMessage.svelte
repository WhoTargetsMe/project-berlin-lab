<script lang="ts">
	import { JSONPath } from 'jsonpath-plus';
	export let post: Post = {};

	let postMessage = JSONPath({ path: '$..message.text', json: post })[0];
</script>

<p class="px-4 py-2">{postMessage || ''}</p>
