<script lang="ts">
	import type { z } from 'zod';
	import type { TestSectionModel } from 'models/test';

	export let section: z.infer<typeof TestSectionModel>;
	export let options: Record<string, string>;
	export let answers: Record<string, string>;
</script>

<table class="table table-zebra w-full">
	<!-- Head -->
	<thead>
		<tr>
			<th class="font-bold">{section.name} </th>
			{#each Object.keys(options) as name}
				<th class="text-center">{options[name]}</th>
			{/each}
		</tr>
	</thead>
	<!-- Body -->
	<tbody>
		{#each section.questions as question}
			<tr>
				<td class="font-bold">{question}</td>

				{#each Object.keys(options) as value}
					<td>
						<div class="flex justify-center">
							<input
								type="radio"
								name={question}
								class="radio"
								checked={answers[question] === value}
								on:change={() => {
									answers[question] = value;
									answers = { ...answers };
								}}
							/>
						</div>
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
