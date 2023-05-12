<script>
	import LL from "$lib/i18n/i18n-svelte";
</script>

<main class="container h-full mx-auto flex justify-center items-center">
	<section class="card p-6 bg-white shadow-lg">
		<h3 class="m-4">{$LL.installation()}</h3>
		<a
			type="button"
			class="btn variant-filled mt-4 float-right"
			href={import.meta.env.VITE_INSTALLATION_LINK}>{$LL.install_button()}</a
		>
	</section>
</main>

<style>
	a {
		cursor: pointer;
	}
</style>
