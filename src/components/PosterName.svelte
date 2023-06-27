<script lang="ts">
	import { JSONPath } from 'jsonpath-plus';
	export let post: Post = {};

	let posterName: string = JSONPath({ path: '$..actors[0].name', json: post })[0];
	
	let nameWithDetails: string = JSONPath({ path: '$..title.text', json: post })[0];
</script>

<p class="font-medium mt-1">{nameWithDetails || posterName}</p>
