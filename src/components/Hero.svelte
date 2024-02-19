<script lang="ts">
	import Button from './ui/Button.svelte';
	import { onMount } from 'svelte';
	import heroImg from '../lib/images/portfolioshotflipped.webp';
	import resumeFile from '$lib/resume/hannes_sjolander_cv.pdf';

	let text = '';
	const textToType = 'Hi, this is me!';
	const resumeName = 'hannes_sjolander_cv';

	const downloadResume = () => {
		// Create a temporary anchor element
		const anchorElement = document.createElement('a');

		// Set the href and download attributes
		anchorElement.href = resumeFile;
		anchorElement.download = `${resumeName}.pdf`;

		// Simulate a click on the anchor element to trigger the download
		anchorElement.click();

		// Clean up: remove the anchor element from the document
		anchorElement.remove();
	};

	onMount(() => {
		for (let i = 0; i < textToType.length; i++) {
			setTimeout(() => {
				text += textToType[i];
			}, i * 100);
		}
	});
</script>

<!--Background-->
<div class="w-1/2 absolute left-0 h-full bg-primary z-0"></div>
<div class="w-1/2 absolute right-0 h-full bg-accent -skew-x-12 z-0"></div>
<div class="w-1/3 absolute right-0 h-1/2 bottom-0 bg-accent z-0"></div>
<!--Background end-->
<div class="w-full h-full max-h-full flex items-center justify-around z-30 mobile:flex-col">
	<div class="relative translate-y-10">
		<h1
			class="text-7xl mobile:text-5xl absolute font-bold -translate-y-[calc(100%+26px)] text-nowrap min-w-max"
			id="heroHead"
		>
			{text}
		</h1>
		<h2 class="text-2xl mobile:text-xl mb-5">
			I have a big passion for <code class="font-semibold">{'<code>'}</code><br /> and
			<span class="font-semibold">interaction design</span>
		</h2>
		<div class="flex gap-7 mobile:gap-2 mobile:flex-col">
			<div class="hero-button">
				<Button
					type="external"
					href="https://www.linkedin.com/in/hannes-sj%C3%B6lander-6b45561a6/"
					name="LinkedIn"
					className="underline-offset-8 flex items-center"
				>
					<i class="fa-brands fa-linkedin-in fa-xl" color="var(--secondary)"></i>
					<p>Hannes Sjölander</p>
				</Button>
			</div>

			<div class="hero-button">
				<Button
					type="button"
					className="underline-offset-8 flex items-center"
					name="download resume"
					onClick={downloadResume}
				>
					<i class="fa-solid fa-download fa-xl" color="var(--secondary)"></i>
					<p>Download Resume</p>
				</Button>
			</div>
		</div>
	</div>
	<div class="w-[30%] mobile:w-[60%] aspect-square rounded-full bg-white overflow-hidden">
		<img src={heroImg} alt="me" class="object-contain aspect-square pt-8" width="900" />
	</div>
</div>

<style>
	.hero-button:hover p {
		text-decoration: underline;
	}
</style>
