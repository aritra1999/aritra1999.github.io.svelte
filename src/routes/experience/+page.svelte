<script>
    import AboutCard from "$lib/components/card/AboutCard.svelte";
    import items from "$lib/data/about.json";

    const experiences = items.experience;

</script>
<div class="pb-24 pt-4 lg:px-16 md:px-6 px-2">
    <div class="my-4">
        <span class="magical-underline text-3xl font-semibold mb-4">
            Experience
        </span>
        <div class="p-4 md:columns-2 columns-1 gap-4">
            {#each experiences as experience}
                <AboutCard  item={experience}/>
            {/each}
        </div>
    </div>
</div>