<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	let nextSectionTitle = '';
	let previousSectionTitle = '';

	const navOffset = 60;

	const handleScrollClickDown = () => {
		const sectionStartElements = document.querySelectorAll(
			'.section-start'
		) as NodeListOf<HTMLElement>;
		const currentPosition = window.scrollY;

		for (let i = 0; i < sectionStartElements.length; i++) {
			const elementTop = sectionStartElements[i].getBoundingClientRect().top + window.scrollY;
			if (currentPosition < elementTop - navOffset) {
				// Adjusted to account for the top of the section
				window.scrollTo({
					top: elementTop - navOffset, // Scroll to the top of the section
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
			if (currentPosition > elementPosition - window.innerHeight + navOffset) {
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
			if (currentPosition < elementPosition - navOffset) {
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
			if (currentPosition > elementPosition + navOffset) {
				const section = sectionStartElements[i] as HTMLElement;
				return section.getAttribute('data-section-name');
			}
		}
		return null;
	};

	const setNavButtons = () => {
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
	};

	onMount(() => {
		setNavButtons();
		window.addEventListener('scroll', setNavButtons);
	});
	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', setNavButtons);
		}
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
		aria-label="Scroll down"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2.75rem"
			height="2.75rem"
			viewBox="0 0 24 24"
			class="lucide lucide-arrow-big-down fill-zenaxo-500"
			><path d="M15 6v6h4l-7 7-7-7h4V6h6z" /></svg
		>
	</button>
</div>
<div
	class="flex top-0 pt-[59px] mt-5 justify-center left-[50%] translate-x-[-50%] fixed z-30 scroller"
	id="scrollUp"
>
	<p
		class="absolute bottom-0 translate-y-full pt-4 font-bold opacity-0 text-secondary pointer-events-none whitespace-nowrap"
	>
		{previousSectionTitle}
	</p>
	<button
		on:click={handleScrollClickUp}
		class="bg-accentAlt h-12 rounded-full aspect-square shadow-xl flex items-center justify-center"
		style="cursor: default;"
		id="scrollUpBtn"
		aria-label="Scroll up"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2.75rem"
			height="2.75rem"
			viewBox="0 0 24 24"
			class="lucide lucide-arrow-big-up fill-zenaxo-500"
			><path d="M9 18v-6H5l7-7 7 7h-4v6H9z" /></svg
		>
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
