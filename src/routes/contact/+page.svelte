<script>
	import Contact from './components/Contact.svelte';
</script>

<svelte:head>
	<title>Contact - Hannes Sjölander</title>
	<link rel="canonical" href="https://hannessjolander.com" />
	<meta http-equiv="Content-Language" content="en-US" />
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
<main class="flex flex-col pt-[59px] min-h-[calc(100vh)] p-10 mobile:p-3 mobile:pt-[75px]">
	<div class="text-secondary h-full">
		<Contact />
	</div>
</main>
