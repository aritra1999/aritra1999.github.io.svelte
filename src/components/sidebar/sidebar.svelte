<script lang="ts">
    import Contact from './contact.svelte';
    import sideBarContent from './sidebarData.json';
    import { metaStore } from '../../store/metaStore';
    

    const sidebarItems = sideBarContent.sidebarItems;
    const sidebarSocialItems = sideBarContent.sidebarSocialItems;
    
</script>

<button on:click={() => {$metaStore.showSidebar = !$metaStore.showSidebar}}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
</button>

<div class="h-[calc(100vh-80px)] px-2 pt-2 w-72 absolute ease-in-out transition-all duration-300 z-30 left-0 top-[70px] {$metaStore.showSidebar ? 'translate-x-0' : '-translate-x-full'}">
    <div class="bg-white h-full px-2 rounded-lg">
        <div class="py-4">
            <Contact />
        </div>
        <div class="w-full flex items-center justify-between bg-blue-100 text-blue-800 rounded-full py-2 text-sm px-6 font-semibold">
            <div class="flex">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 14 16" class="h-5 w-5 mr-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 9l-1.13-7.14c-.08-.48-.5-.86-1-.86H2.13c-.5 0-.92.38-1 .86L0 9v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V9zm-3.28.55l-.44.89c-.17.34-.52.56-.91.56H4.61c-.38 0-.72-.22-.89-.55l-.44-.91c-.17-.33-.52-.55-.89-.55H1l1-7h10l1 7h-1.38c-.39 0-.73.22-.91.55l.01.01z"></path>
                </svg>
                Inbox
            </div>
            <div>6</div>
        </div>
        {#each sidebarItems as sidebarItem}
            <div class="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-full py-2 text-sm px-6 font-medium">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg">
                    {@html sidebarItem.icon}
                </svg>
                {sidebarItem.name}
            </div>
        {/each}
        <hr class="m-2">
        {#each sidebarSocialItems as sidebarSocialItem}
            <a href={sidebarSocialItem.link} target="_blank" rel="noreferrer">
                <div class="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-r-full py-2 text-sm px-6 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-5 w-5 mr-3" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        {@html sidebarSocialItem.icon}
                    </svg>
                    {sidebarSocialItem.title}
                </div>
            </a>
        {/each}
        <hr class="ml-2">
    </div>
</div>

