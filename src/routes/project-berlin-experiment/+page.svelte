<script lang="ts">
	import SponsoredPost from '../../components/SponsoredPost.svelte';
	import OrganicPost from '../../components/OrganicPost.svelte';
	import EngagementPost from '../../components/EngagementPost.svelte';
	import Repost from '../../components/Repost.svelte';
	import Shorts from '../../components/Shorts.svelte';
	import { PUBLIC_TYPEFORM_LINK, PUBLIC_EXPERIMENT_TIMEOUT } from '$env/static/public';
	import { flags } from '$lib/flags-store';
	import _ from 'lodash';

	/** @type {import('./$types').PageData} */

	export let data;
	let posts = data.posts.posts;

	let isStudyComplete: boolean;

	const { prolific_pid, study_id, session_id, form_id } = data.prolificParams;

	const offBoardLink = `${PUBLIC_TYPEFORM_LINK}/${form_id}#prolific_pid=${prolific_pid}&study_id=${study_id}&session_id=${session_id}&offboarding=${true}`;

	const experimentTimeout = parseInt(PUBLIC_EXPERIMENT_TIMEOUT) * 1000 * 60;

	const getPostType = (post) => {
		if (post.edges) {
			return post.edges[0].category;
		} else {
			return post.category;
		}
	};

	const getRepost = (post) => {
		return post.node?.comet_sections?.content?.story.attached_story;
	};

	$: hasFlags = Object.keys($flags).length > 0;

	//Feed display sorting feature flags
	if (hasFlags) {
		switch (true) {
			case $flags.should_sort_random.enabled:
				posts = _.shuffle(posts);
				break;
			case $flags.should_emphasize_organic_posts.enabled:
				posts = _.sortBy(posts, (data) => {
					if (data.category === 'ORGANIC') {
						return 1;
					}
				});
				break;
			case $flags.should_emphasize_engagement_posts.enabled:
				posts = _.sortBy(posts, ['category']);
				break;
			case $flags.should_emphasize_sponsored_posts.enabled:
				posts = _.sortBy(posts, (data) => {
					if (data.category === 'SPONSORED') {
						return 1;
					}
				});
				break;
		}
	}

	setTimeout(() => {
		isStudyComplete = true;
	}, experimentTimeout);
</script>

<main class="border-solid border-2 border-gray">
	{#if isStudyComplete}
		<div class={'flex justify-center items-center fixed w-full h-full fixed bg-white opacity-90'}>
			<section class="card p-6 bg-white shadow-lg">
				<h3 class="m-4">
					You have now completed the experiment. Click the link to complete the off-boarding survey
					in TypeForm
				</h3>
				<a type="button" class="btn variant-filled mt-4 float-right" href={offBoardLink}>
					Back to TypeForm
				</a>
			</section>
		</div>
	{/if}

	<div class="p-4 m-4">
		<h1 class="h1">
			<span>Experiment page</span>
		</h1>
	</div>

	{#if hasFlags}
		{#if posts}
			<div class="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-2xl">
					{#each posts as post}
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
				</div>
			</div>
		{:else}
			<div class="card p-4 m-4">
				<p>Please collect some facebook posts</p>
			</div>
		{/if}
	{:else}
		<div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
			<div
				class="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-64 w-64"
			/>
		</div>
	{/if}
</main>
