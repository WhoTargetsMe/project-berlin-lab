<script lang="ts">
	export let multipleImages: [] = [];
</script>

<div class="container mx-auto py-2 lg:px-12 lg:pt-12">
	<div class="-m-1 flex flex-wrap md:-m-2">
		{#each multipleImages as image}
			<div class="flex w-1/3 flex-wrap">
				<div class="w-full p-1 md:p-2">
					<img
						class="block h-full w-full rounded-lg object-cover object-center"
						src={image}
						alt="organic post"
					/>
				</div>
			</div>
		{/each}
	</div>
</div>
