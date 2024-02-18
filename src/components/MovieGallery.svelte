<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';

	let currentImgIndex = 0;

	const images = [
		{ src: 'src/lib/images/mgstart.png', alt: 'Movie Gallery index view' },
		{ src: 'src/lib/images/mgdetailsone.png', alt: 'Movie Gallery detail view' },
		{ src: 'src/lib/images/mgdetailstwo.png', alt: 'Movie Gallery detail view' },
		{ src: 'src/lib/images/mglogin.png', alt: 'Movie Gallery log in view' },
		{ src: 'src/lib/images/mgedit.png', alt: 'Movie gallery edit movie view' }
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
</script>

<svelte:head>
	{#each images as img}
		<link rel="preload" as="image" href={img.src} />
	{/each}
</svelte:head>
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
