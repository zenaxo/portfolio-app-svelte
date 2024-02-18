<script lang="ts">
	import Button from './ui/Button.svelte';
	import { Linkedin, Mail, Phone } from 'lucide-svelte';
</script>

<div class="pt-24 translate-x-0 pl-5 pr-5">
	<h2 class="text-5xl mb-12 font-bold slide-in-from-left">More about me</h2>
	<p class="text-xl mb-10 max-w-[700px]">
		I am a passionate interaction designer with a flair for turning ideas into immersive digital
		experiences. As a civil engineering student exploring the vibrant world of interaction design, I
		thrive on crafting intuitive solutions that bridge the gap between form and function.
		<br /><br /><span class="text-accent font-semibold italic"
			>Let's build the future of user-centric design together!</span
		>
	</p>
	<div class="flex gap-5 text-nowrap flex-wrap">
		<Button
			type="external"
			className="hover:underline underline-offset-4"
			href="https://www.linkedin.com/in/hannes-sj%C3%B6lander-6b45561a6/"
		>
			<Linkedin color="var(--secondary)" fill="var(--secondary)" size={24} />
			Hannes Sjölander
		</Button>
		<Button
			type="external"
			className="hover:underline underline-offset-4"
			href="mailto:sjolander48@live.se"
		>
			<Mail color="var(--secondary)" size={24} />
			sjolander48@live.se
		</Button>
		<Button
			type="external"
			className="hover:underline underline-offset-4"
			href="mailto:sjolander48@live.se"
		>
			<Phone color="var(--secondary)" size={24} />
			+46 73 534 38 19
		</Button>
	</div>
	<figure class="blur-px text-accentAlt -skew-x-8 text-l -rotate-12 mt-24 pointer-events-none">
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
