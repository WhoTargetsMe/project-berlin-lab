<script>
	import { posthog } from 'posthog-js';

	const clickedButton = () => {
		posthog.capture('Call to Action button clicked', {
			buttonClass: 'call-to-action',
			buttonText: 'Click me :D'
		});
	};
</script>

<main>
	<p>This is an example call to action</p>
	<button
		on:click={clickedButton}
		class="call-to-action bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		>Click me :D</button
	>
</main>
