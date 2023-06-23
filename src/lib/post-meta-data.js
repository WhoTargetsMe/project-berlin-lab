//Collecting post meta data
//Collect all 50 posts
//Capture time, type, scope(public/private), source (friends etc), engagement(likes, comments, shares), content?(text, image, video, link), post summary

//doesn't work vvvvv
//give things ids
//target the ids
//save the content of ids to post-meta-data object

const getPostType = (post) => {
	if (post.edges) {
		return post.edges[0].category;
	} else {
		return post.category;
	}
};

// let metaData = {
// 	time:
// 		post.node.comet_sections.context_layout?.story.comet_sections.metadata[1]?.story
// 			.creation_time ||
// 		post.node.comet_sections.content.story.attachments?.[0]?.styles.attachment.style_infos?.[0]
// 			.fb_shorts_story?.creation_time ||
// 		post.node.comet_sections.content?.story.comet_sections.context_layout?.story.comet_sections
// 			.metadata[1].story.creation_time ||
// 		post.node.comet_sections.content.story.comet_sections.context_layout.story.comet_sections
// 			.metadata[0].story.creation_time,
// 	type: getPostType(post),
// 	scope:
// 		post.node.comet_sections.content.story.comet_sections.context_layout.story.comet_sections
// 			.metadata[1].story.privacy_scope?.description ||
// 		post.node.comet_sections.content.story.comet_sections.context_layout.story.comet_sections
// 			.metadata[2].story.privacy_scope?.description,
// 	source: '',
// 	engagement: [
// 		post.node.comet_sections.feedback.story.feedback_context?.feedback_target_with_context.ufi_renderer.feedback.comet_ufi_summary_and_actions_renderer?.feedback.cannot_see_top_custom_reactions.top_reactions.edges.map(
// 			(reaction) => {
// 				return `${reaction.i18n_reaction_count}:  ${reaction.node.localized_name}`;
// 			}
// 		),
// 		`total comments: ${
// 			post.node.comet_sections.feedback.story?.feedback_context?.feedback_target_with_context
// 				.ufi_renderer.feedback.total_comment_count
// 		}, totalShares: ${
// 			post.node.feedback.story?.feedback_context?.feedback_target_with_context.ufi_renderer
// 				.feedback.comet_ufi_summary_and_actions_renderer.feedback.i18n_share_count || null
// 		}`
// 	],
// 	content: {
// 		postText:
// 			post.node.comet_sections.content?.story.message?.text ||
// 			post.node.comet_sections.content?.story.attached_story?.message?.text ||
// 			post.node.comet_sections.content.story.attachments[0].comet_footer_renderer?.attachment
// 				.description?.text ||
// 			null,
// 		postImage:
// 			post.node.comet_sections.content.story.attachments[0]?.styles.attachment.media?.photo_image
// 				?.uri ||
// 			post.node.comet_sections.content.story.attachments[0]?.styles.attachment.media
// 				?.large_share_image?.uri ||
// 			post.node.comet_sections.content.story.attachments[0]?.styles.attachment.all_subattachments?.nodes.map(
// 				(img: { [key: string]: any }) => img.media.image.uri
// 			) ||
// 			post.node?.comet_sections.content.story.attached_story?.comet_sections.attached_story?.story
// 				.attached_story.comet_sections.attached_story_layout.story.attachments[0].styles
// 				.attachment.media.photo_image.uri ||
// 			post.node.comet_sections.content.story.attached_story?.attachments[0]?.styles.attachment
// 				.media?.photo_image?.uri ||
// 			post.node?.comet_sections.content.story.attachments[0]?.comet_footer_renderer?.attachment
// 				.call_to_action_renderer?.action_link.media?.lead_gen_brand_image.uri ||
// 			post.node.comet_sections?.content.story.attachments[0]?.styles.attachment.media
// 				?.large_share_image?.uri ||
// 			post.node.comet_sections.content.story?.attachments[0]?.styles.attachment.subattachments?.map(
// 				(attached) => attached
// 			)
// 	},
// 	summary:
// 		post.node.comet_sections.content.story.attachments[0]?.styles.attachment.media
// 			?.accessibility_caption ||
// 		post.node.comet_sections.content.story.attachments[0]?.styles.attachment.target?.comet_cover
// 			?.media_renderer.cover_photo.photo.accessibility_caption ||
// 		`post text: ${
// 			post.node.comet_sections.content?.story.message?.text ||
// 			post.node.comet_sections.content?.story.attached_story?.message?.text
// 		}`
// };

let postTime;
let scope;
let source;
let engagement;
let content;
let summary;

export let postMetaData = {
	postTime,
	scope,
	source,
	engagement,
	content,
	summary
};
// console.log(postMetaData);
