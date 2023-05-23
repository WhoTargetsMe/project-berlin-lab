<script>
	import LL from '$lib/i18n/i18n-svelte';
	import { PUBLIC_INSTALLATION_LINK } from '$env/static/public';

	let isChrome = !!window.chrome;
</script>

<main class="container h-full mx-auto flex justify-center items-center">
	<section class="card p-6 bg-white shadow-lg">
		<h3 class="m-4">{$LL.installation()}</h3>
		<a type="button" class="btn variant-filled mt-4 float-right" href={PUBLIC_INSTALLATION_LINK}
			>{$LL.install_button()}</a
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
