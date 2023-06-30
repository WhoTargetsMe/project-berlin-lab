<script lang="ts">
	import { flags } from '$lib/flags-store';
	export let feedback;
	import Like2 from './icons/Like2.svelte';
	import Love from './icons/Love.svelte';
	import Care from './icons/Care.svelte';
	import Angry from './icons/Angry.svelte';
	import Haha from './icons/Haha.svelte';
	import Sad from './icons/Sad.svelte';
	import Wow from './icons/Wow.svelte';
	import Comment from './icons/Comment.svelte';
	import Share from './icons/Share.svelte';
	import { JSONPath } from 'jsonpath-plus';

	let totalReactions: string = JSONPath({ path: '$..i18n_reaction_count', json: feedback })[0];

	let totalComments: number = JSONPath({ path: '$..total_comment_count', json: feedback })[0];

	let totalShares: string = JSONPath({ path: '$..i18n_share_count', json: feedback })[0];

	let reactionTypes: {} = JSONPath({ path: '$..top_reactions.edges', json: feedback })[0];

	if (reactionTypes) {
		reactionTypes = reactionTypes.map((reaction: { [key: string]: any }) => {
			return `${reaction.i18n_reaction_count}:  ${reaction.node.localized_name}`;
		});
	}

	$: hasFlags = Object.keys($flags).length > 0;
</script>

{#if hasFlags}
	{#if $flags.should_show_reactions}
		<section class="mx-6 my-4 p-1 flex justify-between">
			{#if totalReactions > 0}
				<section class="flex">
					{#each reactionTypes as reaction, index}
						{#if index < 3}
							{#if reaction.includes('Like')}
								<Like2 />
							{:else if reaction.includes('Love')}
								<Love />
							{:else if reaction.includes('Care')}
								<Care />
							{:else if reaction.includes('Angry')}
								<Angry />
							{:else if reaction.includes('Haha')}
								<Haha />
							{:else if reaction.includes('Wow')}
								<Wow />
							{:else}
								<Sad />
							{/if}
						{/if}
					{/each}
					<p class="mx-1 text-slate-600">{totalReactions}</p>
				</section>
			{/if}
			<section class="flex ml-auto">
				{#if totalComments > 0}
					<section class="flex mx-2">
						<p class="mx-1 text-slate-600">{totalComments}</p>
						<Comment />
					</section>
				{/if}
				{#if totalShares > 0}
					<section class="flex">
						<p class="mx-1 text-slate-600">{totalShares}</p>
						<Share />
					</section>
				{/if}
			</section>
		</section>
	{/if}
{/if}
