<script lang="ts">
	import type { ProjectProps } from '$lib/types/types.js';
	import portfolioImage from '$lib/images/portfolio.webp';
	import Button from '../../../components/ui/Button.svelte';

	const props: ProjectProps = {
		title: 'Portfolio',
		images: [{ src: portfolioImage, alt: 'Landing page of my portfolio' }],
		description:
			'My personal plaform for sharing my projects and skills. Made in Svelte with Tailwind CSS.',
		tags: ['Front-end, ', 'Design, ', 'UX'],
		imagesClass: 'portfolio-images',
		gitHubUrl: 'https://github.com/zenaxo/portfolio-app-svelte',
		hasCaseStudy: true
	};

	let currentImgIndex = 0;

	const prevImg = () => {
		currentImgIndex = (currentImgIndex - 1 + props.images.length) % props.images.length;
	};

	const nextImg = () => {
		currentImgIndex = (currentImgIndex + 1) % props.images.length;
	};
</script>

<svelte:head>
	<title>{props.title} - Hannes Sjölander</title>
	<link rel="canonical" href={`https://hannessjolander.com/projects/${props.title}`} />
	<meta property="og:title" content={`${props.title} - Hannes Sjölander`} />
	<meta
		name="description"
		content="The process of creating my professional portfolio with SvelteKit and Tailwind CSS"
	/>
	<meta
		property="og:description"
		content="The process of creating my professional portfolio with SvelteKit and Tailwind CSS"
	/>
	<meta property="og:url" content={`https://hannessjolander.com/projects/${props.title}`} />
	<meta
		name="keywords"
		content="Hannes Sjölander, portfolio, Svelte, SvelteKit, TailwindCSS, Front-end, Design, UX"
	/>
</svelte:head>

<div class="min-h-screen pt-[59px] flex flex-col items-center">
	<article class="my-8 max-w-[800px] mx-6">
		<h1
			class="text-5xl text-center uppercase font-bold whitespace-nowrap mobile:text-3xl text-secondary"
		>
			{props.title}
		</h1>
		<p class="text-xl text-center italic mobile:text-sm text-accent font-semibold mb-4">
			{#each props.tags as tag}
				<span>{tag}</span>
			{/each}
		</p>
		<p class="text-secondary text-base text-justify mb-4">
			In the creation of my professional portfolio, I opted to utilize SvelteKit couplped with
			Tailwind CSS, leveraging the modern capabilities of these tools to build a fast and responsive
			website. SvelteKit, a framework built on top of Svelte, offers an exceptional developer
			experience by simplifying state management and component composition, which significantly
			accelerated the development process. Tailwind CSS was chosen for its utilit-first approach
			that allows for rapid styling without leaving the markup.
		</p>
		<p class="text-secondary text-base text-justify mb-4">
			One of the main features of using Svelte is the familiarty to vanilla JavaScript, combined
			with the intuitive routing, and the ease of creating reusable components. Tailwind CSS was
			chosen for this project to aviod clashing class names and to speed up the development, all
			though Svelte does solve this issue to a certain degree with the ability to define the styles
			inside of the component files.
		</p>
		<p class="text-secondary text-base text-justify">
			This portfolio is not just a collection of past works but a dynamic platform that I plan to
			evolve as my skills and experiences grow.
		</p>
		<div
			class="flex items-center justify-around gap-4 px-4 border-2 border-accentAlt p-4 rounded-md mb-4 mt-8"
		>
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
						class="lucide lucide-arrow-left absolute hover:w-12 hover:h-12 text-secondary"
						><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
					>
				</button>
			{/if}
			<div class="flex-1 aspect-video max-w-[600px] object-contain">
				<img
					src={props.images[currentImgIndex].src}
					alt={props.images[currentImgIndex].alt}
					class={`${props.imagesClass}`}
					width="600"
					height="600"
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
						class="lucide lucide-arrow-right absolute hover:w-12 hover:h-12 text-secondary"
						><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
					>
				</button>
			{/if}
		</div>
		<div class="flex text-secondary items-center gap-4">
			<p>Thanks for reading, feel free to check out the project on GitHub.</p>
			<Button
				type="external"
				href={props.gitHubUrl}
				className="border-2 border-secondary text-secondary px-4 py-2 mobile:text-sm rounded transition-colors duration-250 shadow sm group flex items-center justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github group-hover:rotate-[30deg] transition-transform duration-250 w-[24px] mobile:w-[16px] aspect-square text-secondary"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
						d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
					/></svg
				>
				<span>Code</span>
			</Button>
		</div>
	</article>
</div>
