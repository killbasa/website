import { fetchGithubRepo } from '$src/lib/projects';
import type { Project } from '$src/lib/projects';
import { getRequestEvent, prerender } from '$app/server';

export const getProjects = prerender(async () => {
	const event = getRequestEvent();
	const { fetch } = event;

	const images = new Set<string>();

	const entries: Record<string, Record<string, Project>> = {
		Organization: {
			srsdvr: await fetchGithubRepo('offkai/srs-dvr', { fetch })
		},
		Gifts: {
			triggerphish: await fetchGithubRepo('killbasa/phishu', { fetch }),
			monomonet: await fetchGithubRepo('killbasa/monomonet', { fetch })
		},
		Personal: {
			hive: await fetchGithubRepo('killbasa/hive', { fetch }),
			vt: await fetchGithubRepo('killbasa/vt', { fetch }),
			oshi: await fetchGithubRepo('killbasa/oshi-api', { fetch }),
			amaneko: await fetchGithubRepo('killbasa/amaneko', { fetch }),
			dotfiles: await fetchGithubRepo('killbasa/dotfiles', { fetch })
		}
	};

	for (const projects of Object.values(entries)) {
		for (const project of Object.values(projects)) {
			if (!project.images) continue;

			for (const image of Object.values(project.images)) {
				images.add(image);
			}
		}
	}

	return {
		entries,
		images: Array.from(images)
	};
});
