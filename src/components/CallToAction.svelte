<script>
	import { posthog } from 'posthog-js';

	const callToActionBtnClick = () => {
		posthog.capture('Call to Action button clicked', {
			buttonClass: 'call-to-action',
			buttonText: 'Click me :D'
		});
	};

	export let post;

	const sponsoredURL =
		post.node.comet_sections.content.story.attachments[0].styles.attachment.source?.text;

	const formOnFacebookImage =
		post.node?.comet_sections.content.story.attachments[0].comet_footer_renderer?.attachment
			.call_to_action_renderer?.action_link.media?.lead_gen_brand_image.uri;

	const otherSponsoredImage =
		post.node.comet_sections?.content.story.attachments[0].styles.attachment.media.large_share_image
			?.uri;

	const sponsorURL =
		post.node.comet_sections.content.story.attachments[0].comet_footer_renderer?.attachment.source
			.text;

	const sponsorTitle =
		post.node.comet_sections.content.story.attachments[0].styles?.attachment.title_with_entities
			?.text;

	const sponsorDescription =
		post.node.comet_sections.content.story.attachments[0].comet_footer_renderer?.attachment
			.description.text;
	// let buttonText = post.node?.comet_sections.content.story.attachements?[0].comet_footer_renderer?.attachment.call_to_action_renderer.action_link.stateful_title;

	const cTAText =
		post.node.comet_sections.content.story.attachments[0].comet_footer_renderer?.attachment
			.call_to_action_renderer?.action_link.stateful_title;

	const otherCTAText =
		post.node.comet_sections.content.story.attachments[0].comet_footer_renderer?.attachment
			.call_to_action_renderer?.action_link.title;

	// let multipImage =
	// 	post.node.comet_sections.content.story.attachments[0].styles.attachment.subattachments?.map(
	// 		(attached) => attached.multi_share_media_card_renderer.attachment.media.image.uri
	// 	);

	const subAttach =
		post.node.comet_sections.content.story?.attachments[0].styles.attachment.subattachments?.map(
			(attached) => attached
		);

	// console.log(cardText);
</script>

<div class="bg-slate-100 border mx-0 px-0 flow-root">
	{#if formOnFacebookImage || otherSponsoredImage}
		<img class="p-0 m-0" src={formOnFacebookImage || otherSponsoredImage} alt="sponsored" />
		<div>
			<section class="px-4 pt-2">
				<p class="font-light text-slate-700">{sponsorURL.toUpperCase()}</p>
				<p><strong>{sponsorTitle}</strong></p>
				<p class="font-light text-slate-700">{sponsorDescription}</p>
			</section>
			<button
				class="bg-gray-200 hover:bg-gray-300 font-medium my-5 mx-4 py-2 px-4 rounded float-right"
				>{cTAText || otherCTAText}</button
			>
		</div>
	{/if}

	{#if subAttach}
		<div class="carousel carousel-center p-4 bg-white" data-carousel="static">
			<div class="relative rounded-lg flex overflow-x-scroll">
				{#each subAttach as sub, i}
					<div
						id={JSON.stringify(i)}
						class="carousel-item border rounded-lg mx-4 data-carousel-item"
					>
						<img
							src={sub.multi_share_media_card_renderer.attachment.media.image.uri}
							alt="sponsored-multi"
						/>
						<div>
							<!-- <p>{sponsoredURL}</p> -->
							<p>{sub.card_title.text}</p>

							<button
								class="bg-gray-200 hover:bg-gray-300 font-medium my-5 mx-4 py-2 px-4 rounded float-right"
								>{sub.call_to_action_renderer.action_link.title}</button
							>
						</div>
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
