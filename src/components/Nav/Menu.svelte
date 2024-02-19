<script lang="ts">
	import { onMount } from 'svelte';
	import { X } from 'lucide-svelte';
	export let isMenuOpen: Boolean;
	export var toggleMenu: () => void;

	const links = [
		{ href: '/', text: 'Home' },
		{ href: 'contact', text: 'Contact' },
		{ href: '/resume', text: 'Resume' }
	];
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMenuOpen) {
			toggleMenu();
		}
	}

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
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="p-4 flex w-screen items-center justify-center hover:bg-hover text-secondary"
						>{link.text}</a
					>
				</li>
			{/each}
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
