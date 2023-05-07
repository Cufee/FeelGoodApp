import data from './data.json';

import type { z } from 'zod';
import { TestModel } from 'models/test';

export const parseModel = (data: unknown): z.infer<typeof TestModel> => {
	return TestModel.parse(data);
};

export default parseModel(data);
