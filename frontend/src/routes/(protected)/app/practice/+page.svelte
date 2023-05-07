<script>
	import NavLink from 'components/NavLink.svelte';
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col bg-blue-100 gap-2 p-4 rounded-3xl">
		<h2 class="text-xl text-center">Cognitive Distortions</h2>
		<div class="flex flex-col gap-2">
			<NavLink class="btn btn-accent" url="/app/practice/cognitive-distortions/flash-cards">
				Flash Cards
			</NavLink>
			<NavLink class="btn btn-accent" url="/app/practice/cognitive-distortions/process-thoughts">
				Processing Thoughts
			</NavLink>
		</div>
	</div>
</div>
