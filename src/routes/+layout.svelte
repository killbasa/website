<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/global.css';
</script>

<div>
	<main>
		<slot />
	</main>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		margin: 4rem;
	}

	main {
		display: flex;
		flex-direction: column;
		margin-top: 3rem;
		margin-bottom: 3rem;
		margin-left: 2rem;
		margin-right: 2rem;
	}
</style>
