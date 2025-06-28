<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/global.css';

	import Header from '$components/Header.svelte';
</script>

<div>
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		padding: 0 2rem;
	}
</style>
