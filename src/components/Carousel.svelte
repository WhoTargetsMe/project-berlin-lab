<script lang="ts">
	export let multipleImages: [] = [];
	console.log(multipleImages);
</script>

{#if multipleImages.length === 2}
	<div class="grid grid-cols-2 gap-1">
		{#each multipleImages as image}
			<img class="w-fit" src={image} alt="organic post" />
		{/each}
	</div>
{/if}

{#if multipleImages.length === 3}
	<div class="flex">
		{#each multipleImages as image, i}
			<img src={image} alt="carousel post" />
		{/each}
	</div>
{/if}

{#if multipleImages.length === 5}
	<div class="container grid grid-cols-6 gap-1">
		{#each multipleImages as image, i}
			{#if i < 3}
				<div class="col-span-2">
					<img class="" src={image} alt="organic post" />
				</div>
			{:else}
				<div class="col-span-3">
					<img class="w-full h-full object-fit" src={image} alt="organic post" />
				</div>
			{/if}
		{/each}
	</div>
{/if}
