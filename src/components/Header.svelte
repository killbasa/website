<script lang="ts">
	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/events', label: 'Events' },
		{ href: '/projects', label: 'Projects' }
	];
</script>

<header class="flex justify-center z-999">
	<nav class="fixed">
		<ul class="flex h-12 list-none shadow-md rounded-b-md bg-alt overflow-hidden">
			{#each links as { href, label }}
				<li>
					<a {href} class="flex items-center h-full px-4">{label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	a:hover {
		backdrop-filter: brightness(130%);
	}
</style>
