<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		children
	}: {
		title?: string;
		children: Snippet;
	} = $props();
</script>

<div class="flex flex-col gap-2 p-4 w-fit rounded-lg shadow-md bg-alt text-start">
	{#if title}
		<h2 class="text-lg">{title}</h2>
	{/if}

	<div class="flex flex-wrap gap-2 justify-center">
		{@render children()}
	</div>
</div>
