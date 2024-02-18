<script lang="ts">
	import '../app.css';
	import Nav from '../components/Nav/Nav.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
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
