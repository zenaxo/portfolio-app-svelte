<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import start from '$lib/images/mgstart.png';
	import details from '$lib/images/mgdetailsone.png';
	import login from '$lib/images/mglogin.png';
	import edit from '$lib/images/mgedit.png';

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
		<button on:click={prevImg} class="p-2 ml-2">
			<ArrowLeft size={30} />
		</button>
		<img src={images[currentImgIndex].src} alt={images[currentImgIndex].alt} class="image" />
		<button on:click={nextImg} class="p-2 mr-2">
			<ArrowRight size={30} />
		</button>
	</div>
	<div class="flex gap-4 pb-6">
		{#each { length: images.length } as _, i}
			<button
				class={`h-5 mobile:h-4 aspect-square shadow-lg circle rounded-full border-secondary border-2 ${i === currentImgIndex ? 'bg-secondary' : 'hover:bg-accentAlt'}`}
				on:click={() => goToImg(i)}
			></button>
		{/each}
	</div>
</div>

<style>
	.circle {
		transition: background 0.25s ease;
	}
	.image {
		object-fit: cover;
		padding-left: 2rem;
		padding-top: 1rem;
		max-width: 75vw;
		max-height: 45vw;
	}
</style>
