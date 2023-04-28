<script>
	import { onMount } from 'svelte';

	onMount(() => {
		let hasExtension = false;
		const isInstalled = document.querySelectorAll('[src*="test.js"]');

		if (isInstalled.length >= 1) {
			hasExtension = true;
		} else {
			hasExtension = false;
		}
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		Check out the installation page <a href="./installation">Installation</a>
	</div>
</div>
