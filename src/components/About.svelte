<script lang="ts">
	import Button from './ui/Button.svelte';
</script>

<div class="pt-24 translate-x-0 pl-5 pr-5 min-h-full">
	<h2 class="text-5xl mobile:text-2xl mb-12 mobile:mb-6 font-bold">More about me</h2>
	<p class="text-xl mobile:text-base mb-10 max-w-[700px] mobile:mb-6">
		I am a passionate interaction designer with a flair for turning ideas into immersive digital
		experiences. As a civil engineering student exploring the vibrant world of interaction design, I
		thrive on crafting intuitive solutions that bridge the gap between form and function.
		<br /><br />
		<span class="text-accent font-semibold italic">
			Let's build the future of user-centric design together!
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
			type="external"
			className="hover:underline underline-offset-4 flex items-center"
			href="mailto:contact@hannessjolander.com"
			name="Send a mail to me"
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
		class="blur-px text-accentAlt -skew-x-8 text-l -rotate-12 mt-24 mobile:absolute mobile:bottom-0 mobile:-translate-y-10 mobile:opacity-60 pointer-events-none"
	>
		<code>
			<span>{'<div>'}</span>
			<br />
			<span class="ml-6">{'<h1>Hello, World!</h1>'}</span>
			<br />
			<span class="ml-6">{'<p>Thx for scrolling</p>'}</span>
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
