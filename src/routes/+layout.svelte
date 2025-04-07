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
		height: 100vh;
	}

	main {
		display: flex;
		flex-direction: column;
		padding-top: 7rem;
		padding-bottom: 3rem;
		padding-left: 2rem;
		padding-right: 2rem;
	}
</style>
