<script>
	export let data;
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { PUBLIC_PROLIFIC_LINK } from '$env/static/public';
	import InstallationPage from '../installation/+page.svelte';
	import Card from '../../components/card/+page.svelte';

	const keys = Object.values(data);
	const hasProlificParams = !keys.includes(null);
	let hasExtension = false;

	onMount(() => {
		if (browser) {
			if (hasProlificParams) {
				localStorage.clear();
				window.localStorage.setItem('prolific_params', JSON.stringify(data));
			}

			const isInstalled = document.querySelectorAll('[src*="test.js"]');
			console.log(isInstalled);

			if (isInstalled.length >= 1) {
				hasExtension = true;
			} else {
				hasExtension = false;
			}
			console.log(hasExtension);
		}
	});
</script>

{#if !hasProlificParams}
	<main class="container h-full mx-auto flex justify-center items-center">
		<section class="card p-6 bg-white shadow-lg">
			<h3 class="m-4">
				Please click on the button below to complete the onboarding process in prolific.
			</h3>
			<a type="button" class="btn variant-filled mt-4 float-right" href={PUBLIC_PROLIFIC_LINK}>
				Go to Prolific
			</a>
		</section>
	</main>
{:else if !hasExtension}
	<InstallationPage />
{:else}
	<Card h3Value="To be continued..." />
{/if}
