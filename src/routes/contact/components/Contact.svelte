<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';

	const handleOpenMail = () => {
		const link = document.createElement('a') as HTMLAnchorElement;
		link.href = 'mailto:contact@hannessjolander.com';
		link.click();
		link.remove();
	};
</script>

<svelte:head>
	<title>Contact - Hannes Sjölander</title>
</svelte:head>
<div class="translate-x-0 p-24 mobile:p-0 min-h-[calc(100vh-59px)]">
	<h2 class="text-5xl mobile:text-2xl font-bold mb-6 mobile:mb-2">Contact me</h2>
	<p class="text-xl mobile:text-base mb-10 max-w-[700px] mobile:mb-6">
		Throughout my academic career, I've collaborated on projects ranging from mobile app developments to comprehensive digital ecosystems, always with a focus on user-centric design. I'm excited to bring my blend of skills and vision to a team that champions pioneering solutions and values user experience as much as I do.
		<br><br>I am set to graduate my degree in Master of Science in Enginnering with a specialization in Interaction Technology and Design in 2026.
		<br /><br />
		<span class="text-accent font-semibold italic">
			Let's connect and explore how we can create the future of interaction technology together!
		</span>
	</p>
	<div class="flex gap-5 text-nowrap flex-wrap text-xl mobile:text-base">
		<Button
			type="external"
			className="hover:underline underline-offset-4 flex items-center"
			href="https://www.linkedin.com/in/hannes-sj%C3%B6lander-6b45561a6/"
			name="my LinkedIn"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="1.5rem"
				width="1.5rem"
				viewBox="0 0 24 24"
				fill="var(--secondary)"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-linkedin"
				><path
					d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
				/><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg
			>
			Hannes Sjölander
		</Button>
		<Button
			type="button"
			className="hover:underline underline-offset-4 flex items-center"
			onClick={handleOpenMail}
			title="Send me an e-mail"
			name="Send me an e-mail"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="1.5rem"
				width="1.5rem"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-mail"
				><rect width="20" height="16" x="2" y="4" rx="2" /><path
					d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
				/></svg
			>
			contact@hannessjolander.com
		</Button>
	</div>
	<figure
		class="blur-px text-accentAlt -skew-x-8 text-l -rotate-12 mt-24 mobile:absolute mobile:-translate-y-16 mobile:bottom-0 mobile:opacity-60 pointer-events-none"
	>
		<code>
			<span>{'<div>'}</span>
			<br />
			<span class="ml-6">{'<h1>Hello, World!</h1>'}</span>
			<br />
			<span class="ml-6">{'<p>My name is Hannes</p>'}</span>
			<br />
			<span>{'</div>'}</span>
			<span class="blink">|</span>
		</code>
	</figure>
</div>

<style>
	.blink {
		animation: blink 800ms infinite linear;
	}
	@keyframes blink {
		0%,
		100% {
			opacity: 0;
		}
		50% {
			opacity: 100;
		}
	}
</style>
