<script lang="ts">
	import { onMount, beforeUpdate } from 'svelte';
	import type { ProjectProps } from '$lib/types/types.js';
	import DesktopProject from './ui/DesktopProject.svelte';
	import MobileProject from './ui/MobileProject.svelte';
	import Section from './ui/Section.svelte';
	import mgstart from '$lib/images/mgstart.webp';
	import mgdetails from '$lib/images/mgdetailsone.webp';
	import mglogin from '$lib/images/mglogin.webp';
	import mgedit from '$lib/images/mgedit.webp';
	import zaptstart from '$lib/images/zaptstart.webp';
	import zaptkarta from '$lib/images/karta.webp';
	import zaptkalender from '$lib/images/kalender.webp';
	import zaptfilter from '$lib/images/filter.webp';
	import portfolioImage from '$lib/images/portfolio.webp';

	let imagesLoaded = false;

	const preloadImages = () => {
		if (!imagesLoaded) {
			const imagePromises = projectImages.map((src) => {
				return new Promise((resolve, reject) => {
					const img = new Image();
					img.src = src;
					img.onload = resolve;
					img.onerror = reject;
				});
			});

			Promise.all(imagePromises)
				.then(() => {
					imagesLoaded = true;
					window.removeEventListener('scroll', preloadImages);
				})
				.catch((error) => {
					console.error('Error preloading images:', error);
				});
		}
	};

	const projectImages = [
		mgstart,
		mgdetails,
		mglogin,
		mgedit,
		zaptstart,
		zaptkarta,
		zaptkalender,
		zaptfilter
	];

	// Preload the images after scroll
	onMount(() => {
		window.addEventListener('scroll', preloadImages);
	});

	beforeUpdate(() => {
		window.removeEventListener('scroll', preloadImages);
	});

	const movieGalleryProps: ProjectProps = {
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
	const zaptProps: ProjectProps = {
		title: 'Zapt',
		images: [
			{ src: zaptstart, alt: 'Zapt start view' },
			{ src: zaptkarta, alt: 'Zapt map view' },
			{ src: zaptkalender, alt: 'Zapt calender view' },
			{ src: zaptfilter, alt: 'Zapt filter view' }
		],
		description:
			'A concept for an all-in-one application for owners of electric vehicles was made with Figma.',
		tags: ['Design, ', 'UI/UX, ', 'Storytelling, ', 'Collaboration'],
		imagesClass: 'zapt-images',
		hasCaseStudy: false
	};

	const portfolioProps: ProjectProps = {
		title: 'Portfolio',
		images: [{ src: portfolioImage, alt: 'Landing page of my portfolio' }],
		description:
			'My personal plaform for sharing my projects and skills. Made in Svelte with Tailwind CSS.',
		tags: ['Front-end, ', 'Design, ', 'UX'],
		imagesClass: 'portfolio-images',
		gitHubUrl: 'https://github.com/zenaxo/portfolio-app-svelte',
		hasCaseStudy: true
	};
</script>

<Section sectionName="Movie Gallery">
	<DesktopProject props={movieGalleryProps} />
</Section>
<Section sectionName="Zapt">
	<MobileProject props={zaptProps} />
</Section>
<Section sectionName="Portfolio">
	<DesktopProject props={portfolioProps} />
</Section>
