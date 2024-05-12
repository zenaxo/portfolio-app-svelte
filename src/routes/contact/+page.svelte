<script>
	import Contact from './components/Contact.svelte';
</script>

<svelte:head>
	<title>Contact - Hannes Sjölander</title>
	<link rel="canonical" href="https://hannessjolander.com" />
	<meta property="og:title" content="Contact - Hannes Sjölander" />
	<meta
		name="description"
		content="Feel free to contact me for collaboration, projects, or inquiries!"
	/>
	<meta
		property="og:description"
		content="Feel free to contact me for collaboration, projects, or inquiries!"
	/>
	<meta property="og:url" content="https://hannessjolander.com/contact" />
	<meta property="og:type" content="article" />
	<meta
		name="keywords"
		content="Hannes Sjölander, contact, collaboration, projects, inquiries, email, phone, reach out"
	/>
</svelte:head>
<main class="min-h-screen pt-[59px] flex flex-col items-center my-6 mx-6">
	<div class="text-secondary">
		<Contact />
	</div>
</main>
