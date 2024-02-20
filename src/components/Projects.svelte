<script>
	import { onMount, beforeUpdate } from 'svelte';
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

	const movieGalleryImages = [
		{ src: mgstart, alt: 'Movie Gallery index view' },
		{ src: mgdetails, alt: 'Movie Gallery detail view' },
		{ src: mglogin, alt: 'Movie Gallery log in view' },
		{ src: mgedit, alt: 'Movie gallery edit movie view' }
	];

	const movieGalleryTitle = 'Movie Gallery';
	const movieGalleryDesc =
		'A platform to discover movies was implemented with ASP.NET Core MVC with full CRUD functionallity.';
	const movieGalleryTags = ['Database, ', 'Front-end, ', 'Design, ', 'Group Project'];
	const movieGalleryImgClass = 'movie-gallery-images';

	const zaptImages = [
		{ src: zaptstart, alt: 'Zapt start view' },
		{ src: zaptkarta, alt: 'Zapt map view' },
		{ src: zaptkalender, alt: 'Zapt calender view' },
		{ src: zaptfilter, alt: 'Zapt filter view' }
	];
	const zaptTitle = 'Zapt';
	const zaptDesc =
		'A concept for an all-in-one application for owners of electric vehicles was made with Figma.';
	const zaptTags = ['Design, ', 'UI/UX, ', 'Storytelling, ', 'Group Project'];
	const zaptImgClass = 'zapt-images';
</script>

<Section sectionName="Movie Gallery">
	<DesktopProject
		images={movieGalleryImages}
		title={movieGalleryTitle}
		description={movieGalleryDesc}
		tags={movieGalleryTags}
		imagesClass={movieGalleryImgClass}
	/>
</Section>
<Section sectionName="Zapt">
	<MobileProject
		images={zaptImages}
		title={zaptTitle}
		description={zaptDesc}
		tags={zaptTags}
		imagesClass={zaptImgClass}
	/>
</Section>
