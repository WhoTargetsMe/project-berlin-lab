<script>
	// import { env } from '$env/static/public';

	function handleClick() {
		console.log(import.meta.env.VITE_INSTALLATION_LINK);
	}
</script>

<main class="container h-full mx-auto flex justify-center items-center">
	<section class="card p-6 bg-white shadow-lg">
		<h3 class="m-4">Please click below to install the extension...</h3>
		<a
			type="button"
			class="btn variant-filled mt-4 float-right"
			href={import.meta.env.VITE_INSTALLATION_LINK}>Install Extension</a
		>
	</section>
</main>
