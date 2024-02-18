<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowBigDown } from 'lucide-svelte';
	let nextSectionTitle = '';
	let previousSectionTitle = '';

	const handleScrollClickDown = () => {
		const sectionStartElements = document.querySelectorAll(
			'.section-start'
		) as NodeListOf<HTMLElement>;
		const currentPosition = window.scrollY;

		for (let i = 0; i < sectionStartElements.length; i++) {
			const elementPosition =
				sectionStartElements[i].getBoundingClientRect().bottom + window.scrollY;
			if (currentPosition < elementPosition - window.innerHeight) {
				window.scrollTo({
					top: elementPosition - window.innerHeight,
					behavior: 'smooth'
				});
				break;
			}
		}
	};

	const handleScrollClickUp = () => {
		const sectionStartElements = document.querySelectorAll(
			'.section-start'
		) as NodeListOf<HTMLElement>;
		const currentPosition = window.scrollY;

		for (let i = sectionStartElements.length - 1; i >= 0; i--) {
			const elementPosition =
				sectionStartElements[i].getBoundingClientRect().bottom + window.scrollY;
			if (currentPosition > elementPosition - window.innerHeight) {
				window.scrollTo({
					top: elementPosition - window.innerHeight,
					behavior: 'smooth'
				});
				break;
			}
		}
	};

	const findNextSectionName = (): string | null => {
		const sectionStartElements = document.querySelectorAll('.section-start');
		const currentPosition = window.scrollY;

		for (let i = 0; i < sectionStartElements.length; i++) {
			const elementPosition = sectionStartElements[i].getBoundingClientRect().top + window.scrollY;
			if (currentPosition < elementPosition - 58) {
				const section = sectionStartElements[i] as HTMLElement;
				return section.getAttribute('data-section-name');
			}
		}
		return null;
	};

	const findPreviousSectionName = (): string | null => {
		const sectionStartElements = document.querySelectorAll('.section-start');
		const currentPosition = window.scrollY;

		if (currentPosition < window.innerHeight - 200) {
			return null;
		}

		for (let i = sectionStartElements.length - 1; i >= 0; i--) {
			const elementPosition = sectionStartElements[i].getBoundingClientRect().top + window.scrollY;
			if (currentPosition > elementPosition + 58) {
				const section = sectionStartElements[i] as HTMLElement;
				return section.getAttribute('data-section-name');
			}
		}
		return null;
	};

	onMount(() => {
		const nextTitle = findNextSectionName();

		if (nextTitle) {
			nextSectionTitle = nextTitle;
		}

		const prevTitle = findPreviousSectionName();
		if (prevTitle) {
			previousSectionTitle = prevTitle;
		}

		window.addEventListener('scroll', () => {
			const nextSection = findNextSectionName();
			const previousSection = findPreviousSectionName();
			const scrollDownElement = document.getElementById('scrollDown') as HTMLElement;
			const scrollUpElement = document.getElementById('scrollUp') as HTMLElement;

			const scrollDownBtn = document.getElementById('scrollDownBtn') as HTMLButtonElement;
			const scrollUpBtn = document.getElementById('scrollUpBtn') as HTMLButtonElement;

			if (nextSection) {
				nextSectionTitle = nextSection;
				scrollDownElement.style.opacity = '100';
				scrollDownBtn.disabled = false;
				scrollDownBtn.style.cursor = 'pointer';
			} else {
				nextSectionTitle = '';
				scrollDownElement.style.opacity = '0';
				scrollDownBtn.disabled = true;
				scrollDownBtn.style.cursor = 'default';
			}

			if (previousSection) {
				previousSectionTitle = previousSection;
				scrollUpElement.style.opacity = '100';
				scrollUpBtn.disabled = false;
				scrollUpBtn.style.cursor = 'pointer';
			} else {
				previousSectionTitle = '';
				scrollUpElement.style.opacity = '0';
				scrollDownBtn.disabled = false;
				scrollUpBtn.style.cursor = 'default';
			}
		});
	});
</script>

<div
	class="flex bottom-0 justify-center fixed z-30 scroller left-[50%] translate-x-[-50%]"
	id="scrollDown"
>
	<p
		class="absolute top-0 -translate-y-full pb-4 font-bold text-secondary opacity-0 pointer-events-none whitespace-nowrap"
	>
		{nextSectionTitle}
	</p>
	<button
		on:click={handleScrollClickDown}
		class="bg-accentAlt mb-5 h-12 rounded-full aspect-square shadow-xl flex items-center justify-center"
		id="scrollDownBtn"
	>
		<ArrowBigDown fill="var(--accent)" color="var(--accentAlt)" size="50" />
	</button>
</div>
<div
	class="flex top-0 pt-[59px] mt-5 justify-center left-[50%] translate-x-[-50%] fixed z-30 scroller"
	id="scrollUp"
	style="opacity: 0;"
>
	<p
		class="absolute bottom-0 translate-y-full pt-4 font-bold text-secondary opacity-0 pointer-events-none whitespace-nowrap"
	>
		{previousSectionTitle}
	</p>
	<button
		on:click={handleScrollClickUp}
		class="bg-accentAlt h-12 rounded-full aspect-square shadow-xl flex items-center justify-center"
		style="cursor: default;"
		id="scrollUpBtn"
	>
		<ArrowBigDown fill="var(--accent)" color="var(--accentAlt)" size="50" class="rotate-180" />
	</button>
</div>

<style>
	.scroller {
		transition: opacity 0.25s ease;
	}
	.scroller p {
		transition: opacity 0.25s ease;
	}
	#scrollUp:hover p {
		opacity: 1;
	}
	#scrollDown:hover p {
		opacity: 1;
	}
</style>
