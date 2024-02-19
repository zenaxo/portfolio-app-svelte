<script lang="ts">
	import Button from './ui/Button.svelte';
	import { Linkedin, Download } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import heroImg from '../lib/images/portfolioshotflipped.webp';

	let text = '';
	const textToType = 'Hi, this is me!';

	onMount(() => {
		for (let i = 0; i < textToType.length; i++) {
			setTimeout(() => {
				text += textToType[i];
			}, i * 100);
		}
	});
</script>

<div
	class="flex h-[100svh] relative border-b border-accentAlt hero overflow-hidden text-secondary section-start"
	data-section-name="Welcome"
>
	<!--Background-->
	<div class="w-1/2 absolute left-0 h-full bg-primary z-0"></div>
	<div class="w-1/2 absolute right-0 h-full bg-accent -skew-x-12 z-0"></div>
	<div class="w-1/3 absolute right-0 h-1/2 bottom-0 bg-accent z-0"></div>
	<!--Background end-->
	<div
		class="w-full pt-[59px] h-full max-h-full flex items-center justify-around z-30 mobile:flex-col"
	>
		<div class="relative translate-y-10">
			<h1
				class="text-7xl mobile:text-5xl absolute font-bold -translate-y-[calc(100%+26px)] text-nowrap min-w-max"
				id="heroHead"
			>
				{text}
			</h1>
			<h2 class="text-2xl mobile:text-xl mb-5">
				I have a big passion for <code>{'<code>'}</code><br /> and
				<span class="italic">interaction design</span>
			</h2>
			<div class="flex gap-7 mobile:gap-2 mobile:flex-col">
				<Button type="external" href="/" className="hover:underline underline-offset-8">
					<Linkedin fill="var(--secondary)" color="var(--secondary)" />
					<p>Hannes Sjölander</p>
				</Button>
				<Button type="button" className="hover:underline underline-offset-8" name="download resume">
					<Download color="var(--secondary)" />
					<p>Download Resume</p>
				</Button>
			</div>
		</div>
		<div class="w-[30%] mobile:w-[60%] aspect-square rounded-full bg-white overflow-hidden">
			<img src={heroImg} alt="me" class="object-contain aspect-square pt-8" height="200" />
		</div>
	</div>
</div>
