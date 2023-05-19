<script>
	export let data;
	import { onMount } from 'svelte';
	import { PUBLIC_PROLIFIC_LINK } from '$env/static/public';
	import { goto } from '$app/navigation';
	import CardWithButton from '../../components/card/CardWithButton.svelte';
	import LL from '$lib/i18n/i18n-svelte';

	const keys = Object.values(data);
	const hasProlificParams = !keys.includes(null);
	let hasExtension = false;

	// 	if (hasProlificParams) {
	// 		localStorage.clear();
	// 		window.localStorage.setItem('prolific_params', JSON.stringify(data));

	// 		const isInstalled = document.querySelectorAll('[src*="overload.js"]');
	// 		if (isInstalled.length >= 1) {
	// 			hasExtension = true;
	// 		} else {
	// 			hasExtension = false;
	// 			goto('../installation');
	// 		}
	// 	}
	// });
</script>

{#if !hasProlificParams}
	<main class="container h-full mx-auto flex justify-center items-center">
		<section class="card p-6 bg-white shadow-lg">
			<h3 class="m-4">
				{$LL.prolific()}
			</h3>
			<a type="button" class="btn variant-filled mt-4 float-right" href={PUBLIC_PROLIFIC_LINK}>
				{$LL.prolific_button()}
			</a>
		</section>
	</main>
{:else}
	<CardWithButton
		title="Click below to continue the study"
		url="https://www.facebook.com/"
		buttonText="Go to Facebook"
	/>
{/if}
