<script lang="ts">
	import { onMount } from 'svelte';
	import { SvelteDate } from 'svelte/reactivity';
	import { page } from '$app/state';

	const bgColor = page.url.searchParams.get('bg') ?? 'transparent';
	const textColor = page.url.searchParams.get('text') ?? 'black';

	const time = new SvelteDate();

	const hour = $derived(time.getHours());
	const minute = $derived(time.getMinutes());
	const second = $derived(time.getSeconds());
	const centisecond = $derived(Math.floor(time.getMilliseconds() / 10));
	const isoDatetime = $derived(time.toISOString());

	onMount(() => {
		const interval = setInterval(() => {
			time.setTime(Date.now());
		}, 10);

		return () => {
			clearInterval(interval);
		};
	});

	const fmtDigit = (t: number, pos: number): string => t.toString().padStart(2, '0')[pos];
</script>

<section
	class="flex items-center justify-center min-h-dvh"
	style="background-color: {bgColor}; color: {textColor}"
>
	<time datetime={isoDatetime}>
		<span>{fmtDigit(hour, 0)}</span>
		<span>{fmtDigit(hour, 1)}</span>
		<span>:</span>
		<span>{fmtDigit(minute, 0)}</span>
		<span>{fmtDigit(minute, 1)}</span>
		<span>:</span>
		<span>{fmtDigit(second, 0)}</span>
		<span>{fmtDigit(second, 1)}</span>
		<span>:</span>
		<span>{fmtDigit(centisecond, 0)}</span>
		<span>{fmtDigit(centisecond, 1)}</span>
	</time>
</section>

<style lang="postcss">
	@reference '$src/app.css';

	time {
		display: flex;
		gap: 0;
		font-size: clamp(2.25rem, 16vw, 10rem);
		line-height: 1;
		font-variant-numeric: tabular-nums;

		span {
			display: inline-block;

			&:nth-child(3n) {
				padding-inline: 0.25rem;
			}
		}
	}
</style>
