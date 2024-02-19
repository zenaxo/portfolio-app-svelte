<script lang="ts">
	import { onMount } from 'svelte';
	import { X } from 'lucide-svelte';
	import resumeFile from '$lib/resume/hannes_sjolander_cv-min.pdf';
	export let isMenuOpen: Boolean;
	export var toggleMenu: () => void;

	const resumeName = 'hannes_sjolander_cv';

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMenuOpen) {
			toggleMenu();
		}
	}

	const downloadResume = () => {
		// Create a temporary anchor element
		const anchorElement = document.createElement('a');

		// Set the href and download attributes
		anchorElement.href = resumeFile;
		anchorElement.download = `${resumeName}.pdf`;

		// Simulate a click on the anchor element to trigger the download
		anchorElement.click();

		// Clean up: remove the anchor element from the document
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

<div>
	{#if isMenuOpen}
		<button
			class="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-50 mt-[60px] cursor-default"
			on:click={toggleMenu}
			type="button"
			aria-label="close menu"
		></button>
	{/if}
</div>
<div
	class={`fixed w-full flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 cubic-bezier(0,1.5,1,1.5) z-50`}
>
	<div class="bg-primary border-b-4 border-accent">
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
					<X color="var(--secondary)" />
				</button>
			</li>
		</ul>
	</div>
</div>
