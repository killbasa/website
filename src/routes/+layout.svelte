<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/global.css';
</script>

<div>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		height: 100vh;
		margin-left: 2rem;
		margin-right: 2rem;
	}
</style>
