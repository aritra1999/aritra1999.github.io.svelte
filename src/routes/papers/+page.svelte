<script lang="ts">
    import papers from './papers.json';
    import PLCard from '../../components/card/PLCard.svelte';
</script>

<div class="lg:px-16 md:px-6 px-6 py-10">
    <h2 class="magical-underline text-3xl font-semibold mb-8 w-fit">
        Blogs & Papers 
    </h2>
    <div class="columns-1 md:columns-2 xl:columns-3 gap-4">
        {#each papers as paper}
            <div class="inline-block w-full">
                <PLCard item={paper} />
            </div>
        {/each}
    </div>
</div>
