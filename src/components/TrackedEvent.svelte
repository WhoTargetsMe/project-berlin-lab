<script lang="ts">
	import { facebookNewsFeedInterceptedJSONExtractor } from '$lib/post-meta-data';
	import { posthog } from 'posthog-js';
	export let postMetaData: {};
	export let eventName: string;

	const click = (event) => {
		let buttonClicked: {} = event.target.closest('button');
		let videos: {} = event.target.closest('video');
		let message: string;

		if (buttonClicked) {
			message = `${buttonClicked.textContent} button clicked`;
		}

		if (videos) {
			message = 'video clicked';
		}

		posthog.capture(eventName, {
			engagement: message,
			'post-data': facebookNewsFeedInterceptedJSONExtractor(postMetaData)
		});
	};
</script>

<div on:click={click} {eventName}>
	<slot />
</div>
