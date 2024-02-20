<script lang="ts">
	import { onMount } from 'svelte';
	import resumeFile from '$lib/resume/hannes_sjolander_cv.pdf';
	export let isMenuOpen: Boolean;
	export var toggleMenu: () => void;

	const resumeName = 'hannes_sjolander_cv';

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMenuOpen) {
			toggleMenu();
		}
	}

	const downloadResume = () => {
		const anchorElement = document.createElement('a');

		anchorElement.href = resumeFile;
		anchorElement.download = `${resumeName}.pdf`;
		anchorElement.click();
		anchorElement.remove();
		toggleMenu();
	};

	onMount(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

{#if isMenuOpen}
	<button
		class="fixed w-screen h-screen bg-[rgba(0,0,0,0.7)] z-50 cursor-default"
		on:click={toggleMenu}
		type="button"
		aria-label="close menu"
	></button>
{/if}
<div
	class={`fixed w-full flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 cubic-bezier(0,1.5,1,1.5) z-50`}
>
	<div class="bg-primary border-b-4 border-accent" aria-hidden={`${isMenuOpen ? 'false' : 'true'}`}>
		<ul>
			<li>
				<a
					href="/"
					class="p-4 flex w-screen items-center justify-center hover:bg-hover text-secondary"
					aria-label="Home"
					on:click={toggleMenu}
				>
					Home</a
				>
			</li>
			<li>
				<a
					href="/contact"
					class="p-4 flex w-screen items-center justify-center hover:bg-hover text-secondary"
					aria-label="Contact"
					on:click={toggleMenu}
				>
					Contact</a
				>
			</li>
			<li>
				<button
					class="p-4 flex w-screen items-center justify-center hover:bg-hover text-secondary"
					aria-label="download resume"
					on:click={downloadResume}
				>
					Resume
				</button>
			</li>
			<li>
				<button
					on:click={toggleMenu}
					class="p-4 flex w-screen items-center justify-center hover:bg-hover"
					aria-label="close menu"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512"
						class="fill-secondary"
						height="1rem"
						><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
						/></svg
					>
				</button>
			</li>
		</ul>
	</div>
</div>
