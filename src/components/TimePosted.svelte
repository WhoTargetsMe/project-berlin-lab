<script lang="ts">
	export let post: Post = {};
	import { flags } from '$lib/flags-store';

	//todo format time
	let timePosted =
		post.node.comet_sections.context_layout.story.comet_sections.metadata[1].story.creation_time;
</script>

{#if Object.keys($flags).length >= 1}
	{#if $flags.should_display_time_posted.enabled}
		<p>{timePosted}</p>
	{/if}
{/if}
