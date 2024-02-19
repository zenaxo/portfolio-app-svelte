<script lang="ts">
	import { onMount } from 'svelte';

	let percentageVisible = 0;
	let skewX = 90;
	function calculateScrollPercentage() {
		const aboutContainer = document.getElementById('techContainer') as HTMLDivElement;
		const windowHeight = window.innerHeight;
		const scrollTop = window.scrollY;
		const scrollBottom = scrollTop + windowHeight;
		const rect = aboutContainer.getBoundingClientRect();
		const elementTop = rect.top + scrollTop;
		const elementBottom = elementTop + rect.height;

		if (elementTop >= scrollTop && elementBottom <= scrollBottom) {
			percentageVisible = 100;
		} else if (elementTop < scrollTop && elementBottom > scrollTop) {
			const visibleHeight = elementBottom - scrollTop;
			percentageVisible = (visibleHeight / rect.height) * 100;
		} else if (elementTop < scrollBottom && elementBottom > scrollBottom) {
			const visibleHeight = scrollBottom - elementTop;
			percentageVisible = (visibleHeight / rect.height) * 100;
		} else {
			percentageVisible = 0;
		}
		if (percentageVisible > 90) {
			skewX = 90;
		} else {
			if (scrollTop >= elementTop) {
				skewX = (90 / 100) * percentageVisible * -1;
			} else {
				skewX = (90 / 100) * percentageVisible;
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', () => {
			calculateScrollPercentage();
		});
	});
</script>

<div class="absolute w-full h-full bg-accent z-30" style={`transform: skewX(${-skewX}deg);`}></div>
<div class="w-full max-w-[1200px] min-h-full flex gap-8 flex-col z-20" id="techContainer">
	<div
		class="p-20 mobile:p-0 flex items-center mobile:pl-5 mobile:items-center mobile:gap-4 justify-between h-full flex-wrap"
	>
		<div class="flex flex-col justify-center text-4xl mobile:text-3xl font-bold uppercase relative">
			<h2>My</h2>
			<h2 class="bg-accent text-primary">Experience</h2>
			<h2>Making</h2>
			<h2>Tools</h2>
		</div>
		<div
			class="flex justify-around max-w-[300px] flex-1 items-center mobile:mr-4 max-h-full mobile:mb-10"
		>
			<div class="h-max gap-4 mobile:gap-2 flex flex-col items-center">
				<div class="flex flex-col items-center">
					<i class="fa-brands fa-js text-4xl mobile:text-xl"></i>
					<p class="text-lg">JavaScript</p>
				</div>
				<div class="flex flex-col items-center">
					<i class="fa-brands fa-html5 text-4xl mobile:text-xl"></i>
					<p class="text-xl mobile:text-lg">HTML</p>
				</div>
				<div class="flex flex-col items-center">
					<i class="fa-brands fa-css3 text-4xl mobile:text-xl"></i>
					<p class="text-xl mobile:text-lg">CSS</p>
				</div>
				<div class="flex flex-col items-center">
					<i class="fa-brands fa-react text-4xl mobile:text-xl"></i>
					<p class="text-xl mobile:text-lg">React</p>
				</div>
				<div class="flex flex-col items-center">
					<i class="ti ti-brand-tailwind text-4xl mobile:text-xl"></i>
					<p class="text-xl mobile:text-lg">Tailwind</p>
				</div>
				<div class="flex flex-col items-center">
					<i class="ti ti-brand-svelte text-4xl mobile:text-xl"></i>
					<p class="text-xl mobile:text-lg">Svelte</p>
				</div>
			</div>
			<div class="h-max flex flex-col items-center gap-4 mobile:gap-2">
				<div class="flex flex-col items-center">
					<i class="ti ti-brand-figma text-4xl mobile:text-xl"></i>
					<p class="text-xl mobile:text-lg">Figma</p>
				</div>
				<div class="flex flex-col items-center">
					<p class="text-2xl mobile:text-xl font-bold">PS</p>
					<p class="text-xl mobile:text-lg">Photoshop</p>
				</div>
				<div class="flex flex-col items-center">
					<p class="text-2xl mobile:text-xl font-bold">IL</p>
					<p class="text-xl mobile:text-lg">Illustrator</p>
				</div>
			</div>
			<div class="h-max flex flex-col items-center gap-4 mobile:gap-2">
				<div class="flex flex-col items-center">
					<i class="ti ti-sql text-4xl mobile:text-3xl icon"></i>
					<p class="text-xl mobile:text-lg">SQL</p>
				</div>
				<div class="flex flex-col items-center">
					<p class="text-xl mobile:text-lg font-bold">.NET</p>
					<p class="text-xl">.NET</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@media screen and (max-width: 1258px) and (max-height: 688px) {
		p,
		i {
			font-size: 1.25rem;
		}
	}
	@media screen and (max-width: 380px) and (max-height: 680px) {
		p,
		i {
			font-size: 0.8rem;
		}
	}
</style>
