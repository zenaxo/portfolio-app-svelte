<script lang="ts">
	import { onMount } from 'svelte';
	import lightLogo from '../../lib/images/web-icon-prefersLight.svg';
	import darkLogo from '../../lib/images/web-icon-prefersDark.svg';
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

<nav class="bg-primary fixed top-0 z-50 w-screen shadow-md max-w-[100vw]">
	<div class="flex justify-between items-center w-full pt-3 pb-3 pr-3 h-[59px]">
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
				<span
					class={`circle h-5 w-5 flex justify-center items-center bg-primary rounded-full ml-1 mr-1 transition-transform duration-100 ${isDarkModeToggled ? 'translate-x-0' : 'translate-x-full'}`}
				>
					{#if !isDarkModeToggled}
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
					{:else}
						<!--Moon-->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="var(--secondary)"
							class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
						>
					{/if}
				</span>
			</button>
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
