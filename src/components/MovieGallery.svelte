<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import start from '$lib/images/mgstart.png';
	import detailsOne from '$lib/images/mgdetailsone.png';
	import detailsTwo from '$lib/images/mgdetailstwo.png';
	import login from '$lib/images/mglogin.png';
	import edit from '$lib/images/mgedit.png';
	import { onMount } from 'svelte';

	let currentImgIndex = 0;
	let imagesLoaded = false;
	const images = [
		{ src: start, alt: 'Movie Gallery index view' },
		{ src: detailsOne, alt: 'Movie Gallery detail view' },
		{ src: detailsTwo, alt: 'Movie Gallery detail view' },
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

	function preload(src: string) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}

	onMount(() => {
		if (!imagesLoaded) {
			images.forEach((img) => {
				preload(img.src);
			});
			imagesLoaded = true;
		}
	});
</script>

<div
	class="flex flex-col items-center justify-between w-full max-w-[1200px] h-[calc(100vh-58px)] p-20 mobile:p-10 mobile:pt-24 mobile:pb-24 pb-24 pt-24"
>
	<div>
		<h2 class="text-5xl pt-6 text-center uppercase font-bold whitespace-nowrap mobile:text-3xl">
			Movie Gallery
		</h2>
		<p class="text-xl text-center italic mobile:text-sm text-accent">
			Database, Front-end, Design, Group Project
		</p>
	</div>
	<div class="flex items-center justify-center w-full relative max-w-[800px]">
		<button on:click={prevImg} class="p-2 ml-2">
			<ArrowLeft size={30} />
		</button>
		<img
			src={images[currentImgIndex].src}
			alt={images[currentImgIndex].alt}
			class="object-fill pl-2 pt-1 max-w-[75vw]"
		/>
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
</style>
