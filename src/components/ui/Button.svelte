<script lang="ts">
	export let type: 'external' | 'internal' | 'button';
	export let name: string = 'action';
	export let href: string = '';
	export let className: string = '';
	export let onClick: () => void = () => {};
	export let title: string = '';
	export let disabled: boolean = false;

	const styleProp = `flex gap-2 w-max z-30 ${className}`;
</script>

{#if type == 'external'}
	<a {href} target="_blank" class={styleProp} on:click={onClick} aria-label={name} {title}>
		<slot />
	</a>
{:else if type == 'internal'}
	<a {href} class={styleProp} on:click={onClick} aria-label={name} {title}>
		<slot />
	</a>
{:else if type == 'button'}
	<button class={styleProp} on:click={onClick} aria-label={name} {title} {disabled}>
		<slot />
	</button>
{/if}
