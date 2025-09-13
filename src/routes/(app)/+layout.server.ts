import { fetchProject } from '$lib/utils';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	return {
		projects: {
			Organization: {
				srsdvr: await fetchProject('offkai/srs-dvr', { fetch })
			},
			Personal: {
				hive: await fetchProject('killbasa/hive', { fetch }),
				vt: await fetchProject('killbasa/vt', { fetch }),
				streamdash: await fetchProject('killbasa/stream-dash', { fetch }),
				amaneko: await fetchProject('killbasa/amaneko', { fetch }),
				kbot: await fetchProject('kbot-discord/kbot', { fetch }),
				oshi: await fetchProject('killbasa/oshi-api', { fetch })
			},
			Gifts: {
				triggerphish: await fetchProject('killbasa/phishu', { fetch }),
				monomonet: await fetchProject('killbasa/monomonet', { fetch })
			}
		},
		events: [
			{
				name: 'Wallcon 2025',
				description:
					'Live outdoor VTuber performance in Birmingham, UK during VeXpo weekend.',
				date: 'September 4th, 2025',
				location: 'Birmingham, UK',
				url: 'https://x.com/wsfrontieres/status/1961142819210351004',
				image: 'https://imagedelivery.net/R3CuIrz6zPUOHovUJa7jXw/c4717324-6cf8-4d49-19b5-9be2ca587800/public'
			}
		]
	};
};
