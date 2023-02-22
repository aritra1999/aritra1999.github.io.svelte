<script>
	import { page } from "$app/stores";
</script>

{#if $page.url.pathname !== '/'}
    This is bottom
{/if}