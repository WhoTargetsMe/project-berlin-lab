<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import posthog from 'posthog-js';

	// Because SvelteKit is an SPA, we need to manually record navigation events
	$: $page.url.pathname, browser && posthog.capture('$pageview');
</script>

<slot />
