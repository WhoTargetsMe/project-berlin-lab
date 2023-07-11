<script lang="ts">
	import Desktop from '../../components/icons/Desktop.svelte';
	import Download from '../../components/icons/Download.svelte';
	import { v4 as uuidv4 } from 'uuid';

	let pilotOptions: [] = [
		{ pilot: 'pilot_100', name: 'Understanding post reactions' },
		{ pilot: 'pilot_200', name: 'Understanding targeted posts' },
		{ pilot: 'pilot_300', name: 'Understanding feed orders' }
	];

	let selected = pilotOptions[0];
	let session_id: string = uuidv4();

	const setId = () => {
		session_id = uuidv4();
	};
</script>

<div
	class="container drop-shadow-md mx-auto flex flex-col justify-center items-center bg-white min-w-full min-h-full"
>
	<div class="flex mt-2">
		<p class="px-2">Please select a study:</p>
		<select bind:value={selected} on:change={setId}>
			{#each pilotOptions as pilot}
				<option value={pilot} label={pilot.name} />
			{/each}
		</select>
	</div>
	<article class="space-y-5 bg-white p-10 w-4/6 m-auto">
		<h1 class="uppercase font-extrabold tracking-[.1em] text-[#2f7fe1]">
			{selected ? selected.name : pilotOptions[0].name}
		</h1>
		<p class="leading-loose py-2">
			This study is led by <em>Dr. Philipp Lorenz-Spreen</em> at the Max Planck Institute for Human
			Development in Berlin The study software is built by <em>Who Targets Me</em>. In this study,
			we are studying the ways people use social media feeds.
		</p>
		<section class="flex flex-col content-center items-center p-4">
			<h3 class="self-center text-center text-[#F45340]">
				<strong class="chrome">This study will only work in Google Chrome</strong>
			</h3>
		</section>
		<section class="pt-3">
			<p>To complete the study, you will need to:</p>
			<ul class="list-disc list-inside px-5 pt-2 leading-loose">
				<li class="mx-10">
					Install a browser extension that collects 50 posts from your facebook feed.
				</li>
				<li class="mx-10">Spend 5 minutes reading and interacting with the feed we present you.</li>
				<li class="mx-10">Take a short post-experiment survery.</li>
			</ul>
		</section>
		<article class="border border-s-[#2f7fe1] b-r-0 border-s-4 border-y-0 bg-[#E7E5D7]">
			<p class="p-6 m-3">
				<em class=" text-center">
					The browser extension doesn't share any of the content of your posts or any of your or
					anyone else's user details with the study. It collects basic metadata about posts such as
					the type of post (e.g. an ad, post from a friend, or a recommended post), the time it was
					made, the number of social interactions.</em
				>
			</p>
		</article>
		<article>
			<p class="my-2">Devices you can use to take this study:</p>
			<section class="flex my-2">
				<Desktop />
				<p class="self-center font-mono mx-4">Desktop</p>
			</section>
			<p class="my-2">You will also need to:</p>
			<section class="flex my-2">
				<Download />
				<p class="self-center font-mono mx-4">Download Software</p>
			</section>
		</article>

		<footer class="w-full flex justify-center">
			<!-- Link to -->
			<a
				class="btn bg-[#3380E1] text-white hover:white visited:white"
				href={`https://ir96l7a6vsf.typeform.com/to/bdrKIGyD?prolific_pid=64415d0f965c9e5ba855f7e7&study_id=${selected.pilot}&session_id=${session_id}&typeform-source=app.prolific.co#?prolific_pid={{%PROLIFIC_PID%}}&study_id={{%STUDY_ID%}}&session_id={{%SESSION_ID%}}`}
				target="_blank">Installation</a
			>
		</footer>
	</article>
</div>

<style>
</style>
