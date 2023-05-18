<script>
	import { onMount } from 'svelte';
	import OrganicImagePost from '../../components/card/OrganicImagePost.svelte';
	import OrganicPostNoImage from '../../components/card/OrganicPostNoImage.svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	const getPostType = (post) => {
		if (post.edges) {
			return post.edges[0].category;
		} else {
			return post.category;
		}
	};

	const isOrganicRepost = (post) => {
		return post.node.attached_story !== null;
	};

	const isOrganicNoImagePost = (post) => {
		return post.node.content?.story.attachments.length === 0;
	};
</script>

<main>
	{#each data.posts.posts as item}
		{#if getPostType(item) === 'ENGAGEMENT'}
			<h1>Engagement type of Posts</h1>
		{:else if getPostType(item) === 'SPONSORED'}
			<h1>Sponsored type of Posts</h1>
		{:else if getPostType(item) === 'ORGANIC' && isOrganicRepost(item)}
			<OrganicImagePost
				avatarSrc={item.node.comet_sections?.content.story.comet_sections.context_layout?.story
					.comet_sections.actor_photo?.story.actors[0].profile_picture.uri}
				avatarAlt={item.node.comet_sections.content.story.comet_sections.context_layout?.story
					.comet_sections.actor_photo.story.actors[0].profile_uri}
				posterName={item.node.comet_sections.content.story.comet_sections.context_layout?.story
					.comet_sections.actor_photo.story.actors[0].name}
				timePosted={item.node.comet_sections.context_layout.story.comet_sections.metadata[1].story
					.creation_time}
				postMessage={item.node.comet_sections.content?.story.message?.text}
				postImage={item.node.comet_sections.content.story.attachments[0]?.styles.attachment.media
					?.photo_image?.uri}
				postSrc={item.node.comet_sections.content.story.attachments[0]?.styles.attachment.media
					?.photo_image?.uri}
				postAlt={item.node.comet_sections.content.story?.attachments[0]?.styles.attachment.media
					?.accessibility_caption}
				totalReactions={item.node.comet_sections.feedback.story.feedback_context
					.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer
					.feedback.i18n_reaction_count}
				totalComments={item.node.comet_sections.feedback.story.feedback_context
					.feedback_target_with_context.ufi_renderer.feedback.total_comment_count}
				totalShares={item.node.comet_sections.feedback.story.feedback_context
					.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer
					.feedback.i18n_share_count}
			/>
		{:else if getPostType(item) === 'ORGANIC' && isOrganicNoImagePost(item)}
			<OrganicPostNoImage
				avatarSrc={item.node.comet_sections?.content.story.comet_sections.context_layout?.story
					.comet_sections.actor_photo?.story.actors[0].profile_picture.uri}
				avatarAlt={item.node.comet_sections.content.story.comet_sections.context_layout?.story
					.comet_sections.actor_photo.story.actors[0].profile_uri}
				posterName={item.node.comet_sections.content.story.comet_sections.context_layout?.story
					.comet_sections.actor_photo.story.actors[0].name}
				timePosted={item.node.comet_sections.context_layout.story.comet_sections.metadata[1].story
					.creation_time}
				postMessage={item.node.comet_sections.content?.story.message.text}
				totalReactions={item.node.comet_sections.feedback.story.feedback_context
					.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer
					.feedback.i18n_reaction_count}
				totalComments={item.node.comet_sections.feedback.story.feedback_context
					.feedback_target_with_context.ufi_renderer.feedback.total_comment_count}
				totalShares={item.node.comet_sections.feedback.story.feedback_context
					.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer
					.feedback.i18n_share_count}
			/>
		{:else if getPostType(item) === 'ORGANIC' && !isOrganicRepost(item) && !isOrganicNoImagePost(item)}
			<OrganicImagePost
				avatarSrc={item.node.comet_sections?.content.story.comet_sections.context_layout?.story
					.comet_sections.actor_photo?.story.actors[0].profile_picture.uri}
				avatarAlt={item.node.comet_sections.content.story.comet_sections.context_layout?.story
					.comet_sections.actor_photo.story.actors[0].profile_uri}
				posterName={item.node.comet_sections.content.story.comet_sections.context_layout?.story
					.comet_sections.actor_photo.story.actors[0].name}
				timePosted={item.node.comet_sections.context_layout.story.comet_sections.metadata[1].story
					.creation_time}
				postMessage={item.node.comet_sections.content?.story.message?.text}
				postImage={item.node.comet_sections.content.story.attachments[0]?.styles.attachment.media
					?.photo_image?.uri}
				postSrc={item.node.comet_sections.content.story.attachments[0]?.styles.attachment.media
					?.photo_image?.uri}
				postAlt={item.node.comet_sections.content.story?.attachments[0]?.styles.attachment.media
					?.accessibility_caption}
				totalReactions={item.node.comet_sections.feedback.story.feedback_context
					.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer
					.feedback.i18n_reaction_count}
				totalComments={item.node.comet_sections.feedback.story.feedback_context
					.feedback_target_with_context.ufi_renderer.feedback.total_comment_count}
				totalShares={item.node.comet_sections.feedback.story.feedback_context
					.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer
					.feedback.i18n_share_count}
			/>
		{:else}
			<h1>Facebook Shorts</h1>
		{/if}
	{/each}
</main>
