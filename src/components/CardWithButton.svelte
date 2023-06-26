<script lang="ts">
	export let title: string;
	export let url: string;
	export let buttonText: string;
</script>

<main class="container h-full mx-auto flex justify-center items-center">
	<section class="card p-6 bg-white shadow-lg">
		<h3 class="m-4">{title}</h3>
		<a type="button" class="btn variant-filled mt-4 float-right" href={url}>
			{buttonText}
		</a>
	</section>
</main>
