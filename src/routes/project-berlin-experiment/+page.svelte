<script>
	import SponsoredPost from '../../components/SponsoredPost.svelte';
	import OrganicPost from '../../components/OrganicPost.svelte';
	import EngagementPost from '../../components/EngagementPost.svelte';
	import Repost from '../../components/Repost.svelte';
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

	const getRepost = (post) => {
		return post.node.comet_sections?.content?.story.attached_story;
	};
	const { prolific_pid, study_id, session_id, form_id } = data.prolificParams;

	const offBoardLink = `${PUBLIC_TYPEFORM_LINK}/${form_id}#prolific_pid=${prolific_pid}&study_id=${study_id}&session_id=${session_id}&offboarding=${true}`;
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
		{#each data.posts.posts as post}
			{#if getRepost(post)}
				<Repost {post} />
			{:else if getPostType(post) === 'ENGAGEMENT'}
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
