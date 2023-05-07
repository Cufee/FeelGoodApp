<script lang="ts">
	import data from 'data/materials/cognitive-distortions/load';

	let hideDescriptions = true;
	let selectedItem: string | null = null;

	let items = data.sort((a, b) => a.name.localeCompare(b.name));
	const shuffle = () => {
		const beforeShuffle = JSON.stringify(items);
		items = [...items.sort(() => Math.random() - 0.5)];
		if (beforeShuffle === JSON.stringify(items)) shuffle();
	};
	const sort = () => {
		items = [...items.sort((a, b) => a.name.localeCompare(b.name))];
	};
</script>

<h1 class="text-center text-2xl font-bold">Cognitive Distortions</h1>

<div class="flex justify-between">
	<div>
		<button class="btn btn-accent"> Flash Cards </button>
		<button class="btn btn-accent" on:click={shuffle}> Shuffle </button>
		<button class="btn btn-accent" on:click={sort}> Sort </button>
	</div>
	<div class="flex gap-2 items-center">
		<span class="uppercase text-gray-400 text-sm">Hide Descriptions</span>
		<input type="checkbox" class="toggle toggle-sm" bind:checked={hideDescriptions} />
	</div>
</div>

<div class="overflow-x-auto">
	<table class="table table-zebra w-full">
		<!-- Body -->
		<tbody>
			{#each items as distortion}
				<tr>
					<td class="font-bold">{distortion.name}</td>
					<td class="relative">
						{#if hideDescriptions && selectedItem !== distortion.id}
							<div class="absolute left-0 top-0 flex justify-center w-full h-full">
								<div
									class="flex-grow m-2 bg-blue-100 hover:bg-blue-200 flex justify-center items-center rounded-xl cursor-pointer"
									on:click={() => (selectedItem = distortion.id)}
									on:keyup={() => (selectedItem = distortion.id)}
								>
									<span class="uppercase font-bold text-blue-400">Show Description</span>
								</div>
							</div>
						{/if}
						<span class="whitespace-pre-wrap">
							{distortion.description}
						</span>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
