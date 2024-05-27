<script lang="ts">
	import type { ProjectProps } from '$lib/types/types.js';
	import erDarkImage from '$lib/images/moviegallery_er_dark.webp';
	import erLightImage from '$lib/images/moviegallery_er_light.webp';
	import mgstart from '$lib/images/mgstart.webp';
	import mgdetails from '$lib/images/mgdetailsone.webp';
	import mglogin from '$lib/images/mglogin.webp';
	import mgedit from '$lib/images/mgedit.webp';
	import Button from '../../../components/ui/Button.svelte';
	import { darkMode } from '$lib/stores/stores.js';
	import { onMount } from 'svelte';

	let imageLoaded = false;

	const preloadImage = () => {
		if (!imageLoaded) {
			const img = new Image();
			if ($darkMode) {
				img.src = erLightImage;
			} else {
				img.src = erLightImage;
			}
			img.onload = () => {
				imageLoaded = true;
			};
		}
	};
	const props: ProjectProps = {
		title: 'Movie Gallery',
		images: [
			{ src: mgstart, alt: 'Movie Gallery index view' },
			{ src: mgdetails, alt: 'Movie Gallery detail view' },
			{ src: mglogin, alt: 'Movie Gallery log in view' },
			{ src: mgedit, alt: 'Movie gallery edit movie view' }
		],
		description:
			'A platform to discover movies was implemented with ASP.NET Core MVC with full CRUD functionallity.',
		tags: ['Database, ', 'Front-end, ', 'Design, ', 'Collaboration'],
		imagesClass: 'movie-gallery-images',
		gitHubUrl: 'https://github.com/zenaxo/MovieGalleryApp',
		hasCaseStudy: true
	};

	let currentImgIndex = 0;

	const prevImg = () => {
		currentImgIndex = (currentImgIndex - 1 + props.images.length) % props.images.length;
	};

	const nextImg = () => {
		currentImgIndex = (currentImgIndex + 1) % props.images.length;
	};

	onMount(() => {
		preloadImage();
	});
</script>

<svelte:head>
	<title>{props.title} - Hannes Sjölander</title>
	<link rel="canonical" href={`https://hannessjolander.com/projects/${props.title}`} />
	<meta property="og:title" content={`${props.title} - Hannes Sjölander`} />
	<meta
		name="description"
		content="The process of creating a movie gallery in ASP .NET MVC with database connection"
	/>
	<meta
		property="og:description"
		content="The process of creating a movie gallery in ASP .NET MVC with database connection"
	/>
	<meta property="og:url" content={`https://hannessjolander.com/projects/${props.title}`} />
	<meta name="keywords" content="Hannes Sjölander, Movie Gallery, SQL, .NET, C#, MVC, Database" />
</svelte:head>
<div class="min-h-screen pt-[59px] flex flex-col items-center">
	<article class="my-8 max-w-[800px] mx-6">
		<h1
			class="text-5xl text-center uppercase font-bold whitespace-nowrap mobile:text-3xl text-secondary"
		>
			{props.title}
		</h1>
		<p class="text-xl text-center italic mobile:text-sm text-zenaxo-500 font-semibold mb-4">
			{#each props.tags as tag}
				<span>{tag}</span>
			{/each}
		</p>
		<p class="text-secondary text-base text-justify">
			This project was part of the course <a
				href="https://www.umu.se/utbildning/kurser/databasteknik-och-webbaserade-system/"
				class="hover:underline italic">Databases and Web Based Systems</a
			>
			at Umeå University which focused on methods for storing and managing data with
			<span class="italic">ASP.NET MVC,</span>
			and <span class="italic">SQL</span>
			The application developed is a digital library for movies, allowing users to discover new releases
			and top-rated titles. Administrators have the capability to create, edit, and delete movie entries,
			while regular users can leave reviews.
		</p>
		<p class="text-secondary text-base text-justify mt-4">
			A best practice before developing such an application is to create an entity-relationship
			model, which in this project, helped us visualize database relationships and structure, see
			the figure below.
		</p>
		<div class="my-8 border-2 border-accentAlt p-4 rounded-md">
			<img
				src={$darkMode ? erDarkImage : erLightImage}
				alt="Movie Gallery Entity Model."
				class="max-h-[500px] object-contain"
				width="800"
			/>
		</div>
		<p class="text-secondary text-base text-justify mt-4">
			One of the key challenges was implementing CRUD functions for tables within a many-to-many
			relationship. For instance, a movie may feature multiple actors, and conversely, actors may
			participate in various movies. This complexity was managed by creating a junction table, named
			'Cast', which stores the primary keys of both movies and actors.
		</p>
		<p class="text-secondary text-base text-justify mt-4 mb-8">
			Overall, this project provided substantial insights into database design, the construction of
			SQL queries, and the .NET platform. The final product, as illustrated in subsequent figures,
			showcases the practical application of these skills.
		</p>
		<div
			class="flex items-center justify-around gap-4 px-4 border-2 border-accentAlt p-4 rounded-md mb-4"
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
