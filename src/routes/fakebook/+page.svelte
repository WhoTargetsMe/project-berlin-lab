<script>
	import { onMount } from 'svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

	const epochConverstion = (timestamp) => {
		//should return how many minutes if less than 1 hour
		//should return how many hours if <24
		//new conditions vvvvvvvv
		//should return how many days between current date & timestamp
		//if greater than 7, should show date and time of post
		let currentDate = new Date();
		const epochDate = new Date(timestamp * 1000);

		const difference = currentDate.getTime() - epochDate.getTime();
		const hours = Math.floor(difference / (1000 * 60 * 60));

		if (hours < 24) {
			return `${hours}h`;
		} else {
			return `${Math.floor(hours / 24)}d`;
		}
	};
</script>

<!-- {#each data as data} -->
<main class="card">
	<!-- <header class="card-header flex">
			<Avatar
				src={data.comet_sections.content.story.comet_sections.context_layout.story.comet_sections
					.actor_photo.story.actors[0].profile_picture.uri}
				alt=""
			/> -->
	<!-- <section>
				<p>
					{data.comet_sections.content.story.actors[0].name}
				</p>
				<p>
					{!data.comet_sections.context_layout.story.comet_sections.metadata[1].story.creation_time
						? ''
						: epochConverstion(
								data.comet_sections.context_layout.story.comet_sections.metadata[1].story
									.creation_time
						  )}
				</p>
			</section> -->
	<p>...</p>
	<!-- </header> -->
	<!-- <section class="p-4">
		<p>
			{!data.content.story.message.text ? '' : data.content.story.message.text}
		</p>
		{#if !data.content.story.attachments[0].styles.attachment.media.hasOwnProperty('photo_image')}
			<img
				src={data.content.story.attachments[0].styles.attachment.media.flexible_height_share_image
					.uri}
				alt={data.content.story.attachments[0].styles.attachment.title_with_entities.text}
			/>
		{:else if data.content.story.attachments[0].styles.attachment.media.hasOwnProperty('photo_image')}
			<img
				src={data.content.story.attachments[0].styles.attachment.media.photo_image.uri}
				alt={data.content.story.attachments[0].styles.attachment.media.accessibility_caption}
			/>
		{:else}
			<p>Reel goes here</p>
		{/if}
	</section>
	<section class="flex justify-between">
		<p>
			Total reactions: {data.feedback.story.feedback_context.feedback_target_with_context
				.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer.feedback.i18n_reaction_count}
		</p>
		<p>
			Total Comments: {data.feedback.story.feedback_context.feedback_target_with_context
				.ufi_renderer.feedback.total_comment_count}
		</p>
		{#if parseInt(data.feedback.story.feedback_context.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer.feedback.i18n_share_count) < 0}
			<p>
				Total shares: {data.feedback.story.feedback_context.feedback_target_with_context
					.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer.feedback.i18n_share_count}
			</p>
		{:else}{/if}
	</section>
	<footer class="card-footer">Like Comment Share</footer> -->
</main>
<!-- {/each} -->
