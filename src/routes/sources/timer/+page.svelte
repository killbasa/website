<script lang="ts">
	import { onMount } from 'svelte';
	import { SvelteDate } from 'svelte/reactivity';

	const time = new SvelteDate();

	const hour = $derived(time.getHours());
	const minute = $derived(time.getMinutes());
	const second = $derived(time.getSeconds());
	const millisecond = $derived(time.getMilliseconds());

	onMount(() => {
		setInterval(() => {
			time.setTime(Date.now());
		}, 10);
	});

	const fmt = (t: number, pos: number): string => t.toString().padStart(2, '0')[pos];
</script>

<section class="flex items-center justify-center h-screen">
	<time>
		<span>{fmt(hour, 0)}</span>
		<span>{fmt(hour, 1)}</span>
		<span>:</span>
		<span>{fmt(minute, 0)}</span>
		<span>{fmt(minute, 1)}</span>
		<span>:</span>
		<span>{fmt(second, 0)}</span>
		<span>{fmt(second, 1)}</span>
		<span>:</span>
		<span>{fmt(millisecond, 0)}</span>
		<span>{fmt(millisecond, 1)}</span>
	</time>
</section>

<style lang="postcss">
	@reference "../../../app.css";

	time {
		display: flex;
		gap: -0.25rem;
		font-size: 10rem;
		font-variant-numeric: tabular-nums;

		span {
			display: inline-block;
		}
	}
</style>
