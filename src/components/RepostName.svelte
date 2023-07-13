<script lang="ts">
	export let post: Post = {};
	import { JSONPath } from 'jsonpath-plus';

	let posterName: string = JSONPath({ path: '$..actor_photo.story.actors[0].name', json: post })[0] || '';

	let nameWithDetails: string = JSONPath({ path: '$..story.title.text', json: post })[0] || '';
</script>

<p class="text-sm mt-1">{nameWithDetails || posterName}</p>
