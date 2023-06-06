<script>
	import SponsoredPost from '../../components/SponsoredPost.svelte';
	import OrganicPost from '../../components/OrganicPost.svelte';
	import EngagementPost from '../../components/EngagementPost.svelte';
	import Shorts from '../../components/Shorts.svelte';
	import { PUBLIC_TYPEFORM_LINK } from '$env/static/public';
	import { flags } from '$lib/flags-store';
	/** @type {import('./$types').PageData} */
	export let data;

	const getPostType = (post) => {
		if (post.edges) {
			return post.edges[0].category;
		} else {
			return post.category;
		}
	};

	const sortPosts = (category) => {
		return data.posts.posts.sort((a, b) =>
			a.category === category && b.category !== category ? -1 : 1
		);
	};
	const { prolific_pid, study_id, session_id, form_id } = data.prolificParams;

	const offBoardLink = `${PUBLIC_TYPEFORM_LINK}/${form_id}#prolific_pid=${prolific_pid}&study_id=${study_id}&session_id=${session_id}&offboarding=${true}`;

	if ($flags.should_sort_random.enabled) {
		console.log('random');
	}

	if ($flags.should_emphasize_organic_posts) {
		sortPosts('ORGANIC');
	}

	if ($flags.should_emphasize_engagement_posts) {
		sortPosts('ENGAGEMENT');
	}

	if ($flags.should_emphasize_sponsored_posts) {
		sortPosts('SPONSORED');
	}

	if ($flags.should_show_sponsored) {
		console.log('showing sponsored');
	}
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

	<div class="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl">
			{#if data.posts.posts}
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
		</div>
	</div>
</main>
