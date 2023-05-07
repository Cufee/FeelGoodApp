<script>
	import BdcTest from 'components/tests/BDCTest.svelte';
	import bdc from 'data/tests/bdc/load';
</script>

<h1 class="text-2xl font-bold text-center">{bdc.name}</h1>

<BdcTest />
