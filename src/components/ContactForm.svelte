<script lang="ts">
	import { emailSchema, type EmailSchema } from '$lib/schema/mailschema.js';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Button from './ui/Button.svelte';
	import { type SuperValidated, superForm } from 'sveltekit-superforms';

	export let data: SuperValidated<EmailSchema>;

	const form = superForm(data, {
		validators: zodClient(emailSchema),
		dataType: 'json'
	});

	const { form: formData, message, enhance, errors, submitting } = form;
</script>

{#if $message !== undefined}
	<div
		class="fixed bottom-0 z-top right-0 bg-secondary m-10 text-primary rounded-md p-8 flex items-center flex-col max-w-[40ch] border-2 border-zinc-500"
	>
		<button
			class="absolute top-0 right-0 font-semibold p-4"
			title="Close message"
			on:click={() => {
				message.set(undefined);
			}}>X</button
		>
		<h3 class="text-zenaxo-500 font-semibold mb-5 text-2xl">{$message.header}</h3>
		<p>{$message.text}</p>
	</div>
{/if}
<div class="py-24 lg:py-32 px-4 mx-auto max-w-screen-md">
	<h2
		class="mb-4 mobile:mb-2 text-4xl mobile:text-2xl tracking-tight font-extrabold text-center text-secondary"
	>
		Let's get in touch!
	</h2>
	<p
		class="mb-8 mobile:mb-5 font-semibold italic items-center justify-center text-center text-zenaxo-500 mobile:text-base flex flex-wrap"
	>
		<span class="mr-[0.5rem]">Do you have a project in mind?</span>
		<span>Feel free to contact me!</span>
	</p>
	<form action="?/sendEmail" method="POST" class="space-y-8 max-w-[45ch] mx-auto" use:enhance>
		<div>
			<label for="email" class="block mb-2 text-sm font-medium text-secondary">Your email</label>
			<input
				type="email"
				id="email"
				class="shadow-sm bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zenaxo-500 focus:border-zenaxo-500 block w-full p-2.5"
				placeholder="name@hannessjolander.com"
				bind:value={$formData.email}
			/>
			{#if $errors.email}
				<p class="text-red-500 text-sm mt-2">{$errors.email}</p>
			{/if}
		</div>
		<div>
			<label for="subject" class="block mb-2 text-sm font-medium text-secondary">Subject</label>
			<input
				type="text"
				id="subject"
				class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 shadow-sm focus:ring-zenaxo-500 focus:border-zenaxo-500"
				placeholder="Let me know what you have in mind!"
				bind:value={$formData.subject}
			/>
			{#if $errors.subject}
				<p class="text-red-500 text-sm mt-2">{$errors.subject}</p>
			{/if}
		</div>
		<div class="sm:col-span-2">
			<label for="message" class="block mb-2 text-sm font-medium text-secondary">Your message</label
			>
			<textarea
				id="message"
				rows="6"
				class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border-2 border-gray-300 focus:ring-zenaxo-500 focus:border-zenaxo-500"
				placeholder="Leave a comment..."
				bind:value={$formData.message}
			></textarea>
			{#if $errors.message}
				<p class="text-red-500 text-sm mt-2">{$errors.message}</p>
			{/if}
		</div>
		<Button
			type="button"
			className="bg-gradient-to-r min-w-full disabled:from-zenaxo-700 disabled:to-zenaxo-700 disabled:text-zinc-300 flex justify-center from-zenaxo-500 to-zenaxo-700 border-2 border-zenaxo-600 px-4 py-2 mobile:text-sm rounded hover:from-zenaxo-700 hover:to-zenaxo-700 transition-colors duration-250 shadow-sm text-white"
			name="send message"
			disabled={$submitting}
		>
			{#if $submitting}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="icon icon-tabler icons-tabler-outline icon-tabler-loader-2 animate-spin"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3a9 9 0 1 0 9 9" /></svg
				>
			{/if}
			Send message
		</Button>
	</form>
</div>
