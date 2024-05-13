<script lang="ts">
	import type { ProjectProps } from '$lib/types/types.js';
	import Button from './Button.svelte';

	export let props: ProjectProps;

	let currentImgIndex = 0;

	const prevImg = () => {
		currentImgIndex = (currentImgIndex - 1 + props.images.length) % props.images.length;
	};

	const nextImg = () => {
		currentImgIndex = (currentImgIndex + 1) % props.images.length;
	};
</script>

<div class="my-24 flex flex-col items-center flex-1 gap-4 overflow-hidden">
	<div class="text-center max-w-[40ch] mx-4">
		<h2 class="text-4xl mobile:text-2xl mb-1 uppercase font-semibold">{props.title}</h2>
		<p class="text-zenaxo-500 font-semibold italic mobile:text-base">
			{#each props.tags as tag}
				<span>{tag}</span>
			{/each}
		</p>
		<p class="mobile:text-sm">{props.description}</p>
	</div>
	<div class="flex my-auto mx-10 flex-1 justify-center gap-16 mobile:gap-4">
		{#if props.images.length > 1}
			<button
				on:click={prevImg}
				class="p-2 ml-2 flex items-center justify-center relative"
				aria-label="Previous image"
			>
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
					class="lucide lucide-arrow-left absolute hover:w-12 hover:h-12"
					><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
				>
			</button>
		{/if}
		<div class="justify-center h-[40vh] w-full aspect-[9/16] my-auto relative flex items-center">
			<img
				src={props.images[currentImgIndex].src}
				alt={props.images[currentImgIndex].alt}
				class="max-w-full max-h-full absolute object-contain"
				width="600"
				height="900"
			/>
		</div>
		{#if props.images.length > 1}
			<button
				on:click={nextImg}
				class="p-2 mr-2 flex items-center justify-center"
				aria-label="Next image"
			>
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
					class="lucide lucide-arrow-right absolute hover:w-12 hover:h-12"
					><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
				>
			</button>
		{/if}
	</div>
	<div class="flex mt-auto justify-center gap-4">
		{#if props.hasCaseStudy}
			<Button
				type="internal"
				href={`projects/${props.title.replace(/\s/g, '').toLowerCase()}`}
				className="bg-gradient-to-r from-zenaxo-500 to-zenaxo-700 border-2 border-zenaxo-600 px-4 py-2 mobile:text-sm rounded hover:from-zenaxo-700 hover:to-zenaxo-700 transition-colors duration-250 shadow-sm text-white"
			>
				Read Case Study
			</Button>
		{/if}
		{#if props.gitHubUrl !== undefined}
			<Button
				type="external"
				href={props.gitHubUrl}
				className="border-2 border-secondary mobile:px-2 px-4 py-2 mobile:text-sm rounded transition-colors duration-250 shadow sm group flex items-center justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github group-hover:rotate-[30deg] transition-transform duration-250 w-[24px] mobile:w-[16px] aspect-square"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
					/></svg
				>
				<span>Code</span>
			</Button>
		{/if}
	</div>
</div>
