<script lang="ts">
	export let post = {};

	let postSrc;
	let postMultipleImage;
	let postAlt;
    let imageRepost = post.node.comet_sections.content.story.attached_story?.attachments[0].styles.attachment.media.photo_image?.uri;

	let imageRepostAlt =
		post.node.comet_sections.content.story.attached_story?.attachments?.styles?.attachment.media
			.accessibility_caption;

	if (Array.isArray(post.node.comet_sections.content.story.attachments)) {
		if (post.node.comet_sections.content.story.attachments[0]?.styles) {
			if (
				post.node.comet_sections.content.story.attachments[0].styles.attachment.all_subattachments
			) {
				postMultipleImage =
					post.node.comet_sections.content.story.attachments[0].styles.attachment.all_subattachments.nodes.map(
						(img) => img.media.image.uri
					);
			}

			if (
				post.node.comet_sections.content.story.attachments[0].styles.attachment.media?.photo_image
					.uri
			) {
				postSrc =
					post.node.comet_sections.content.story.attachments[0].styles.attachment.media.photo_image
						.uri;

				postAlt =
					post.node.comet_sections.content.story.attachments[0].styles.attachment.media
						.accessibility_caption;
			}
		}
	}
</script>

<img src={postSrc} alt={postAlt} />

{#if postMultipleImage}
	{#each postMultipleImage as image}
		<img src={image} alt={image} />
	{/each}
{:else}
	<p>reposted story</p>
	<img src={imageRepost} alt={imageRepostAlt} />
{/if}
