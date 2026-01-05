import { prerender } from '$app/server';

export const getEvents = prerender(() => {
	return [
		{
			name: 'Virtual Express',
			description: '',
			date: 'December 19th-21st, 2025',
			location: 'Orlando, FL, USA',
			image: 'https://imagedelivery.net/R3CuIrz6zPUOHovUJa7jXw/90cd55ae-b836-431e-33a7-43d8a95b0900/event',
			role: {
				title: 'prodYakkai Contractor'
			},
			links: [
				{
					label: 'Announcement',
					url: 'https://x.com/VT_Express/status/1962554898764951680'
				}
			]
		},
		{
			name: 'OffKai Fest: Twilight Reverie',
			description:
				'One-night jazz lounge themed VTuber event during <a class="anchor" target="_blank" href="https://www.twitchcon.com">TwitchCon</a>.',
			date: 'October 18th, 2025',
			location: 'San Diego, CA, USA',
			image: 'https://imagedelivery.net/R3CuIrz6zPUOHovUJa7jXw/ea343f8c-5712-42fa-d5ae-d8dd3ec29f00/event',
			role: {
				title: 'Guest Presence'
			},
			links: [
				{
					label: 'Announcement',
					url: 'https://x.com/OffKaiExpo/status/1957473102671048905'
				},
				{ label: 'Recap Video', url: 'https://www.youtube.com/watch?v=OIjxveblyVE' }
			]
		},
		{
			name: 'Wallcon 2025',
			description:
				'Live outdoor VTuber performance in Birmingham, UK during <a class="anchor" target="_blank" href="https://www.vexpo.uk">VeXpo</a>.',
			date: 'September 4th, 2025',
			location: 'Birmingham, UK',
			image: 'https://imagedelivery.net/R3CuIrz6zPUOHovUJa7jXw/f4125651-f08e-4691-b1ec-cee130d59300/event',
			role: {
				title: 'Event Producer'
			},
			links: [
				{
					label: 'Announcement',
					url: 'https://x.com/wsfrontieres/status/1961142819210351004'
				}
			]
		}
	];
});
