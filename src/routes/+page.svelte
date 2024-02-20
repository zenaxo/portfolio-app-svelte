<script lang="ts">
	import About from '../components/About.svelte';
	import Begin from '../components/Begin.svelte';
	import Hero from '../components/Hero.svelte';
	import NavigationButtons from '../components/NavigationButtons.svelte';
	import TechStack from '../components/TechStack.svelte';
	import Section from '../components/ui/Section.svelte';
	import Projects from '../components/Projects.svelte';
</script>

<svelte:head>
	<title>Home - Hannes Sjölander</title>
</svelte:head>
<main class="flex flex-col pt-[59px]">
	<Section sectionName="Welcome">
		<Hero />
	</Section>
	<Section sectionName="Begin">
		<Begin />
	</Section>
	<Section sectionName="Skills">
		<TechStack />
	</Section>
	<Projects />
	<Section sectionName="About me">
		<About />
	</Section>
</main>
<NavigationButtons />
