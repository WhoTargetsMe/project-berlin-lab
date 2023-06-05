<script>
	import { posthog } from 'posthog-js';

	const callToActionBtnClick = () => {
		posthog.capture('Call to Action button clicked', {
			buttonClass: 'call-to-action',
			buttonText: 'Click me :D'
		});
	};

	export let post;

	let formOnFacebookImage =
		post.node?.comet_sections.content.story.attachments[0].comet_footer_renderer?.attachment
			.call_to_action_renderer.action_link.media?.lead_gen_brand_image.uri;

	let otherSponsoredImage =
		post.node.comet_sections?.content.story.attachments[0].styles.attachment.media.large_share_image
			?.uri;

	// let buttonText = post.node?.comet_sections.content.story.attachements?[0].comet_footer_renderer?.attachment.call_to_action_renderer.action_link.stateful_title;

	let cTAText =
		post.node.comet_sections.content.story.attachments[0].comet_footer_renderer?.attachment
			.call_to_action_renderer.action_link.stateful_title;

	let otherCTAText =
		post.node.comet_sections.content.story.attachments[0].comet_footer_renderer?.attachment
			.call_to_action_renderer?.action_link.title;

	let multipImage =
		post.node.comet_sections.content.story.attachments[0].styles.attachment.subattachments?.map(
			(attached) => attached.multi_share_media_card_renderer.attachment.media.image.uri
		);

	console.log(multipImage);
</script>

<div class="bg-slate-100 border mx-0 px-0 flow-root">
	{#if formOnFacebookImage || otherSponsoredImage}
		<img class="p-0 m-0" src={formOnFacebookImage || otherSponsoredImage} alt="sponsored" />
		<button
			class="bg-gray-200 hover:bg-gray-300 font-medium my-5 mx-4 py-2 px-4 rounded float-right"
			>{cTAText || otherCTAText}</button
		>
	{/if}

	{#if multipImage}
		<div class="carousel carousel-center p-4 bg-white" data-carousel="static">
			<div class="relative rounded-lg flex overflow-x-scroll">
				{#each multipImage as image, i}
					<div
						id={JSON.stringify(i)}
						class="carousel-item border border-rounded mx-4 data-carousel-item"
					>
						<img src={image} alt="sponsored-multi" />
						<button
							class="bg-gray-200 hover:bg-gray-300 font-medium my-5 mx-4 py-2 px-4 rounded float-right"
							>{cTAText || otherCTAText}</button
						>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	img {
		width: 100%;
	}
</style>
