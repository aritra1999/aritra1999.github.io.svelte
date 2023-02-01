<script>
    import { metaStore } from "../../store/metaStore";
	import NavbarMobile from "./navbarMobile.svelte";
    import NavbarDesktop from "./navbarDesktop.svelte";

</script>

{#if $metaStore.screen === 'mobile' }
    <NavbarMobile />
{:else}
    <NavbarDesktop />
{/if}