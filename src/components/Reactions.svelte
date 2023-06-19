<script lang="ts">
	import { flags } from '$lib/flags-store';
	export let feedback;
	import Like2 from './icons/Like2.svelte';
	import Love from './icons/Love.svelte';
	import Care from './icons/Care.svelte';
	import Angry from './icons/Angry.svelte';
	import Haha from './icons/Haha.svelte';
	import Sad from './icons/Sad.svelte';
	import Wow from './icons/Wow.svelte';
	import Comment from './icons/Comment.svelte';
	import Share from './icons/Share.svelte';

	let totalReactions =
		feedback.story.feedback_context?.feedback_target_with_context.ufi_renderer.feedback
			.comet_ufi_summary_and_actions_renderer.feedback.i18n_reaction_count;
	let totalComments =
		feedback.story.feedback_context?.feedback_target_with_context.ufi_renderer.feedback
			.total_comment_count;
	let totalShares =
		feedback.story.feedback_context?.feedback_target_with_context.ufi_renderer.feedback
			.comet_ufi_summary_and_actions_renderer.feedback.i18n_share_count;

	let reactionTypes =
		feedback.story.feedback_context?.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer?.feedback.cannot_see_top_custom_reactions.top_reactions.edges.map(
			(reaction) => {
				return `${reaction.i18n_reaction_count}:  ${reaction.node.localized_name}`;
			}
		);

	$: hasFlags = Object.keys($flags).length > 0;
</script>

{#if hasFlags}
	{#if $flags.should_show_reactions}
		<section class="mx-6 my-4 flex justify-between">
			{#if totalReactions > 0}
				<section class="flex">
					{#each reactionTypes as reaction, index}
						{#if index < 3}
							{#if reaction.includes('Like')}
								<Like2 />
							{:else if reaction.includes('Love')}
								<Love />
							{:else if reaction.includes('Care')}
								<Care />
							{:else if reaction.includes('Angry')}
								<Angry />
							{:else if reaction.includes('Haha')}
								<Haha />
							{:else if reaction.includes('Wow')}
								<Wow />
							{:else}
								<Sad />
							{/if}
						{/if}
					{/each}
					<p>{totalReactions}</p>
				</section>
			{/if}
			<section class="flex">
				{#if totalComments > 0}
					<section class="flex">
						{totalComments}
						<Comment />
					</section>
				{/if}
				{#if totalShares > 0}
					<section>
						<Share />
						{totalShares}
					</section>
				{/if}
			</section>
		</section>
	{/if}
{/if}
