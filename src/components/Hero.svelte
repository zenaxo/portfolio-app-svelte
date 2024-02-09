<script>
	import Button from './ui/Button.svelte';
	import { Linkedin, Download } from 'lucide-svelte';
	import heroImg from '../lib/images/portfolioshotflipped.png';
</script>

<div class="flex h-[calc(100vh)] pt-[59px] mobile:flex-col relative border-b border-accentAlt hero">
	<div
		class="bg-primary min-w-[50%] h-full items-start pt-48 justify-center flex ml-5 mr-5 text-secondary"
	>
		<div class="inline-block z-30">
			<h1 class="text-6xl font-semibold">WELCOME!</h1>
			<h2 class="text-6xl pl-10">This is me</h2>
			<p class="pl-20 text-2xl whitespace-nowrap">
				I have a big passion for <br />
				<code class="font-semibold">{'<code>'}</code> and beautiful
				<span class="font-semibold">design</span>
			</p>
			<div class="ml-[20%] flex gap-5 mt-5">
				<Button
					type="external"
					href="https://www.linkedin.com/in/hannes-sj%C3%B6lander-6b45561a6/"
					className="hover:underline hover:underline-offset-8 items-center"
				>
					<Linkedin color="var(--secondary)" fill="var(--secondary)" size={25} />
					Hannes Sjölander
				</Button>
				<Button type="button" className="hover:underline hover:underline-offset-8 items-center">
					<Download color="var(--secondary)" size={25} />
					CV
				</Button>
			</div>
		</div>
		<figure class="absolute translate-y-96 left-0 ml-20 -rotate-[12deg]">
			<code class="text-accentAlt blur-px -skew-x-8 select-none z-0">
				<span>{'<div>'}</span>
				<br />
				<span class="ml-8">{'<h1> Hello, World! </h1>'}</span>
				<br />
				<span class="ml-8">{'<p> My name is Hannes </p>'}</span>
				<br />
				<span>{'</div>'}</span><span class="animate-cursor">|</span>
			</code>
		</figure>
	</div>
	<div
		class="max-h-full mobile:max-h-[50%] mobile:bg-primary bg-accentAlt flex items-end justify-end flex-1"
	>
		<img
			src={heroImg}
			class="select-none z-0 max-h-[calc(100%-100px)] w-auto mobile:translate-x-32"
			alt="of me"
		/>
	</div>
</div>

<style>
	.animate-cursor {
		display: inline-block;
		animation: blink 2s infinite;
	}
	@keyframes blink {
		0%,
		50%,
		100% {
			opacity: 1;
		}
		25%,
		75% {
			opacity: 0;
		}
	}
	.hero {
		font-family: 'Raleway', serif;
	}
</style>
