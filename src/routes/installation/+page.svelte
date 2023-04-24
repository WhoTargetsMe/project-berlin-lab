<script>
	function handleClick() {
		alert('clicked!');
	}
</script>

<main class="container h-full mx-auto flex justify-center items-center">
	<section class="card p-6 bg-white shadow-lg">
		<h3 class="m-4">Please click below to install the extension...</h3>
		<button type="button" class="btn variant-filled mt-4 float-right" on:click={handleClick}
			>Install Extension</button
		>
	</section>
</main>
