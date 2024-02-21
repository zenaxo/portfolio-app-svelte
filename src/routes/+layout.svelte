<script lang="ts">
	import appleTouchIcon from '$lib/icons/apple-touch-icon.png';
	import searchIcon from '$lib/images/search-icon.png';
	import ogImage from '$lib/images/og_image.png';
	import manifest from '../site.webmanifest';
	import maskIcon from '$lib/icons/safari-pinned-tab.svg';
	import Footer from '../components/Footer.svelte';

	import '../app.css';
	import Nav from '../components/Nav/Nav.svelte';
</script>

<svelte:head>
	<meta property="og:site_name" content="Hannes Sjölander" />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" href={searchIcon} />
	<link rel="manifest" href={manifest} />
	<link rel="mask-icon" href={maskIcon} color="var(--accent)" />
	<meta name="msapplication-TileColor" content="var(--secondary)" />
	<meta name="theme-color" content="var(--primary)" />
	<meta name="author" content="Hannes Sjölander" />
	<meta property="locale" content="sv_Se" />
	<meta property="locale:alternate" content="en_US" />
	<meta property="og:image" content={ogImage} />
</svelte:head>
<Nav />
<slot />
<Footer />
