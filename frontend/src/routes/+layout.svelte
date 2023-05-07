<script>
	import '../app.css';
	import Navbar from '../core/components/Navbar.svelte';
</script>

<main class="max-w-[64rem] min-h-screen flex flex-col gap-4 mx-auto">
	<div class="mt-1">
		<Navbar />
	</div>
	<slot />
</main>
