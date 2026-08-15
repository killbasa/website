import { defineEnvVars } from '@sveltejs/kit/env';
import { z } from 'zod/v4';

export const variables = defineEnvVars({
	GITHUB_TOKEN: {
		public: false,
		validate: z.string().optional(),
	},
});
