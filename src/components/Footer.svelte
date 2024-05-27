<script lang="ts">
	import Button from './ui/Button.svelte';
	import resumeFile from '$lib/resume/hannes_sjolander_cv.pdf';

	let year = new Date().getFullYear();

	const resumeName = 'hannes_sjolander_cv';

	const downloadResume = () => {
		const anchorElement = document.createElement('a') as HTMLAnchorElement;

		anchorElement.href = resumeFile;
		anchorElement.download = `${resumeName}.pdf`;

		anchorElement.click();
		anchorElement.remove();
	};
</script>

<footer class=" px-6 pt-5 pb-2 grid gap-2">
	<div class="grid gap-4 text-nowrap text-md mobile:text-base text-secondary mb-4">
		<Button
			type="external"
			className="hover:underline underline-offset-4 flex items-center group"
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
				class="lucide lucide-linkedin group-hover:rotate-[360deg] transition-transform duration-200"
				><path
					d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
				/><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg
			>
			Hannes Sjölander
		</Button>
		<Button
			type="button"
			className="underline-offset-8 flex items-center hero-button group"
			name="download resume"
			onClick={downloadResume}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="1.5rem"
				width="1.5rem"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-download group-hover:-translate-y-1 transition-all duration-200"
				><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
					points="7 10 12 15 17 10"
				/><line x1="12" x2="12" y1="15" y2="3" /></svg
			>
			<span>Download Resume</span>
		</Button>
	</div>
	<div class="text-center text-secondary text-sm">
		<p>{`Copyright ${year} hannessjolander.com`}</p>
	</div>
</footer>
