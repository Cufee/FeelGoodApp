<script lang="ts">
	export let show: boolean;
</script>

{#if show}
	<slot />
{/if}
