<script lang="ts">
	import { onMount } from 'svelte';
	import lightLogo from '../../lib/images/web-icon-prefersLight.svg';
	import darkLogo from '../../lib/images/web-icon-prefersDark.svg';
	import Menu from './Menu.svelte';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { page } from '$app/stores';
	import { darkMode } from '$lib/stores/stores.js';
	import { get } from 'svelte/store';

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
			darkMode.set(!get(darkMode));
		}
	};

	onMount(() => {
		console.log(darkMode);
	});
</script>

<nav class="bg-primary fixed top-0 z-50 w-screen shadow-md max-w-[100vw]">
	<div class="flex justify-between items-center w-full pt-3 pb-3 pr-3 h-[59px]">
		<div class="ml-5 z-50">
			<!--Logo-->
			<a href="/">
				{#if $darkMode}
					<img alt="logo of website" src={darkLogo} class="w-[35px]" width="35" />
				{:else}
					<img alt="logo of website" src={lightLogo} class="w-[35px]" width="35" />
				{/if}
			</a>
		</div>
		<div class="flex mr-5 items-center gap-10 z-50">
			<form method="POST" use:enhance={submitUpdateTheme}>
				<button
					formaction={$darkMode ? '/?/setTheme&theme=light' : '/?/setTheme&theme=dark'}
					class="bg-secondary h-7 w-12 rounded-full flex items-center relative group"
					aria-label="toggle dark mode"
					title={$darkMode ? 'Enable light mode' : 'Enable dark mode'}
				>
					<span
						class={`circle h-5 w-5 flex justify-center items-center bg-primary rounded-full ml-1 mr-1 transition-transform duration-250 ${$darkMode ? 'translate-x-0 normal:group-hover:translate-x-1 normal:group-hover:rotate-[360deg]' : 'translate-x-full normal:group-hover:translate-x-4 normal:group-hover:rotate-[-360deg]'}`}
					>
						{#if $darkMode}
							<!--Moon-->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="var(--secondary)"
								class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
							>
						{:else}
							<!--Sun-->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="var(--secondary)"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-sun"
								><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path
									d="m4.93 4.93 1.41 1.41"
								/><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path
									d="m6.34 17.66-1.41 1.41"
								/><path d="m19.07 4.93-1.41 1.41" /></svg
							>
						{/if}
					</span>
				</button>
			</form>
			<!--Menu button-->
			<button on:click={toggleMenu} aria-label="Toggle menu" type="button" class="menu-button">
				<span
					class={`menu gap-2 ${isMenuOpen ? 'open' : ''} relative flex flex-col justify-around w-[2rem] h-[2rem] cursor-pointer`}
				>
					<span
						class="h-[0.25rem] bg-secondary rounded-[2px] w-[40%] bar transition-all duration-500 ease"
					></span>
					<span class="h-[0.25rem] bg-secondary rounded-[2px] bar transition-all duration-500 ease"
					></span>
					<span
						class="h-[0.25rem] bg-secondary rounded-[2px] w-[60%] bar transition-all duration-500 ease translate-x-[60%]"
					></span>
				</span>
			</button>
		</div>
	</div>
	<Menu {isMenuOpen} {toggleMenu} />
</nav>

<style>
	.menu {
		transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
	}
	@media (hover) {
		.menu-button:hover .menu:not(.open) {
			transform: rotate(45deg);
		}
	}
	.open .bar:nth-of-type(2) {
		width: 100%;
		position: absolute;
		transform: rotate(45deg);
	}
	.open .bar:nth-of-type(1) {
		transform: rotate(-45deg);
		position: absolute;
		width: 100%;
	}
	.open .bar:nth-of-type(3) {
		display: none;
	}
</style>
