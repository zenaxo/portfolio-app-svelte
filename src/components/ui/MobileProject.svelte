<script lang="ts">
	import { onMount } from 'svelte';

	export var images: { src: string; alt: string }[];
	export var title: string;
	export var description: string;
	export var tags: string[];
	export var imagesClass: string;

	let currentImgIndex = 0;

	let touchStartX = 0;
	let touchEndX = 0;

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

	onMount(() => {
		const imgElement = document.querySelector(`.${imagesClass}`) as HTMLElement;
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
	class="flex flex-col items-center justify-around w-full max-w-[1200px] min-h-full p-20 mobile:p-10 mobile:pt-24 mobile:pb-24 pb-24 pt-24"
>
	<div class="relative flex flex-col items-center">
		<h2 class="text-5xl text-center uppercase font-bold whitespace-nowrap mobile:text-3xl">
			{title}
		</h2>
		<p class="text-xl text-center italic mobile:text-sm text-accent font-semibold">
			{#each tags as tag}
				{tag}
			{/each}
		</p>
		<p class="text-base text-center mobile:text-sm text-secondary max-w-[420px] mt-2 mb-4">
			{description}
		</p>
	</div>
	<div class="flex items-center justify-around w-full max-w-[800px]">
		<button on:click={prevImg} class="p-2" aria-label="Previous image">
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
				class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
			>
		</button>
		<img
			src={images[currentImgIndex].src}
			alt={images[currentImgIndex].alt}
			class={`object-fill pt-1 max-h-[35vh] ${imagesClass}`}
			height="640"
		/>
		<button on:click={nextImg} class="p-2" aria-label="Next image">
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
				class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
			>
		</button>
	</div>
	<div class="flex gap-4 items-center mt-4">
		{#each { length: images.length } as _, i}
			<button
				class={`h-5 mobile:h-4 aspect-square shadow-lg circle rounded-full border-secondary border-2 ${i === currentImgIndex ? 'bg-secondary' : 'hover:bg-accentAlt'}`}
				on:click={() => goToImg(i)}
				aria-label="Choose image"
			></button>
		{/each}
	</div>
</div>

<style>
	.circle {
		transition: background 0.25s ease;
	}
</style>
