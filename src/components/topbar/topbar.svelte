<script>

    let topbarItems = ['Primary', 'Social', 'Promotions', 'Updates', 'Forums'];
</script>
<div class="flex bg-white rounded-lg space-x-8">
    {#each topbarItems as item}
        <div class="flex items-center justify-center h-10 px-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300">
            {item}
        </div>
    {/each}
</div>