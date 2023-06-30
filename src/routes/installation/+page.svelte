<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import { PUBLIC_INSTALLATION_LINK } from '$env/static/public';
	import { browser } from '$app/environment';

	let isChrome: boolean;

	if (browser) {
		isChrome = !!(window as any).chrome;

		setTimeout(() => {
			window.location.href = PUBLIC_INSTALLATION_LINK;
		}, 2000);
	}
</script>

<main class="container h-full mx-auto flex justify-center items-center">
	{#if !isChrome}
		<p>{$LL.only_in_chrome()}</p>
	{:else}
		<section class="card p-6 bg-white shadow-lg">
			<h3 class="m-4">{$LL.installation()}</h3>
			<p class="m-4">{$LL.installation_redirect_fallback_info()}</p>
			<a
				type="button"
				class="btn variant-filled mt-4 float-right cursor-pointer"
				href={PUBLIC_INSTALLATION_LINK}
				target="_blank">{$LL.install_button()}</a
			>
		</section>
	{/if}
</main>
