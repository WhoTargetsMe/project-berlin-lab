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
	import { PUBLIC_CHROME_INSTALLATION_LINK } from '$env/static/public';
	import LL from '$lib/i18n/i18n-svelte';
	// Because SvelteKit is an SPA, we need to manually record navigation events
	$: $page.url.pathname, browser && posthog.capture('$pageview');
	let isChrome = !!(window as any).chrome;
</script>

<div class="card bg-white p-4 m-0">
	<div class="w-12 h-12">
		<img src="/wtm_logo_2020.png" alt="Who Targets Me Logo" />
	</div>
</div>
{#if isChrome || $page.url.pathname == '/'}
	<slot />
{:else}
	<main class="container h-4/5 mx-auto flex justify-center items-center">
		<section class="card p-6 bg-white shadow-lg">
			<h3 class="m-4">{$LL.only_in_chrome()}</h3>
			<a
				type="button"
				class="btn variant-filled mt-4 float-right cursor-pointer"
				href={PUBLIC_CHROME_INSTALLATION_LINK}
				target="_blank">{$LL.install_chrome_button()}</a
			>
		</section>
	</main>
{/if}
