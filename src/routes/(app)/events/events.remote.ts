import { prerender } from '$app/server';

export const getEvents = prerender(() => {
	return [
		{
			name: 'OffKai Fest: Twilight Reverie',
			description: 'One-night jazz lounge themed VTuber event during TwitchCon weekend.',
			date: 'October 18th, 2025',
			location: 'San Diego, CA, USA',
			image: 'https://imagedelivery.net/R3CuIrz6zPUOHovUJa7jXw/5102ded8-1a45-4862-52b7-cc370717d100/public',
			role: {
				title: 'Telepresence'
			}
		},
		{
			name: 'Wallcon 2025',
			description:
				'Live outdoor VTuber performance in Birmingham, UK during <a class="anchor" target="_blank" href="https://www.vexpo.uk">VeXpo</a> weekend.',
			date: 'September 4th, 2025',
			location: 'Birmingham, UK',
			image: 'https://imagedelivery.net/R3CuIrz6zPUOHovUJa7jXw/c4717324-6cf8-4d49-19b5-9be2ca587800/public',
			role: {
				title: 'Event Producer'
			}
		}
	];
});
