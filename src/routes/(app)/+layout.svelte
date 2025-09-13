<script lang="ts">
	import Header from '$components/Header.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<div>
	<Header />

	<main>
		{@render children()}
	</main>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--background);
		color: var(--color-text);
	}

	main {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 2rem;
		margin-top: 3rem;
	}
</style>
