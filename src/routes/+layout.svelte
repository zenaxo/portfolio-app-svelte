<script lang="ts">
	import appleTouchIcon from '$lib/icons/apple-touch-icon.png';
	import favIconLarge from '$lib/icons/favicon-32x32.png';
	import favIconSmall from '$lib/icons/favicon-16x16.png';
	import manifest from '../site.webmanifest';
	import maskIcon from '$lib/icons/safari-pinned-tab.svg';

	import '../app.css';
	import Nav from '../components/Nav/Nav.svelte';
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="src/image/png" sizes="32x32" href={favIconLarge} />
	<link rel="icon" type="src/image/png" sizes="16x16" href={favIconSmall} />
	<link rel="manifest" href={manifest} />
	<link rel="mask-icon" href={maskIcon} color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#2d89ef" />
	<meta name="theme-color" content="#ffffff" />
	<meta name="description" content="Hannes Sjölander portfolio" />
	<meta name="author" content="Hannes Sjölander" />
	<meta
		name="keywords"
		content="Hannes Sjölander, portfolio, Svelte, React, Tailwind, Interaction design, developer, designer, .NET, SQL, javascript"
	/>
	<meta property="og:title" content="Hannes Sjölander Portfolio" />
	<meta property="description" content="Hannes Sjölander Portfolio" />
	<meta property="locale" content="sv_Se" />
	<meta property="og:image" content="lib/images/portfolioshotflipped.png" />
	<meta property="locale:alternate" content="en_US" />
	<meta property="og:url" content="https://hannessjolander.me" />
	<meta property="og:type" content="portfolio website" />
	<meta property="og:site_name" content="Hannes Sjölander" />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
		integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>
<Nav />
<slot />
