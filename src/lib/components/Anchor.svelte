<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title = undefined,
		href,
		external = false,
		children,
		...rest
	}: {
		title?: string;
		href: string;
		external?: boolean;
		children?: Snippet;
		[key: string]: unknown;
	} = $props();
</script>

<a
	{href}
	rel={external ? 'noopener noreferrer' : undefined}
	target={external ? '_blank' : undefined}
	{...rest}
>
	{@render children?.()}
	{#if title}
		{title}
	{/if}
</a>

<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		width: 256px;
	}
</style>
