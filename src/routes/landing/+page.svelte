<script>
	export let data;
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const keys = Object.values(data);
	const hasParams = !keys.includes(null);

	onMount(() => {
		if (hasParams) {
			goto('/installation');
		} else {
			setTimeout(() => {
				window.location.href = 'https://www.prolific.co';
			}, 5000);
		}
	});
</script>

{#if !hasParams}
	<div class="container h-full mx-auto flex justify-center items-center">
		<div class="space-y-5">
			Complete the onboarding process in prolific to continue. Redirecting in few seconds
		</div>
	</div>
{/if}
