<script>
    import "../app.css";
    import Navbar from "../components/navbar/navbarContainer.svelte";
	import Topbar from "../components/topbar/topbar.svelte";
    import { metaStore } from "../store/metaStore";

    $: innerWidth = 0
    $: metaStore.set({ screen: innerWidth < 800 ? 'mobile' : 'desktop', showSidebar: true })

</script>
<svelte:window bind:innerWidth />

<div class="page-container">
    <div class="w-screen relative">
        <Navbar />
    </div>
    <div class="py-2 pr-2 ease-in-out transition-all duration-300 {$metaStore.showSidebar && $metaStore.screen == 'desktop' ? 'pl-72' : 'pl-2'} ">
        <Topbar />
        <slot />
    </div>
</div>
