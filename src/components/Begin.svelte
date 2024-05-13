<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let percentageVisible = 0;
	let xTransform = 100;

	function calculateScrollPercentage() {
		const aboutContainer = document.getElementById('aboutContainer') as HTMLDivElement;
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

		if (scrollY > elementTop) {
			xTransform = percentageVisible - 100;
		} else {
			xTransform = 100 - percentageVisible;
		}
	}

	function updateScrollPercentage() {
		calculateScrollPercentage();
	}

	onMount(() => {
		window.addEventListener('scroll', updateScrollPercentage);
		updateScrollPercentage();
	});
	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', updateScrollPercentage);
		}
	});
</script>

<div
	class="w-full max-w-[900px] mobile:max-w-[440px] min-h-full italic flex flex-col text-7xl mobile:text-3xl pt-20 pl-20 pr-20 pb-20 mobile:pr-6 mobile:pl-6 justify-center font-semibold whitespace-nowrap"
	id="aboutContainer"
>
	<div class="w-full flex justify-start">
		<h2>"</h2>
	</div>
	<div class="flex flex-col w-full items-end" style={`transform: translateX(${xTransform * -1}%)`}>
		<h2 class="mb-5">I AM DEVOTED</h2>
		<h2 class="mb-5">
			TO CREATING
			<span
				class="text-primary bg-gradient-to-r from-zenaxo-500 via-50% via-zenaxo-800 to-transparent pr-2 pt-2"
				>USER-
			</span>
		</h2>
	</div>
	<div style={`transform: translateX(${xTransform}%)`}>
		<h2
			class="mb-5 text-primary bg-gradient-to-r from-zenaxo-500 via-80% via-zenaxo-800 to-transparent w-max mobile:pr-2 pr-6 pt-2"
		>
			CENTERED SOLUTIONS
		</h2>
		<h2 class="mb-5">THAT ARE SEAMLESS,</h2>
	</div>
	<div class="flex flex-col w-full items-end" style={`transform: translateX(${xTransform * -1}%)`}>
		<h2 class="mb-5">INSPIRING AND</h2>
		<h2 class="mb-5">IMPACTFUL.</h2>
	</div>
	<div class="w-full flex justify-end">
		<h2>"</h2>
	</div>
</div>
