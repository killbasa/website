import { fetchProject } from '$lib/github';
import { getRequestEvent, prerender } from '$app/server';

export const getProjects = prerender(async () => {
	const event = getRequestEvent();
	const { fetch } = event;

	const images = new Set<string>();

	const entries = {
		Organization: {
			srsdvr: await fetchProject('offkai/srs-dvr', { fetch })
		},
		Personal: {
			hive: await fetchProject('killbasa/hive', { fetch }),
			vt: await fetchProject('killbasa/vt', { fetch }),
			oshi: await fetchProject('killbasa/oshi-api', { fetch }),
			amaneko: await fetchProject('killbasa/amaneko', { fetch }),
			kbot: await fetchProject('kbot-discord/kbot', { fetch })
		},
		Gifts: {
			triggerphish: await fetchProject('killbasa/phishu', { fetch }),
			monomonet: await fetchProject('killbasa/monomonet', { fetch })
		}
	};

	for (const projects of Object.values(entries)) {
		for (const project of Object.values(projects)) {
			images.add(project.owner.avatar_url);
		}
	}

	return {
		entries,
		images: Array.from(images)
	};
});
