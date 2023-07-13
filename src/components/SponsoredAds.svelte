<script lang="ts">
	import { JSONPath } from 'jsonpath-plus';
	import NextIcon from './icons/NextIcon.svelte';
	import PreviousIcon from './icons/PreviousIcon.svelte';
	import TrackedEvent from './TrackedEvent.svelte';
	export let post: {};

	let formOnFacebookImage: string = JSONPath({
		path: '$..lead_gen_brand_image.uri',
		json: post
	})[0] || '';

	let otherSponsoredImage: string = JSONPath({ path: '$..large_share_image.uri', json: post })[0] || '';

	let sponsorURL: string = JSONPath({ path: '$..source.text', json: post })[0] || '';

	let sponsorTitle: string = JSONPath({ path: '$..title_with_entities.text', json: post })[0] || '';

	let sponsorDescription: string = JSONPath({ path: '$..description.text', json: post })[0] || '';

	let callToActionText: string = JSONPath({ path: '$..action_link.stateful_title', json: post })[0] || '';

	let otherCallToActionText: string = JSONPath({ path: '$..action_link.title', json: post })[0] || '';

	let subAttach: {} = JSONPath({ path: '$..attachment.subattachments', json: post })[0] || '';

	let sponseredVideo: string = JSONPath({ path: '$..media.playable_url', json: post })[0] || '';

	let sponseredVidUrl: string = JSONPath({ path: '$..link_display', json: post })[0] || '';

	let sponseredVidTitle: string = JSONPath({ path: '$..link_title', json: post })[0] || '';

	let sponseredVidDescription: string = JSONPath({ path: '$..link_description', json: post })[0] || '';

	const next = (e) => {
		let carouselContainer = e.target.closest('.ad-container');
		let cardWidth = carouselContainer.clientWidth;
		let previous = carouselContainer.querySelector('.previous-btn');
		carouselContainer.scrollLeft += cardWidth;
		previous?.classList.remove('hidden');
	};

	const previous = (e) => {
		let carouselContainer = e.target.closest('.ad-container');
		let cardWidth = carouselContainer.clientWidth;
		let previous = carouselContainer.querySelector('.previous-btn');
		carouselContainer.scrollLeft -= cardWidth;
		if (carouselContainer.scrollLeft < 607) {
			previous?.classList.add('hidden');
		}
	};
</script>

<div class="bg-slate-100 border mx-0 px-0 flow-root">
	<TrackedEvent eventName="Sponsored Post engagement" postMetaData={post}>
		{#if subAttach}
			<div class="p-4 bg-white relative">
				<div
					class="rounded-box flex overflow-x-scroll no-scrollbar snap-x scroll-smooth ad-container"
				>
					<button
						class="previous-btn top-[35%] absolute left-0 cursor-pointer bg-white text-[2em] rounded-full p-3 m-0 opacity-75 hover:opacity-100 focus:opacity-100 border-2 border-slate-400 hidden"
						id="previous"
						on:click={previous}
						on:keydown={previous}
					>
						<PreviousIcon />
					</button>
					{#each subAttach as sub, i}
						<div
							id={`container-${i}`}
							class="basis-5/6 grow-0 shrink-0 bg-white m-2 rounded snap-center border"
						>
							<img
								src={JSONPath({ path: '$..image.uri', json: sub })}
								alt="sponsored multi"
								class="sponsored-carousel-image rounded-t"
							/>
							<div class="px-6 pt-4 border-t">
								<p>{sub.card_title.text}</p>
								<button
									class="bg-gray-200 hover:bg-gray-300 font-medium my-5 py-2 px-4 rounded float-right"
									>{sub.call_to_action_renderer.action_link.title}</button
								>
							</div>
						</div>
					{/each}
					<button
						class="flex next-btn top-[35%] z-30 absolute right-0 cursor-pointer bg-white text-[2em] rounded-full p-3 opacity-75 hover:opacity-100 focus:opacity-100 border-2 border-slate-400"
						id="next"
						on:click={next}
						on:keypress={next}
					>
						<NextIcon />
					</button>
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
				class="p-0 m-0 w-full h-full"
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
	</TrackedEvent>
</div>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
