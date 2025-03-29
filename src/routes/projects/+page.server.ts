import { fetchProject } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		srsdvr: await fetchProject('offkai/srs-dvr'),
		hive: await fetchProject('killbasa/hive'),
		amaneko: await fetchProject('killbasa/amaneko'),
		kbot: await fetchProject('kbot-discord/kbot'),
		vt: await fetchProject('killbasa/vt')
	};
};
