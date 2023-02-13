<script lang="ts">
    import projects from './projects.json';
    import PLCard from '../../components/plCard/PLCard.svelte';
</script>

<div class="lg:px-16 md:px-6 px-6 py-10">
    <div class="columns-1 md:columns-2 xl:columns-3 gap-6">
        {#each projects as project}
            <div class="inline-block w-full">
                <PLCard item={project} />
            </div>
        {/each}
    </div>
</div>
