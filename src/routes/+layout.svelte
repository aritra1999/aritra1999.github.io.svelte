<script>
    import "../app.css";
    import Navbar from "../components/navbar/navbarContainer.svelte";
	import Topbar from "../components/topbar/topbar.svelte";
    import { metaStore } from "../store/metaStore";

    $: innerWidth = 0
    $: metaStore.set({ screen: innerWidth < 850 ? 'mobile' : 'desktop', showSidebar: innerWidth >= 850 })

</script>
<svelte:window bind:innerWidth />

<div class="page-container">
    <div class="w-screen relative">
        <Navbar />
    </div>
    <div class="fixed w-full pr-2 ease-in-out transition-all duration-300 {(($metaStore.showSidebar) && ($metaStore.screen === 'desktop')) ? 'pl-72' : 'pl-2'} h-[calc(100vh-80px)]">
        <div class="bg-white rounded-xl h-full">
            {#if $metaStore.screen == 'desktop' }
                <Topbar />
            {/if}
            <div class="p-2 h-[calc(100vh-200px)] overflow-y-auto">
                <slot />
            </div>
        </div>
    </div>
</div>
