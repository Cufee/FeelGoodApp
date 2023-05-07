import { z } from 'zod';

const TestSectionModel = z.object({
	name: z.string(),
	questions: z.array(z.string())
});

const TestModel = z.object({
	name: z.string(),
	instructions: z.string(),
	options: z.record(z.string()),
	sections: z.array(TestSectionModel)
});

export { TestModel, TestSectionModel };
