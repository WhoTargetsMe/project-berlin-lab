<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import { PUBLIC_INSTALLATION_LINK } from '$env/static/public';
	import { onMount } from 'svelte';
	let isChrome: boolean;

	onMount(() => {
		isChrome = !!window.chrome;

		setTimeout(() => {
			window.location.href = PUBLIC_INSTALLATION_LINK;
		}, 2000);
	});
</script>

<main class="container h-full mx-auto flex justify-center items-center">
	<section class="card p-6 bg-white shadow-lg">
		<h3 class="m-4">You will be redirected to chrome store to install the extension</h3>
		<p>{$LL.installation_redirect_fallback_info()}</p>
		<a
			type="button"
			class="btn variant-filled mt-4 float-right"
			href={PUBLIC_INSTALLATION_LINK}
			target="_blank">{$LL.install_button()}</a
		>
		{#if !isChrome}
			<p>{$LL.only_in_chrome()}</p>
		{/if}
	</section>
</main>

<style>
	a {
		cursor: pointer;
	}
</style>
