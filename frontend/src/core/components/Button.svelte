<script lang="ts">
	export let onClick: () => void;

	let className: string;
	export { className as class };

	let fullClassName = `btn ${className}`;
	$: fullClassName = `btn ${className}`;
</script>

<button on:click={onClick} class={fullClassName} {...$$restProps}>
	<slot />
</button>
