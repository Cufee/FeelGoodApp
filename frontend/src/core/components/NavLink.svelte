<script lang="ts">
	import { page } from '$app/stores';

	export let url: string;

	let className: string;
	export { className as class };

	let currentPage = '';
	page.subscribe((value) => (currentPage = value.url.pathname));
</script>

<a href={url} class={`${currentPage === url ? 'btn-active' : ''} ${className}`}> <slot /> </a>
