<script lang="ts">
	export let sectionName: string = '';
	export let isAccent: boolean = false;
</script>

<section
	data-section-name={sectionName}
	class={`${isAccent && 'bg-accent'} w-full max-w[100vw] flex flex-col text-secondary border-b border-accentAlt h-[calc(100svh-58px)] section-start overflow-hidden items-center relative`}
>
	<slot />
</section>
