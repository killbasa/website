import { prerender } from '$app/server';

export const getEvents = prerender(() => {
	return [
		{
			name: 'OffKai Fest: Twilight Reverie',
			description:
				'One-night jazz lounge themed VTuber event during <a class="anchor" target="_blank" href="https://www.twitchcon.com">TwitchCon</a> weekend.',
			date: 'October 18th, 2025',
			location: 'San Diego, CA, USA',
			image: 'https://imagedelivery.net/R3CuIrz6zPUOHovUJa7jXw/ea343f8c-5712-42fa-d5ae-d8dd3ec29f00/public',
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
			image: 'https://imagedelivery.net/R3CuIrz6zPUOHovUJa7jXw/f4125651-f08e-4691-b1ec-cee130d59300/public',
			role: {
				title: 'Event Producer'
			}
		}
	];
});
