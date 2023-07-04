<script lang="ts">
	import { JSONPath } from 'jsonpath-plus';
	export let post: Post = {};

	let src: string = JSONPath({ path: '$..profile_picture.uri', json: post })[0];

	let alt: string = 'Profile picture';
</script>

<img class="inline-block h-11 w-11 rounded-full mr-3" {src} {alt} />
