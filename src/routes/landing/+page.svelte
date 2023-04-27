<script>
	export let data;
	import { onMount } from 'svelte';
	import { PUBLIC_PROLIFIC_LINK } from '$env/static/public';

	const keys = Object.values(data);
	const hasProlificParams = !keys.includes(null);

	onMount(() => {
		if (hasProlificParams) {
			localStorage.clear();
			window.localStorage.setItem('prolific_params', JSON.stringify(data));
			//checks if user has extension
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
{/if}
