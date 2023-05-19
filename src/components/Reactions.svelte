<script lang="ts">
	export let feedback;

	let totalReactions =
		feedback.story.feedback_context.feedback_target_with_context.ufi_renderer.feedback
			.comet_ufi_summary_and_actions_renderer.feedback.i18n_reaction_count;
	let totalComments =
		feedback.story.feedback_context.feedback_target_with_context.ufi_renderer.feedback
			.total_comment_count;
	let totalShares =
		feedback.story.feedback_context.feedback_target_with_context.ufi_renderer.feedback
			.comet_ufi_summary_and_actions_renderer.feedback.i18n_share_count;
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
</section>
