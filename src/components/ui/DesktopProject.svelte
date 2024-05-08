<script lang="ts">
	import Button from './Button.svelte';
	import { type ProjectProps } from '$lib/types/types.js';

	export var props: ProjectProps

	let currentImgIndex = 0;

	const prevImg = () => {
		currentImgIndex = (currentImgIndex - 1 + props.images.length) % props.images.length;
	};

	const nextImg = () => {
		currentImgIndex = (currentImgIndex + 1) % props.images.length;
	};
</script>

<div
	class="grid overflow-hidden my-20 h-full mobile:my-24 w-full gap-8 max-w-[900px]"
>
	<div class="flex flex-col items-center justify-center mx-10">
		<h2 class="text-5xl text-center uppercase font-bold whitespace-nowrap mobile:text-3xl">
			{props.title}
		</h2>
		<p class="text-xl text-center italic mobile:text-sm text-accent font-semibold">
			{#each props.tags as tag}
				{tag}
			{/each}
		</p>
		<p class="text-base text-center mobile:text-sm text-secondary max-w-[380px] mt-2">
			{props.description}
		</p>
	</div>
	<div class="flex items-center justify-around gap-4 px-4">
		{#if props.images.length > 1}
		<button on:click={prevImg} class="p-2 ml-2 flex items-center justify-center relative" aria-label="Previous image">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="2rem"
				height="2rem"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-arrow-left absolute hover:w-12 hover:h-12"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
			>
		</button>
		{/if}
		<div class="flex-1 aspect-video max-w-[600px]">
			<img
				src={props.images[currentImgIndex].src}
				alt={props.images[currentImgIndex].alt}
				class={`${props.imagesClass} object-contain mobile:max-h-[155px]`}
				width="600"
				height="600"
			/>
		</div>
		{#if props.images.length > 1}
		<button on:click={nextImg} class="p-2 mr-2 flex items-center justify-center" aria-label="Next image">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="2rem"
				height="2rem"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-arrow-right absolute hover:w-12 hover:h-12"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
			>
		</button>
		{/if}
	</div>
	<div class="flex flex-1 gap-4 items-center justify-center">
		{#if props.hasCaseStudy}
		<Button 
			type="internal"
			href={`projects/${props.title.replace(/\s/g, "").toLowerCase()}`}
			className="bg-accent border-2 border-accentHover px-4 py-2 mobile:text-sm rounded hover:bg-accentHover transition-colors duration-250 shadow-sm text-white"
		>
			Read Case Study
		</Button>
		{/if}
		{#if props.gitHubUrl !== undefined}
		<Button type="external" href={props.gitHubUrl} className="border-2 border-secondary px-4 py-2 mobile:text-sm rounded transition-colors duration-250 shadow sm group flex items-center justify-center">
			<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github group-hover:rotate-[30deg] transition-transform duration-250 w-[24px] mobile:w-[16px] aspect-square"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
			<span>Code</span>
		</Button>
		{/if}
	</div>
</div>