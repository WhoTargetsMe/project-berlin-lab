<script lang="ts">
	export let feedback;
	export let shouldDisplayReactionTypes = false;

	let totalReactions =
		feedback.story.feedback_context.feedback_target_with_context.ufi_renderer.feedback
			.comet_ufi_summary_and_actions_renderer.feedback.i18n_reaction_count;
	let totalComments =
		feedback.story.feedback_context.feedback_target_with_context.ufi_renderer.feedback
			.total_comment_count;
	let totalShares =
		feedback.story.feedback_context.feedback_target_with_context.ufi_renderer.feedback
			.comet_ufi_summary_and_actions_renderer.feedback.i18n_share_count;

	let reactionTypes =
		feedback.story.feedback_context.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer?.feedback.cannot_see_top_custom_reactions.top_reactions.edges.map(
			(reaction) => {
				return `${reaction.i18n_reaction_count}:  ${reaction.node.localized_name}`;
			}
		);
</script>

<section class="flex justify-between">
	<p>
		Total reactions: {totalReactions}
	</p>
	<p>
		Total Comments: {totalComments}
	</p>
	<p>
		Total shares: {totalShares}
	</p>
	{#if shouldDisplayReactionTypes}
		{#each reactionTypes as reaction}
			<li>{reaction}</li>
		{/each}
	{/if}
</section>
