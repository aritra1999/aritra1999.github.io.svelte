<script>
    import { metaStore } from "../../store/metaStore";
	import NavbarMobile from "./navbarMobile.svelte";
    import NavbarDesktop from "./navbarDesktop.svelte";
    
</script>
<div class="h-[70px]">
    {#if $metaStore.screen === 'mobile' }
        <NavbarMobile />
    {:else}
        <NavbarDesktop />
    {/if}
</div>