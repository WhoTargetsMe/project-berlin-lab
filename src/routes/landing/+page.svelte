<script>
	export let data;
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const keys = Object.values(data);
	const hasProlificParams = !keys.includes(null);

	onMount(() => {
		if (!hasProlificParams) {
			setTimeout(() => {
				window.location.href = 'https://www.prolific.co';
			}, 5000);
			return;
		}

		localStorage.clear();
		window.localStorage.setItem('prolific params', JSON.stringify(data));

	});
</script>

{#if !hasProlificParams}
	<div class="container h-full mx-auto flex justify-center items-center">
		<div class="space-y-5">
			Complete the onboarding process in prolific to continue. Redirecting in few seconds
		</div>
	</div>
{/if}
