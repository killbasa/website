<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	const duration = page.url.searchParams.get('s') ?? '0';
	const bgColor = page.url.searchParams.get('bg') ?? 'transparent';
	const textColor = page.url.searchParams.get('text') ?? 'black';

	const parsed = Number.parseInt(duration, 10);
	const seconds = Number.isNaN(parsed) || parsed < 0 ? 0 : parsed;
	const initialMs = (seconds + 1) * 1000;

	let remaining = $state<number>(initialMs);

	const minute = $derived(Math.floor(remaining / 60_000));
	const second = $derived(Math.floor((remaining % 60_000) / 1_000));

	onMount(() => {
		if (seconds === 0) {
			remaining = 0;
			return;
		}

		const start = Date.now();
		let frame: number;

		const run = () => {
			remaining = Math.max(0, initialMs - (Date.now() - start));
			if (remaining > 0) {
				frame = requestAnimationFrame(run);
			}
		};

		frame = requestAnimationFrame(run);

		return () => {
			cancelAnimationFrame(frame);
		};
	});

	const fmtDigit = (t: number, pos: number): string =>
		t.toString().padStart(2, '0')[pos];
</script>

<section
	class="flex items-center justify-center min-h-dvh"
	style="background-color: {bgColor}; color: {textColor}"
>
	<time>
		<span>{fmtDigit(minute, 0)}</span>
		<span>{fmtDigit(minute, 1)}</span>
		<span>:</span>
		<span>{fmtDigit(second, 0)}</span>
		<span>{fmtDigit(second, 1)}</span>
	</time>
</section>

<style lang="postcss">
	@reference "$src/app.css";

	time {
		display: flex;
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
