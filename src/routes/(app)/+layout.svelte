<script lang="ts">
	import Header from '$components/Header.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<div class="flex flex-col min-h-screen bg-primary text-color-text">
	<Header />

	<main class="flex flex-col flex-1 p-8 mt-12">
		{@render children()}
	</main>
</div>
