<script lang="ts">
	export let post = {};

	let multipleImageRepost =
		post.node.comet_sections.content.story.attached_story?.attachments[0]?.styles.attachment.all_subattachments?.nodes.map(
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

{#if imageRepost}
	<img src={imageRepost} alt={imageRepost} />
{/if}

{#if multipleImageRepost}
	<div class="container mx-auto">
		<div class="-m-1 flex flex-wrap md:-m-2">
			{#each multipleImageRepost as image}
				<div class="flex w-1/3 flex-wrap">
					<div class="w-full px-2 pb-4">
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

<style>
	img {
		margin-top: 0;
		padding: 0;
		width: 100%;
	}
</style>
