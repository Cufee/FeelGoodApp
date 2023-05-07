<script lang="ts">
	import NavLink from './NavLink.svelte';
</script>

<div class="navbar bg-primary rounded-full shadow-lg">
	<div class="flex-1">
		<NavLink url="/" class="btn btn-primary normal-case text-xl">Home</NavLink>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 flex gap-2">
			<li class="gap-2">
				<NavLink url="/app/materials" class="btn btn-secondary">Materials</NavLink>
				<NavLink url="/app/practice" class="btn btn-secondary">Practice</NavLink>
			</li>
		</ul>
	</div>
</div>
