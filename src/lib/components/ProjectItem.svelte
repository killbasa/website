<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		href,
		external = false,
		children
	}: {
		title: string;
		href: string;
		external?: boolean;
		children: Snippet;
	} = $props();
</script>

<li>
	<a
		{href}
		rel={external ? 'noopener noreferrer' : undefined}
		target={external ? '_blank' : undefined}
	>
		<div>
			<h3>{title}</h3>
			<hr />
			<p>
				{@render children()}
			</p>
		</div>
	</a>
</li>

<style>
	li {
		position: relative;
		top: 0px;
		background: var(--background-alt);
		border-radius: var(--border-radius);
		overflow: hidden;
		transition: all 0.3s ease-out;
	}

	li:hover {
		top: -6px;
		box-shadow: var(--shadow-lg);
	}

	a {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
	}

	hr {
		border-bottom: 1px solid var(--color-text);
		margin: 0.5rem 0 1rem 0;
	}
</style>
