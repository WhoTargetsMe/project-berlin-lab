<script>
	export let data;
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { PUBLIC_PROLIFIC_LINK } from '$env/static/public';

	const keys = Object.values(data);
	const hasProlificParams = !keys.includes(null);

	onMount(() => {
		if (!hasProlificParams) {
			setTimeout(() => {
				window.location.href = PUBLIC_PROLIFIC_LINK;
			}, 5000);
			return;
		}
		localStorage.clear();
		window.localStorage.setItem('prolific params', JSON.stringify(data));

		//checks if user has extension
		// no - redirects to install extension
		// otherwise
	});
</script>

{#if !hasProlificParams}
	<div class="container h-full mx-auto flex justify-center items-center">
		<div class="space-y-5">
			Complete the onboarding process in prolific to continue. Redirecting in few seconds
		</div>
	</div>
{/if}
