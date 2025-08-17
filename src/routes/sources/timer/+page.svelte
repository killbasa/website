<script lang="ts">
	import { onMount } from 'svelte';
	import { SvelteDate } from 'svelte/reactivity';

	const time = new SvelteDate();

	let hour = $derived(time.getHours());
	let minute = $derived(time.getMinutes());
	let second = $derived(time.getSeconds());

	onMount(() => {
		setInterval(() => {
			time.setTime(Date.now());
		}, 1000);
	});

	const fmt = (t: number, pos: number) => t.toString().padStart(2, '0')[pos];
</script>

<section>
	<time>
		<span class="digit">{fmt(hour, 0)}</span>
		<span class="digit">{fmt(hour, 1)}</span>
		<span class="separator">:</span>
		<span class="digit">{fmt(minute, 0)}</span>
		<span class="digit">{fmt(minute, 1)}</span>
		<span class="separator">:</span>
		<span class="digit">{fmt(second, 0)}</span>
		<span class="digit">{fmt(second, 1)}</span>
	</time>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	time {
		font-size: 164px;
		line-height: 114px;
		font-variant-numeric: tabular-nums;
	}

	.digit {
		margin-left: var(--digit-width);
	}

	.separator {
		margin-left: var(--digit-width);
	}
</style>
