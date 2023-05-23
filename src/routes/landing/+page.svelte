<script>
	import { PUBLIC_PROLIFIC_LINK, PUBLIC_FACEBOOK_LINK} from '$env/static/public';
	import CardWithButton from '../../components/CardWithButton.svelte';
	import LL from '$lib/i18n/i18n-svelte';
	import { goto } from '$app/navigation';

	export let data;
</script>

{#if data.hasProlificParams}
{goto(PUBLIC_FACEBOOK_LINK)}
	<CardWithButton
		title={$LL.study()}
		url="https://www.facebook.com/"
		buttonText={$LL.study_button()}
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
