<script lang="ts">
	import Button from './ui/Button.svelte';
	import { onMount } from 'svelte';
	import heroImg from '../lib/images/portfolioshotflipped.webp';
	import resumeFile from '$lib/resume/hannes_sjolander_cv.pdf';

	let text = '';
	const textToType = 'Hi, this is me!';
	const resumeName = 'hannes_sjolander_cv';

	const downloadResume = () => {
		const anchorElement = document.createElement('a') as HTMLAnchorElement;

		anchorElement.href = resumeFile;
		anchorElement.download = `${resumeName}.pdf`;

		anchorElement.click();
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
		<h2 class="text-2xl mobile:text-xl mb-5 leading-10">
			I have a big passion for <code class="font-bold">{'<code>'}</code><br /> and
			<span class="font-semibold">UX design</span>
		</h2>
		<div class="flex gap-7 mobile:gap-2 mobile:flex-col">
			<Button
				type="external"
				href="https://www.linkedin.com/in/hannes-sj%C3%B6lander-6b45561a6/"
				name="Linked In"
				className="underline-offset-8 flex items-center hero-button group"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1.5rem"
					width="1.5rem"
					viewBox="0 0 24 24"
					fill="var(--secondary)"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-linkedin group-hover:rotate-[360deg] transition-all duration-200"
					><path
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
					/><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg
				>
				<span>Hannes Sjölander</span>
			</Button>
			<Button
				type="button"
				className="underline-offset-8 flex items-center hero-button group"
				name="download resume"
				onClick={downloadResume}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1.5rem"
					width="1.5rem"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-download group-hover:-translate-y-1 transition-all duration-200"
					><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
						points="7 10 12 15 17 10"
					/><line x1="12" x2="12" y1="15" y2="3" /></svg
				>
				<span>Download Resume</span>
			</Button>
		</div>
	</div>
	<div class="w-[30%] mobile:w-[60%] aspect-square rounded-full bg-white overflow-hidden">
		<img src={heroImg} alt="me" class="object-contain aspect-square pt-8" width="900" />
	</div>
</div>
