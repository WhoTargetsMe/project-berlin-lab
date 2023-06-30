<script lang="ts">
	import { JSONPath } from 'jsonpath-plus';
	export let post: {};

	let formOnFacebookImage: string = JSONPath({
		path: '$..lead_gen_brand_image.uri',
		json: post
	})[0];

	let otherSponsoredImage: string = JSONPath({ path: '$..large_share_image.uri', json: post })[0];

	let sponsorURL: string = JSONPath({ path: '$..source.text', json: post })[0];

	let sponsorTitle: string = JSONPath({ path: '$..title_with_entities.text', json: post })[0];

	let sponsorDescription: string = JSONPath({ path: '$..description.text', json: post })[0];

	let callToActionText: string = JSONPath({ path: '$..action_link.stateful_title', json: post })[0];

	let otherCallToActionText: string = JSONPath({ path: '$..action_link.title', json: post })[0];

	let subAttach: {} = JSONPath({ path: '$..attachment.subattachments', json: post })[0];

	let sponseredVideo: string = JSONPath({ path: '$..media.playable_url', json: post })[0];

	let sponseredVidUrl: string = JSONPath({ path: '$..link_display', json: post })[0];

	let sponseredVidTitle: string = JSONPath({ path: '$..link_title', json: post })[0];

	let sponseredVidDescription: string = JSONPath({ path: '$..link_description', json: post })[0];
</script>

<div class="bg-slate-100 border mx-0 px-0 flow-root">
	{#if subAttach}
		<div class="carousel carousel-center p-4 bg-white" data-carousel="static">
			<div class="relative rounded-lg flex overflow-x-scroll">
				{#each subAttach as sub, i}
					<div
						id={JSON.stringify(i)}
						class="carousel-item border rounded-lg mx-4 data-carousel-item"
					>
						<img
							class="min-w-full"
							src={sub.multi_share_media_card_renderer.attachment.media.image?.uri}
							alt="sponsored-multi"
						/>
						<div>
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
	{:else if sponseredVideo}
		<video controls src={sponseredVideo} class="min-w-full">
			<track kind="captions" />
		</video>
		<div class="flex justify-between">
			<section class="px-4 py-2">
				<p class="font-light text-slate-700">{sponseredVidUrl?.toUpperCase()}</p>
				<p><strong>{sponseredVidTitle}</strong></p>
				<p class="font-light text-slate-700">{sponseredVidDescription || ''}</p>
			</section>
			<button
				class="bg-gray-200 hover:bg-gray-300 font-medium my-5 mx-4 py-2 px-4 rounded float-right"
				>{callToActionText || otherCallToActionText}</button
			>
		</div>
	{:else if formOnFacebookImage || otherSponsoredImage}
		<img
			class="p-0 m-0 min-w-full"
			src={formOnFacebookImage || otherSponsoredImage}
			alt="sponsored"
		/>
		<div class="flex justify-between">
			<section class="px-4 py-2">
				<p class="font-light text-slate-700">{sponsorURL?.toUpperCase()}</p>
				<p><strong>{sponsorTitle}</strong></p>
				<p class="font-light text-slate-700">{sponsorDescription}</p>
			</section>
			<button
				class="bg-gray-200 hover:bg-gray-300 font-medium my-5 mx-4 py-2 px-4 rounded float-right"
				>{callToActionText || otherCallToActionText}</button
			>
		</div>
	{/if}
</div>
