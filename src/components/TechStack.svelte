<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
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
		if (scrollTop === elementTop || percentageVisible > 92) {
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
		window.addEventListener('scroll', calculateScrollPercentage);
	});
	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', calculateScrollPercentage);
		}
	});
</script>

<div class={`absolute w-full h-full ${Math.abs(skewX) === 90 ? 'bg-primary' : 'bg-accent'} z-30`} style={`transform: skewX(${-skewX}deg);`}></div>
<div class="w-full max-w-[1200px] min-h-full flex gap-8 flex-col z-20" id="techContainer">
	<div
		class="p-20 mobile:p-0 flex items-center mobile:pl-5 mobile:items-center mobile:gap-4 justify-between mobile:content-around h-full flex-wrap mobile:mt-9 mobile:mb-9"
	>
		<div class="flex flex-col justify-center text-4xl mobile:text-3xl font-bold uppercase relative">
			<h2>My</h2>
			<h2 class="bg-accent text-primary">Experience</h2>
			<h2>Making</h2>
			<h2>Tools</h2>
		</div>
		<div
			class="flex justify-around max-w-[300px] flex-1 items-center mobile:justify-between mobile:pr-10 mobile:mr-4 max-h-full mobile:mb-10"
		>
			<div class="h-max gap-4 mobile:gap-2 flex flex-col items-center">
				<div class="flex flex-col items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
						><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
						/></svg
					>
					<p class="text-lg">JavaScript</p>
				</div>
				<div class="flex flex-col items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
						><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
						/></svg
					>
					<p class="text-xl mobile:text-lg">HTML</p>
				</div>
				<div class="flex flex-col items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
						><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"
						/></svg
					>
					<p class="text-xl mobile:text-lg">CSS</p>
				</div>
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-react fill-exception"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"
						/><path
							d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"
						/><path
							d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"
						/><path
							d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"
						/><path
							d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"
						/><path
							d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"
						/><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg
					>
					<p class="text-xl mobile:text-lg">React</p>
				</div>
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-tailwind"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path
							d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"
						/>
					</svg>
					<p class="text-xl mobile:text-lg">Tailwind</p>
				</div>
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-svelte fill-exception"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M15 8l-5 3l.821 -.495c1.86 -1.15 4.412 -.49 5.574 1.352a3.91 3.91 0 0 1 -1.264 5.42l-5.053 3.126c-1.86 1.151 -4.312 .591 -5.474 -1.251a3.91 3.91 0 0 1 1.263 -5.42l.26 -.16"
						/><path
							d="M8 17l5 -3l-.822 .496c-1.86 1.151 -4.411 .491 -5.574 -1.351a3.91 3.91 0 0 1 1.264 -5.42l5.054 -3.127c1.86 -1.15 4.311 -.59 5.474 1.252a3.91 3.91 0 0 1 -1.264 5.42l-.26 .16"
						/></svg
					>
					<p class="text-xl mobile:text-lg">Svelte</p>
				</div>
			</div>
			<div class="h-max flex flex-col items-center gap-4 mobile:gap-2">
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-figma fill-exception"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
						/><path
							d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z"
						/><path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" /></svg
					>
					<p class="text-xl mobile:text-lg">Figma</p>
				</div>
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-camera fill-exception"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"
						/><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg
					>
					<p class="text-xl mobile:text-lg">Photoshop</p>
				</div>
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-adobe fill-exception"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M12.893 4.514l7.977 14a.993 .993 0 0 1 -.394 1.365a1.04 1.04 0 0 1 -.5 .127h-3.476l-4.5 -8l-2.5 4h1.5l2 4h-8.977c-.565 0 -1.023 -.45 -1.023 -1c0 -.171 .045 -.34 .13 -.49l7.977 -13.993a1.034 1.034 0 0 1 1.786 0z"
						/></svg
					>
					<p class="text-xl mobile:text-lg">Illustrator</p>
				</div>
			</div>
			<div class="h-max flex flex-col items-center gap-4 mobile:gap-2">
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-sql fill-exception"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"
						/><path d="M17 8v8h4" /><path d="M13 15l1 1" /><path
							d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1"
						/></svg
					>
					<p class="text-xl mobile:text-lg">SQL</p>
				</div>
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-c-sharp fill-exception"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"
						/><path d="M16 7l-1 10" /><path d="M20 7l-1 10" /><path d="M14 10h7.5" /><path
							d="M21 14h-7.5"
						/></svg
					>
					<p class="text-xl">C#</p>
				</div>
				<div class="flex flex-col items-center">
					<svg 
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-brand-golang fill-exception"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15.695 14.305c1.061 1.06 2.953 .888 4.226 -.384c1.272 -1.273 1.444 -3.165 .384 -4.226c-1.061 -1.06 -2.953 -.888 -4.226 .384c-1.272 1.273 -1.444 3.165 -.384 4.226z" /><path d="M12.68 9.233c-1.084 -.497 -2.545 -.191 -3.591 .846c-1.284 1.273 -1.457 3.165 -.388 4.226c1.07 1.06 2.978 .888 4.261 -.384a3.669 3.669 0 0 0 1.038 -1.921h-2.427" /><path d="M5.5 15h-1.5" /><path d="M6 9h-2" /><path d="M5 12h-3" /></svg>
					<p class="text-xl">GO</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@media screen and (max-width: 1258px) and (max-height: 688px) {
		p {
			font-size: 1.25rem;
		}
	}
	@media screen and (max-width: 380px) and (max-height: 680px) {
		p {
			font-size: 0.8rem;
		}
	}
	svg:not(.fill-exception) {
		fill: var(--secondary);
	}
	@media screen and (min-width: 680px) {
		svg {
			height: 2.75rem;
			width: 2.75rem;
		}
	}
	@media screen and (max-width: 679px) {
		svg {
			height: 1.75rem;
			width: 1.75rem;
		}
	}
</style>
