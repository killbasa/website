import { prerender } from '$app/server';

export const getEvents = prerender(() => {
	return [
		{
			name: 'Wallcon 2025',
			description: 'Live outdoor VTuber performance in Birmingham, UK during VeXpo weekend.',
			date: 'September 4th, 2025',
			location: 'Birmingham, UK',
			url: 'https://x.com/wsfrontieres/status/1961142819210351004',
			image: 'https://imagedelivery.net/R3CuIrz6zPUOHovUJa7jXw/c4717324-6cf8-4d49-19b5-9be2ca587800/public'
		}
	];
});
