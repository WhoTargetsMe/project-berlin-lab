<script lang="ts">
	//see what feature flags are enabled
	import Desktop from '../components/icons/Desktop.svelte';
	import Download from '../components/icons/Download.svelte';

	let reactions: string;
	let ads: string;
	let order: string;
</script>

<div
	class="container drop-shadow-md mx-auto flex justify-center items-center bg-[#F6F5EE] min-w-full min-h-full"
>
	<article class="space-y-5 bg-white p-10 w-4/6 m-auto">
		<h1 class="uppercase font-extrabold text-[#FACB2E] tracking-[.1em] text-center">
			Understanding post reactions
		</h1>
		<!-- <h1 class="uppercase font-extrabold text-[#FACB2E] tracking-[.1em]">
			Understanding <br /> targeted posts
		</h1>
		<h1 class="uppercase font-extrabold text-[#FACB2E] tracking-[.1em]">
			Understanding <br /> feed orders
		</h1> -->
		<p class="leading-loose py-2">
			This study is led by <em>Dr. Philipp Lorenz-Spreen</em> at the
			<strong>Max Planck Institute for Human Development in Berlin</strong>. The study software is
			built by <em>Who Targets Me</em>. In this study, we are studying the ways people use social
			media feeds.
		</p>
		<section class="flex flex-col content-center items-center my-8 bg-[#F45340] p-4">
			<h3
				class="self-center tracking-[.2em] text-center font-extrabold scale-y-125 text-white mt-3"
			>
				<strong class="chrome">This study will only work in Google Chrome</strong>
			</h3>
			<div class="chrome border border-white w-3/4 mx-auto mt-5" />
			<div class="chrome border-t border-black w-3/4 mx-auto mb-5" />
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
			<p class="leading-loose p-6 m-3">
				<em class="text-2xl text-center">
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
				href="https://project-berlin-lab.vercel.app/landing?prolific_pid=pilot100&session_id=pilot110&study_id=pilot111"
				>Installation</a
			>
		</footer>
	</article>
</div>

<style>
	.uppercase {
		text-shadow: -1.75px -1.75px 0 #2f7fe1, 0 -1.75px 0 #2f7fe1, 1.75px -1.75px 0 #2f7fe1,
			1.75px 0 0 #2f7fe1, 1.75px 1.75px 0 #2f7fe1, 0 1.75px 0 #2f7fe1, -1.75px 1.75px 0 #2f7fe1,
			-1.75px 0 0 #2f7fe1;
	}
	.chrome {
		text-shadow: 1px 1px 0 #000, 0 1px 0 #000, 0.75px -0.75px 0 #000, 0.75px 0 0 #000,
			0.75px 0.75px 0 #000, 0 0.75px 0 #000, -0.75px 0.75px 0 #000, -0.75px 0 0 #000;
	}
</style>
