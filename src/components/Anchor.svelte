<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		href,
		external = false,
		children
	}: {
		title?: string;
		href: string;
		external?: boolean;
		children?: Snippet;
	} = $props();
</script>

<a
	class="flex items-center justify-center gap-2 w-64 button"
	{href}
	rel={external ? 'noopener noreferrer' : undefined}
	target={external ? '_blank' : undefined}
>
	{@render children?.()}
	{#if title}
		{title}
	{/if}
</a>
