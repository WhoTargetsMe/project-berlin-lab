<script>
	import SponsoredPost from '../../components/SponsoredPost.svelte';
	import OrganicPost from '../../components/OrganicPost.svelte';
	import EngagementPost from '../../components/EngagementPost.svelte';
	import Shorts from '../../components/Shorts.svelte';
	import { PUBLIC_TYPEFORM_LINK } from '$env/static/public';

	/** @type {import('./$types').PageData} */
	export let data;

	const getPostType = (post) => {
		if (post.edges) {
			return post.edges[0].category;
		} else {
			return post.category;
		}
	};
	const { prolificId, studyId, sessionId, formId } = data.prolificParams;

	const offBoardLink = `${PUBLIC_TYPEFORM_LINK}/${formId}#prolific_pid=${prolificId}&study_id=${studyId}&session_id=${sessionId}&offboarding=${true}`;
</script>

<main>
	<div class="p-4 m-4">
		<h1 class="h1">
			<span
				class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
				>Experiment page</span
			>
		</h1>
		<a href={offBoardLink}> Back to Typeform </a>
	</div>

	{#if data.posts.posts}
		{console.log(data.posts.posts)}
		{#each data.posts.posts as post}
			{#if getPostType(post) === 'ENGAGEMENT'}
				<EngagementPost {post} />
			{:else if getPostType(post) === 'SPONSORED'}
				<SponsoredPost {post} />
			{:else if getPostType(post) === 'ORGANIC'}
				<OrganicPost {post} />
			{:else}
				<Shorts {post} />
			{/if}
		{/each}
	{:else}
		<div class="card p-4 m-4">
			<p>Please collect some facebook posts</p>
		</div>
	{/if}
</main>
