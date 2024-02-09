<script lang="ts">
	import { onMount } from 'svelte';

	// Define a custom MouseEvent interface extending MouseEvent
	interface MouseEventWithCurrentTarget extends MouseEvent {
		currentTarget: HTMLDivElement;
	}

	interface Project {
		src: string;
		name: string;
		categories: string[];
	}

	const projects: Project[] = [
		{
			src: aspSrc,
			name: 'Movie Gallery',
			categories: ['Database', 'Web App', 'Design']
		},
		{
			src: aspSrc,
			name: 'Movie Gallery',
			categories: ['Database', 'Web App', 'Design']
		},
		{
			src: aspSrc,
			name: 'Movie Gallery',
			categories: ['Database', 'Web App', 'snorre']
		}
	];

	// Import your images
	import aspSrc from '../lib/images/details.jpg';
	import testSrc from '../lib/images/portfolioshotflipped.png';

	let cards: NodeListOf<HTMLDivElement>; // store references to all card elements

	// This function will be called when the component is mounted
	onMount(() => {
		// Select all elements with the class 'card'
		cards = document.querySelectorAll('.card');

		// Add event listeners to each card for mousemove and mouseleave events
		cards.forEach((card) => {
			card.addEventListener('mousemove', handleMouseMove as EventListener);
			card.addEventListener('mouseleave', handleMouseLeave as EventListener);
		});
	});

	// Function to handle mouse move event
	function handleMouseMove(event: MouseEventWithCurrentTarget) {
		const card = event.currentTarget;
		const container = card.querySelector('.img-container') as HTMLElement;

		if (container) {
			// Check if container is not null
			const rect = container.getBoundingClientRect();

			// Calculate mouse position relative to the center of the container
			const mouseX = event.clientX - rect.left - rect.width / 2;
			const mouseY = event.clientY - rect.top - rect.height / 2;

			// Calculate rotation angles
			const rotationX = (mouseY / rect.height) * -10; // adjust these values as needed
			const rotationY = (mouseX / rect.width) * 10; // adjust these values as needed

			// Apply transformations to the container
			container.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
		}
	}

	function handleMouseLeave(event: MouseEventWithCurrentTarget) {
		const card = event.currentTarget;
		const container = card.querySelector('.img-container') as HTMLElement;

		if (container) {
			// Check if container is not null
			// Reset the transform
			container.style.transform = '';
		}
	}
</script>

<div class="flex mb-5 gap-6">
	{#each projects as project}
		<div class="w-[450px] min-w-[450px] card">
			<div class="mb-4 img-container">
				<img src={project.src} alt={project.name} class="rounded-md" />
			</div>
			<div>
				<h2 class="text-3xl mb-3">{project.name}</h2>
				<h3 class="text-l">
					{#each project.categories as category}
						{`${category}, `}
					{/each}
				</h3>
			</div>
		</div>
	{/each}
</div>

<style>
	.card {
		transition: transform 0.1s ease-out; /* Add transition for smooth animation */
	}
</style>
