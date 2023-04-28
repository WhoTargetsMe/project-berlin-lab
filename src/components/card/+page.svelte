<script>
	export let h3Value;
	export let aHref;
	export let btnValue = 'Press me';
</script>

<main class="container h-full mx-auto flex justify-center items-center">
	<section class="card p-6 bg-white shadow-lg">
		<h3 class="m-4">{h3Value}</h3>
		<a type="button" class="btn variant-filled mt-4 float-right" href={aHref}>
			{btnValue}
		</a>
	</section>
</main>
