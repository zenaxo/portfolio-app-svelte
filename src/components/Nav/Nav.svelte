<script lang="ts">
	import { onMount } from 'svelte';
	import lightLogo from '../../lib/images/web-icon-prefersLight.svg';
	import darkLogo from '../../lib/images/web-icon-prefersDark.svg';
	import { Sun, Moon } from 'lucide-svelte';
	import Menu from './Menu.svelte';

	let isDarkModeToggled = true;
	let isMenuOpen = false;

	const toggleDarkMode = () => {
		isDarkModeToggled = !isDarkModeToggled;
		if (isDarkModeToggled) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
		localStorage.setItem('isDarkModeToggled', JSON.stringify(isDarkModeToggled));
	};

	onMount(() => {
		const storedDarkMode = localStorage.getItem('isDarkModeToggled');
		if (storedDarkMode) {
			isDarkModeToggled = JSON.parse(storedDarkMode);
			if (isDarkModeToggled) {
				document.body.classList.add('dark');
			}
		} else {
			localStorage.setItem('isDarkModeToggled', JSON.stringify(true));
			document.body.classList.add('dark');
		}
	});

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<nav class="overflow-hidden bg-primary fixed top-0 z-50 w-screen shadow-md">
	<div class="flex justify-between items-center w-full pt-3 pb-3 pr-3">
		<div class="ml-5 z-50">
			<!--Logo-->
			<a href="/">
				{#if isDarkModeToggled}
					<img alt="logo of website" src={darkLogo} class="w-[35px]" width="35" />
				{:else}
					<img alt="logo of website" src={lightLogo} class="w-[35px]" width="35" />
				{/if}
			</a>
		</div>
		<div class="flex mr-5 items-center gap-10 z-50">
			<!--Dark mode toggle-->
			<button
				on:click={toggleDarkMode}
				class="bg-secondary h-7 w-12 rounded-full flex items-center relative"
				aria-label="toggle darkmode"
			>
				<div
					class={`circle h-5 w-5 flex justify-center items-center bg-primary rounded-full ml-1 mr-1 transition-transform duration-100 ${isDarkModeToggled ? 'translate-x-0' : 'translate-x-full'}`}
				>
					{#if !isDarkModeToggled}
						<!--Sun-->
						<Sun
							color="var(--secondary)"
							fill="var(--secondary)"
							size={16}
							class="rotate-[-90deg]"
						/>
					{:else}
						<!--Moon-->
						<Moon color="var(--secondary)" size={18} />
					{/if}
				</div>
			</button>
			<!--Menu button-->
			<button on:click={toggleMenu} aria-label="Toggle menu" type="button" class="menu-button">
				<div
					class={`menu gap-2 ${isMenuOpen ? 'open' : ''} relative flex flex-col justify-around w-[2rem] h-[2rem] cursor-pointer`}
				>
					<div
						class="h-[0.25rem] bg-secondary rounded-[2px] w-[40%] bar transition-all duration-500 ease"
					></div>
					<div
						class="h-[0.25rem] bg-secondary rounded-[2px] bar transition-all duration-500 ease"
					></div>
					<div
						class="h-[0.25rem] bg-secondary rounded-[2px] w-[60%] bar transition-all duration-500 ease translate-x-[60%]"
					></div>
				</div>
			</button>
		</div>
	</div>
	<Menu {isMenuOpen} {toggleMenu} />
</nav>

<style>
	.menu {
		transition: transform 0.75s cubic-bezier(0.19, 1, 0.22, 1);
	}
	@media screen and (min-width: 650px) {
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
