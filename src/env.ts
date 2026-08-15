import { defineEnvVars } from '@sveltejs/kit/env';
import { z } from 'zod/v4';

export const variables = defineEnvVars({
	GITHUB_TOKEN: {
		description: 'GitHub token for accessing the GitHub API',
		public: false,
		static: false,
		schema: z.string().optional(),
	},
});
