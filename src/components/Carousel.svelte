<script lang="ts">
	export let multipleImages: [] = [];
</script>

<div class="grid grid-cols-3">
	{#each multipleImages as image}
		<div class="col-span-1">
			<img class="w-full" src={image} alt="organic post" />
		</div>
	{/each}
</div>
