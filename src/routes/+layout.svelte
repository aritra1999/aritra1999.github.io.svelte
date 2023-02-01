<script>
    import "../app.css";
    import Navbar from "../components/navbar/navbarContainer.svelte";
    import { metaStore } from "../store/metaStore";

    $: innerWidth = 0
    $: metaStore.set({ screen: innerWidth < 800 ? 'mobile' : 'desktop' })

</script>
<svelte:window bind:innerWidth />

<div class="page-container">
    <div class="w-screen ">
        <Navbar />
    </div>
    <slot />
</div>
