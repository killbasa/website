import { fetchProject } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	return {
		organization: {
			srsdvr: await fetchProject('offkai/srs-dvr', { fetch })
		},
		personal: {
			hive: await fetchProject('killbasa/hive', { fetch }),
			vt: await fetchProject('killbasa/vt', { fetch }),
			amaneko: await fetchProject('killbasa/amaneko', { fetch }),
			kbot: await fetchProject('kbot-discord/kbot', { fetch })
		},
		gifts: {
			triggerphish: await fetchProject('killbasa/phishu', { fetch }),
			monomonet: await fetchProject('killbasa/monomonet', { fetch })
		}
	};
};
