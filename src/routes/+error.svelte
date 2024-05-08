<script lang="ts">
    import Button from "../components/ui/Button.svelte";

</script>
<div class="h-screen pt-20 min-h-screen px-10 flex items-center justify-center flex-col text-secondary gap-2">
    <h1 class="text-4xl">404 <span>Not Found</span></h1>
    <h2 class="text-2xl text-accent">Uh-oh!</h2>
    <p>It seems like you ventured outside of the map</p>
    <p>Let's get you back on track</p>
    <Button type="button" onClick={() => history.back()} className="bg-accent px-4 py-2 rounded text-sm border-2 border-accentHover hover:bg-accentHover flex items-center justify-center text-white">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
    Go back</Button>
</div>