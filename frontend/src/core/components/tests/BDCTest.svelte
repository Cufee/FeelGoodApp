<script lang="ts">
	import Button from 'components/Button.svelte';
	import OptionalElement from 'components/OptionalElement.svelte';
	import bdc from 'data/tests/bdc/load';
	import TestSection from './TestSection.svelte';

	let currentView = -1;

	let sectionAnswers: Record<string, Record<string, string>> = {};
	const resetAnswers = () => {
		sectionAnswers = bdc.sections.reduce((acc, section) => {
			acc[section.name] = {};
			return acc;
		}, {} as Record<string, Record<string, string>>);
	};
	resetAnswers();

	let score: Record<string, number> = {};
	const calculateScore = () => {
		score = {};
		Object.entries(sectionAnswers).forEach(([section, sectionAnswer]) => {
			score[section] = 0;
			Object.entries(sectionAnswer).forEach(([_, value]) => {
				score[section] += parseInt(value);
			});
		});
	};

	let totalScore = 0;
	$: {
		sectionAnswers;
		calculateScore();
		totalScore = Object.values(score).reduce((acc, value) => acc + value, 0);
	}

	const depressionLevels = {
		0: 'No Depression',
		6: 'Normal but unhappy',
		11: 'Mild depression',
		26: 'Moderate depression',
		51: 'Severe depression',
		76: 'Extreme depression'
	};

	let depressionLevel = '';
	$: {
		depressionLevel =
			Object.entries(depressionLevels)
				.reverse()
				.find(([levelScore, _]) => totalScore >= parseInt(levelScore))?.[1] || '';
	}
</script>

<div class="flex flex-col flex-grow gap-2">
	<!-- Start Card -->
	<OptionalElement show={currentView === -1}>
		<div class="flex justify-center">
			<span class="alert bg-blue-100 lg:w-1/2">
				{bdc.instructions}
			</span>
		</div>

		<div class="flex justify-center">
			<Button class="btn btn-primary" onClick={() => currentView++}>Start</Button>
		</div>
	</OptionalElement>

	{#each bdc.sections as section, index}
		<OptionalElement show={currentView === index}>
			<TestSection {section} options={bdc.options} bind:answers={sectionAnswers[section.name]} />
			<div class="flex justify-center">
				<Button
					disabled={Object.keys(sectionAnswers[section.name]).length !== section.questions.length}
					class="btn btn-primary"
					onClick={() => {
						currentView++;
					}}
				>
					{Object.keys(sectionAnswers[section.name]).length !== section.questions.length
						? 'Please Answer Every Question To Continue'
						: 'Continue'}
				</Button>
			</div>
		</OptionalElement>
	{/each}

	<!-- End Card -->
	<OptionalElement show={currentView === bdc.sections.length}>
		<span class="text-center text-xl"> You have completed the test. </span>
		<span class="text-center text-lg">
			Your total score is <span class="badge badge-lg">{totalScore}</span>
		</span>
		<div class="flex justify-center">
			<span class="badge badge-lg">{depressionLevel}</span>
		</div>

		<div class="flex justify-center">
			<Button
				class="btn btn-primary"
				onClick={() => {
					currentView = -1;
					resetAnswers();
				}}
			>
				Restart
			</Button>
		</div>
	</OptionalElement>
</div>
