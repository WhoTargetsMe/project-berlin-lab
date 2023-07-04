<script lang="ts">
	import { facebookNewsFeedInterceptedJSONExtractor } from '$lib/post-meta-data';
	import { posthog } from 'posthog-js';
	export let postMetaData: {};
	export let eventName: string;

	const capturePostEngagement = (event) => {
		let element = event.target as HTMLElement;
		let message: string;

		if (
			element.nodeName.toLowerCase() === 'button' ||
			element.nodeName.toLowerCase() === 'p' ||
			element.nodeName.toLowerCase() === 'i' ||
			element.nodeName.toLowerCase() === 'svg'
		) {
			let elementButton = element.closest('button');
			message = 'Button with the text content ' + elementButton?.textContent + ' clicked';
		} else {
			message =
				element.nodeName.charAt(0) + element.nodeName.substring(1).toLowerCase() + ' clicked';
		}

		console.log(eventName, {
			engagement: message,
			'post-data': facebookNewsFeedInterceptedJSONExtractor(postMetaData)
		});
	};
</script>

<div
	on:click={() => capturePostEngagement(event)}
	on:keypress={() => capturePostEngagement(event)}
	{eventName}
>
	<slot />
</div>
