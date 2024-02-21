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
	<title>Welcome - Hannes Sjölander</title>
	<link rel="canonical" href="https://hannessjolander.com" />
	<meta http-equiv="Content-Language" content="en-US" />
	<meta property="og:title" content="Welcome - Hannes Sjölander" />
	<meta name="description" content="Welcome to my portfolio website! Explore my work and skills." />
	<meta
		property="og:description"
		content="Welcome to my portfolio website! Explore my work and skills."
	/>
	<meta property="og:url" content="https://hannessjolander.com" />
	<meta property="og:type" content="website" />
	<meta
		name="keywords"
		content="Hannes Sjölander, portfolio, Svelte, React, Tailwind, Interaction design, developer, designer, .NET, SQL, javascript, web development, projects, skills"
	/>
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
