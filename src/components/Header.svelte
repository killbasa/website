<script lang="ts">
	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/events', label: 'Events' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/oshi', label: 'Oshi' }
	];
</script>

<header class="flex justify-center">
	<nav class="">
		<ul class="flex h-12">
			{#each links as { href, label }}
				<li>
					<a {href} class="flex items-center h-full px-4 hover:underline">{label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
