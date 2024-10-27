<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
		padding: 1rem;
		width: fit-content;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
		background-color: var(--background-alt);
	}
</style>
