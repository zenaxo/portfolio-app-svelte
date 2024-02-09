<script lang="ts">
	export var title: string;
	export var description: string;
	export var src: string;
	export var alt: string;
</script>

<div class="flex overflow-hidden">
	<div class="mb-5">
		<h2 class="text-2xl">{title}</h2>
		<p>{description}</p>
	</div>
	<div class="h-[500px]">
		<img {src} {alt} class="w-full h-full object-cover object-top" />
	</div>
</div>
