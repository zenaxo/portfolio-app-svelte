<script>
	import { Linkedin, Mail, Phone } from 'lucide-svelte';
	import Hero from '../components/Hero.svelte';
	import Button from '../components/ui/Button.svelte';
	import Divider from '../components/ui/Divider.svelte';
	import Projects from '../components/Projects.svelte';
</script>

<Hero />
<main class="flex p-8 flex-col">
	<div class="w-full flex flex-col items-center text-secondary">
		<Divider header="About me" />
		<div class="pl-4 pr-4 flex flex-col max-w-[700px]">
			<div class="mb-5 flex gap-4 flex-wrap">
				<Button
					className="hover:underline decoration-2 underline-offset-8 items-center"
					type="external"
					href="https://www.linkedin.com/in/hannes-sj%C3%B6lander-6b45561a6/"
				>
					<Linkedin color="var(--secondary)" fill="var(--secondary)" size={36} />
					<p class="text-nowrap">Hannes Sjölander</p>
				</Button>

				<Button
					type="external"
					href="mailto:sjolander48@live.se"
					className="hover:underline decoration-2 underline-offset-8 items-center"
				>
					<Mail color="var(--secondary)" size={36} />
					<p class="text-nowrap">sjolander48@live.se</p>
				</Button>

				<Button
					type="external"
					href="tel:+46735343819"
					className="hover:underline decoration-2 underline-offset-8 items-center"
				>
					<Phone color="var(--secondary)" size={30} />
					<p class="text-nowrap">+46 73 534 38 19</p>
				</Button>
			</div>
			<h2 class="text-3xl mb-5">Who am I?</h2>
			<p class="text-xl mb-10">
				A passionate interaction designer with a flair for turning ideas into immersive digital
				experiences. As a civil engineering student exploring the vibrant world of interaction
				design, I thrive on crafting intuitive solutions that bridge the gap between form and
				function.
				<br /><br /><span class="text-accent font-semibold italic"
					>Let's build the future of user-centric design together!</span
				>
			</p>
		</div>
		<Divider header="Latest Projects" />
		<Projects />
	</div>
</main>
