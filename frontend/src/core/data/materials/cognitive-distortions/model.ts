import { z } from 'zod';

const ID = z.string().uuid();

const DistortionModel = z.object({
	id: ID,
	name: z.string(),
	examples: z.array(z.string()),
	description: z.string(),
	relatesTo: z.array(ID).optional()
});

type Distortion = z.infer<typeof DistortionModel>;

function parseDistortions(data: unknown): Distortion[] {
	return z.array(DistortionModel).parse(data);
}

export { parseDistortions, type Distortion };
