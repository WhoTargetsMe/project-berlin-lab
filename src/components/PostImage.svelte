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
	<div class="container mx-auto py-2 lg:px-12 lg:pt-12">
		<div class="-m-1 flex flex-wrap md:-m-2">
			{#each postMultipleImage as image}
				<div class="flex w-1/3 flex-wrap">
					<div class="w-full p-1 md:p-2">
						<img
							class="block h-full w-full rounded-lg object-cover object-center"
							src={image}
							alt={image}
						/>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}

{#if imageRepost}
	<img src={imageRepost} alt={imageRepost} />
{/if}

<style>
	img {
		margin: 0;
		padding: 0;
		width: 100%;
	}
</style>
