import { fetchProject } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	return {
		Organization: {
			srsdvr: await fetchProject('offkai/srs-dvr', { fetch })
		},
		Personal: {
			hive: await fetchProject('killbasa/hive', { fetch }),
			vt: await fetchProject('killbasa/vt', { fetch }),
			amaneko: await fetchProject('killbasa/amaneko', { fetch }),
			kbot: await fetchProject('kbot-discord/kbot', { fetch }),
			oshi: await fetchProject('killbasa/oshi-api', { fetch })
		},
		Gifts: {
			triggerphish: await fetchProject('killbasa/phishu', { fetch }),
			monomonet: await fetchProject('killbasa/monomonet', { fetch })
		}
	};
};
