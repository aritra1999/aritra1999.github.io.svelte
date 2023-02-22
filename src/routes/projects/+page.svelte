<script lang="ts">
    import projects from "$lib/data/projects.json";
    import PLCard from "$lib/components/card/PLCard.svelte";
</script>

<div class="px-3 lg:px-6 py-10">
    <h2 class="magical-underline text-3xl font-semibold mb-8 w-fit">
        Projects
    </h2>
    <div class="columns-1 md:columns-2 xl:columns-3 gap-4">
        {#each projects as project}
            <PLCard item={project} />
        {/each}
    </div>
</div>
