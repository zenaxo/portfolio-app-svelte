<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import start from '$lib/images/mgstart.webp';
	import details from '$lib/images/mgdetailsone.webp';
	import login from '$lib/images/mglogin.webp';
	import edit from '$lib/images/mgedit.webp';

	let currentImgIndex = 0;

	let touchStartX = 0;
	let touchEndX = 0;

	const images = [
		{ src: start, alt: 'Movie Gallery index view' },
		{ src: details, alt: 'Movie Gallery detail view' },
		{ src: login, alt: 'Movie Gallery log in view' },
		{ src: edit, alt: 'Movie gallery edit movie view' }
	];

	const prevImg = () => {
		currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
	};

	const nextImg = () => {
		currentImgIndex = (currentImgIndex + 1) % images.length;
	};
	const goToImg = (i: number) => {
		currentImgIndex = i;
	};

	const handleTouchStart = (event: TouchEvent) => {
		touchStartX = event.touches[0].clientX;
	};

	const handleTouchMove = (event: TouchEvent) => {
		touchEndX = event.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (touchEndX < touchStartX) {
			nextImg();
		} else if (touchEndX > touchStartX) {
			prevImg();
		}

		touchStartX = 0;
		touchEndX = 0;
	};
	function preload(src: string) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}
	const preloadImgs = () => {
		var isLoaded = localStorage.getItem('movieGalleryLoaded');
		if (isLoaded === 'false') {
			images.forEach((img) => {
				preload(img.src);
			});
			localStorage.setItem('movieGalleryLoaded', 'true');
			window.removeEventListener('scroll', preloadImgs);
		}
	};
	onMount(() => {
		if (
			localStorage.getItem('movieGalleryLoaded') === null ||
			localStorage.getItem('movieGalleryLoaded') === undefined
		) {
			localStorage.setItem('movieGalleryLoaded', 'false');
		}
		window.addEventListener('scroll', () => {
			preloadImgs();
		});
		const imgElement = document.querySelector('.movie-gallery-images') as HTMLElement;
		imgElement.addEventListener('touchstart', handleTouchStart, { passive: true });
		imgElement.addEventListener('touchmove', handleTouchMove, { passive: true });
		imgElement.addEventListener('touchend', handleTouchEnd, { passive: true });

		return () => {
			imgElement.removeEventListener('touchstart', handleTouchStart);
			imgElement.removeEventListener('touchmove', handleTouchMove);
			imgElement.removeEventListener('touchend', handleTouchEnd);
		};
	});
</script>

<div
	class="flex flex-col items-center justify-between w-full max-w-[1200px] h-[calc(100svh-58px)] p-20 mobile:p-10 mobile:pt-24 mobile:pb-24 pb-24 pt-24"
	id="movieGalleryPosCheck"
>
	<div>
		<h2 class="text-5xl pt-6 text-center uppercase font-bold whitespace-nowrap mobile:text-3xl">
			Movie Gallery
		</h2>
		<p class="text-xl text-center italic mobile:text-sm text-accent font-semibold">
			Database, Front-end, Design, Group Project
		</p>
		<p class="text-xl text-center mobile:text-sm text-secondary max-w-[420px] mt-2">
			A platform to discover movies was implemented with ASP.NET Core MVC with full CRUD
			functionallity.
		</p>
	</div>
	<div class="flex items-center justify-center w-full relative max-w-[800px]">
		<button on:click={prevImg} class="p-2 ml-2" name="Previous image">
			<ArrowLeft size={30} />
		</button>
		<img
			src={images[currentImgIndex].src}
			alt={images[currentImgIndex].alt}
			class="movie-gallery-images object-cover pl-2 pt-1 max-w-[75vw] max-h-[45vh]"
		/>
		<button on:click={nextImg} class="p-2 mr-2" name="Next image">
			<ArrowRight size={30} />
		</button>
	</div>
	<div class="flex gap-4 pb-6">
		{#each { length: images.length } as _, i}
			<button
				class={`h-5 mobile:h-4 aspect-square shadow-lg circle rounded-full border-secondary border-2 ${i === currentImgIndex ? 'bg-secondary' : 'hover:bg-accentAlt'}`}
				on:click={() => goToImg(i)}
				name="Choose image"
			></button>
		{/each}
	</div>
</div>

<style>
	.circle {
		transition: background 0.25s ease;
	}
</style>
