<script lang="ts">
	import { facebookNewsFeedInterceptedJSONExtractor } from '$lib/organic-post-meta-data';
	export let postMetaData: {};
	export let clicked;
	export let eventName;
	const click = () => {
		console.log(eventName, facebookNewsFeedInterceptedJSONExtractor(postMetaData));
	};
</script>

<div on:click={click} {eventName}>
	<slot />
</div>
