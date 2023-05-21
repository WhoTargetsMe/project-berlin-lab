<script>
	export let data;
	import { onMount } from 'svelte';
	import { PUBLIC_PROLIFIC_LINK } from '$env/static/public';
	import { goto } from '$app/navigation';
	import CardWithButton from '../../components/CardWithButton.svelte';
	import LL from '$lib/i18n/i18n-svelte';

	const keys = Object.values(data);
	const hasProlificParams = !keys.includes(null);
	let hasExtension = false;

	onMount(() => {
		if (hasProlificParams) {
			localStorage.clear();
			window.localStorage.setItem('prolific_params', JSON.stringify(data));
		}
	});
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
		title={$LL.study()}
		url="https://www.facebook.com/"
		buttonText={$LL.study_button()}
	/>
{/if}
