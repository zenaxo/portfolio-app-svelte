<script lang="ts">
	import start from '$lib/images/zaptstart.png';
	import karta from '$lib/images/karta.png';
	import kalender from '$lib/images/kalender.png';
	import { onMount } from 'svelte';
	import filter from '$lib/images/filter.png';

	import { ArrowLeft, ArrowRight } from 'lucide-svelte';

	let currentImgIndex = 0;
	let imagesLoaded = false;

	const imgs = [
		{ src: start, alt: 'Zapt start view' },
		{ src: karta, alt: 'Zapt map view' },
		{ src: kalender, alt: 'Zapt calender view' },
		{ src: filter, alt: 'Zapt filter view' }
	];

	const prevImg = () => {
		currentImgIndex = (currentImgIndex - 1 + imgs.length) % imgs.length;
	};

	const nextImg = () => {
		currentImgIndex = (currentImgIndex + 1) % imgs.length;
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
			imgs.forEach((img) => {
				preload(img.src);
			});
			imagesLoaded = true;
		}
	});
</script>

<div
	class="flex flex-col items-center justify-between w-full max-w-[1200px] h-[calc(100vh-58px)] p-20 mobile:p-10 mobile:pt-24 mobile:pb-24 pb-24 pt-24"
>
	<div class="relative">
		<h2
			class="text-5xl pt-6 mobile:pt-0 text-center uppercase font-bold whitespace-nowrap mobile:text-3xl"
		>
			Zapt
		</h2>
		<p class="text-xl text-center italic mobile:text-sm text-accent">
			Design, UI/UX, Storytelling, Group Project
		</p>
	</div>
	<div class="flex items-center justify-between w-full max-w-[800px]">
		<button on:click={prevImg} class="p-2">
			<ArrowLeft size={30} />
		</button>
		<img
			src={imgs[currentImgIndex].src}
			alt={imgs[currentImgIndex].alt}
			class="object-fill pt-1 max-h-[50vh] mobile:max-w-[150px]"
		/>
		<button on:click={nextImg} class="p-2">
			<ArrowRight size={30} />
		</button>
	</div>
	<div class="flex gap-4 pb-6">
		{#each { length: imgs.length } as _, i}
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
