<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	export let avatarSrc;
	export let avatarAlt;
	export let posterName;
	export let timePosted;
	export let postMessage;
	export let postReel;
	export let postSrc;
	export let postAlt;
	export let totalReactions;
	export let totalComments;
	export let totalShares;
</script>

<main class="card">
	<header class="card-header flex">
		<Avatar src={avatarSrc} alt={avatarAlt} />
		<section>
			<p>
				{posterName}
			</p>
			<p>
				{timePosted}
			</p>
		</section>
		<p>...</p>
	</header>
	<section class="p-4">
		<p>
			{!postMessage ? '' : postMessage}
		</p>
		<video>
			<source src={postReel} type=""/>
		</video>
	</section>
	<section class="flex justify-between">
		{#if parseInt(totalShares) < 0}
			<p>
				Total reactions: {totalReactions}
			</p>
		{:else}{/if}
		{#if parseInt(totalComments)}
			<p>
				Total Comments: {totalComments}
			</p>
		{:else}{/if}
		{#if parseInt(totalShares) < 0}
			<p>
				Total shares: {totalShares}
			</p>
		{:else}{/if}
	</section>
	<footer class="card-footer">Like Comment Share</footer>
</main>
