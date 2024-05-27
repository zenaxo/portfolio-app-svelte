<script lang="ts">
	export let sectionName: string;
</script>

<section
	data-section-name={sectionName}
	class={`w-full max-w[100vw] flex flex-col text-secondary border-b border-accentAlt h-[calc(100svh-58px)] section-start overflow-hidden items-center relative`}
>
	<slot />
</section>
