<script lang="ts">
	export let post = {};

	let postSrc =
		post.node.comet_sections.content.story.attachments[0]?.styles.attachment.media?.photo_image
			?.uri;

	let postAlt =
		post.node.comet_sections.content.story.attachments[0]?.styles.attachment.media
			?.accessibility_caption;

	let postMultipleImage =
		post.node.comet_sections.content.story.attachments[0]?.styles.attachment.all_subattachments?.nodes.map(
			(img) => img.media.image.uri
		);

	let imageRepost =
		post.node?.comet_sections.content.story.attached_story?.comet_sections.attached_story?.story
			.attached_story.comet_sections.attached_story_layout.story.attachments[0].styles.attachment
			.media.photo_image.uri ||
		post.node.comet_sections.content.story.attached_story?.attachments[0]?.styles.attachment.media
			?.photo_image?.uri;

	// let imageRepostAlt =
	// 	post.node.comet_sections.content.story.attached_story.comet_sections.content.story.attached_story.styles?.attachment.media
	// 		.accessibility_caption;

	// let postVideo =
</script>

{#if postSrc}
	<img src={postSrc} alt={postAlt} />
{/if}

{#if postMultipleImage}
	{#each postMultipleImage as image}
		<img src={image} alt={image} />
	{/each}
{/if}

{#if imageRepost}
	<img src={imageRepost} alt={imageRepost} />
{/if}
