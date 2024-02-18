<script lang="ts">
	export let projectName: string;
	export let src: string;
	export let tags: string[];
</script>

<div
	class="flex items-center w-full max-w-[1200px] h-[calc(100vh-58px)] p-20 mobile:p-10 mobile:pt-24 mobile:pb-24 pb-24 pt-24 justify-between mobile:flex-col"
>
	<div
		class="w-full h-full bg-primary flex justify-between items-center mobile:items-start mobile:flex-col"
	>
		<h2
			class="text-4xl mobile:text-2xl mobile:p-2 h-max uppercase font-bold vertical text-primary bg-accent text-center mobile:text-center mobile:tracking-widest"
		>
			{projectName}
		</h2>
		<div class="flex h-full justify-center items-center max-w-[800px] pt-4 pb-4">
			<div class="flex-col overflow-hidden flex items-end w-full h-full">
				<p class="text-xl mobile:text-sm mb-4 mobile:mb-2 font-semibold italic -translate-x-3">
					{#each tags as tag}
						{tag}
					{/each}
				</p>
				<img {src} alt="Movie Gallery project" class="object-contain object-top w-full h-full" />
			</div>
		</div>
	</div>
</div>

<style>
	@media (min-width: 691px) {
		.vertical {
			writing-mode: vertical-lr;
			text-orientation: upright;
		}
	}
</style>
