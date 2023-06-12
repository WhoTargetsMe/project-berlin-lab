<script>
	import {
		PUBLIC_PROLIFIC_LINK,
		PUBLIC_FACEBOOK_LINK,
		PUBLIC_EXTENSION_ID
	} from '$env/static/public';
	import CardWithButton from '../../components/CardWithButton.svelte';
	import LL from '$lib/i18n/i18n-svelte';
	import { goto } from '$app/navigation';
	import { flags } from '$lib/flags-store';
	import { onDestroy } from 'svelte';

	export let data;

	const unsubscribe = flags.subscribe((data) => {
		chrome.runtime.sendMessage(PUBLIC_EXTENSION_ID, {
			type: 'send_flags',
			data
		});
	});

	onDestroy(() => unsubscribe());
</script>

{#if data.hasProlificParams}
	{goto(PUBLIC_FACEBOOK_LINK)}
	<CardWithButton
		title={$LL.facebook_redirect_fallback_info()}
		url="https://www.facebook.com/"
		buttonText={$LL.facebook_redirect_button()}
	/>
{:else}
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
{/if}
