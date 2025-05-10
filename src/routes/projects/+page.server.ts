import { fetchProject } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		personal: {
			srsdvr: await fetchProject('offkai/srs-dvr'),
			hive: await fetchProject('killbasa/hive'),
			vt: await fetchProject('killbasa/vt'),
			amaneko: await fetchProject('killbasa/amaneko'),
			kbot: await fetchProject('kbot-discord/kbot')
		},
		gifts: {
			triggerphish: await fetchProject('killbasa/phishu'),
			monomonet: await fetchProject('killbasa/monomonet')
		}
	};
};
