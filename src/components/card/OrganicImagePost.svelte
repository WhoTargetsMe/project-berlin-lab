<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	export let avatarSrc;
	export let avatarAlt;
	export let posterName;
	export let timePosted;
	export let postMessage;
	export let postImage;
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
		<img src={postSrc} alt={postAlt} />
	</section>
	<section class="flex justify-between">
		<p>
			Total reactions: {totalReactions}
		</p>
		<p>
			Total Comments: {totalComments}
		</p>
		<p>
			Total shares: {totalShares}
		</p>
	</section>
	<!-- <footer class="card-footer">Like Comment Share</footer> -->
</main>
