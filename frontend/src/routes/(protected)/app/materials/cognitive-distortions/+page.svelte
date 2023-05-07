<script lang="ts">
	import data from 'data/materials/cognitive-distortions/load';

	let showExamples = true;
	let hideDescriptions = false;
	let selectedItem: string | null = null;

	let sortDirection = -1;
	let items = data.sort((a, b) => a.name.localeCompare(b.name));

	const shuffle = () => {
		sortDirection = 1;
		selectedItem = null;
		const beforeShuffle = JSON.stringify(items);
		items = [...items.sort(() => Math.random() - 0.5)];
		if (beforeShuffle === JSON.stringify(items)) shuffle();
	};

	const sort = () => {
		selectedItem = null;
		items = [...items.sort((a, b) => sortDirection * a.name.localeCompare(b.name))];
		sortDirection = sortDirection * -1;
	};
</script>

<h1 class="text-center text-2xl font-bold">Cognitive Distortions</h1>

<div class="flex justify-between">
	<div>
		<a href="/app/practice/cognitive-distortions/flash-cards" class="btn btn-secondary">
			Flash Cards
		</a>
		<button class="btn btn-accent" on:click={shuffle}> Shuffle </button>
		<button class="btn btn-accent" on:click={sort}> Sort </button>
	</div>
	<div class="flex gap-2">
		<div class="flex gap-2 items-center">
			<span class="uppercase text-gray-400 text-sm">Show Examples</span>
			<input type="checkbox" class="toggle toggle-sm" bind:checked={showExamples} />
		</div>
		<div class="flex gap-2 items-center">
			<span class="uppercase text-gray-400 text-sm">Hide Descriptions</span>
			<input type="checkbox" class="toggle toggle-sm" bind:checked={hideDescriptions} />
		</div>
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
									class="flex-grow m-2 bg-blue-200 text-blue-400 hover:bg-blue-300 hover:text-blue-500 flex justify-center items-center rounded-xl cursor-pointer"
									on:click={() => (selectedItem = distortion.id)}
									on:keyup={() => (selectedItem = distortion.id)}
								>
									<span class="uppercase font-bold">Show Description</span>
								</div>
							</div>
						{/if}
						<span class="whitespace-pre-wrap flex flex-col gap-4">
							<span>
								{distortion.description}
							</span>

							{#if showExamples && distortion.examples.length > 0}
								<div class="flex flex-col">
									<div class="flex flex-col gap-1">
										{#each distortion.examples as example}
											<div class="alert shadow-lg bg-blue-100">
												<div>
													<span class="italic">{example}</span>
												</div>
											</div>
										{/each}
									</div>
								</div>
							{/if}
						</span>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
