<script>
    import "../app.css";
	import EmailList from "../components/emailList/emailList.svelte";
    import Navbar from "../components/navbar/navbarContainer.svelte";
	import Topbar from "../components/topbar/topbar.svelte";
    import { metaStore } from "../store/metaStore";
    import { page } from '$app/stores';

    $: innerWidth = 0
    $: metaStore.set({ screen: innerWidth < 850 ? 'mobile' : 'desktop', showSidebar: innerWidth >= 1200 })

</script>
<svelte:window bind:innerWidth />

<div class="page-container">
    <div class="w-screen relative"><Navbar /></div>
    <div class="fixed w-full pr-2 pb-3 ease-in-out transition-all duration-300 {($metaStore.showSidebar && $metaStore.screen === 'desktop') ? 'pl-72' : 'pl-2'} h-[calc(100vh-5rem)]">
        <div class="bg-white rounded-xl h-full">
            {#if $metaStore.screen == 'desktop' }<Topbar />{/if}
            <div class="flex h-[calc(100vh-10rem)] overflow-y-auto w-full border-slate-200">
                <div class="{$metaStore.screen === 'desktop' ? 'border-r border-slate-200 w-[40rem]': 'w-full'} overflow-y-auto"><EmailList/></div>
                {#if $metaStore.screen === 'desktop' || $page.url.pathname !== '/'}
                    <div class="{$metaStore.screen !== 'desktop' ? 'absolute left-0 w-screen h-[calc(100vh-5rem)]' : 'w-full'} p-2 bg-white z-50 overflow-y-auto">
                        <slot />
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>

