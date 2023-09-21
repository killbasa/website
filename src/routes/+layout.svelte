<script lang="ts">
	import '$lib/styles/reset.css';
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
		margin-right: auto;
		margin-left: auto;
	}
</style>
