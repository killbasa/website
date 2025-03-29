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
		overflow: hidden;
	}

	main {
		display: flex;
		flex-direction: column;
		margin-top: 7rem;
		margin-bottom: 3rem;
		margin-left: 2rem;
		margin-right: 2rem;
	}
</style>
