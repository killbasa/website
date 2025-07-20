<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		href,
		image,
		external = false,
		children
	}: {
		title: string;
		href: string;
		image: string;
		external?: boolean;
		children: Snippet;
	} = $props();
</script>

<li>
	<a {href} target={external ? '_blank' : undefined}>
		<div>
			<header>
				<img src={image} alt={title} height="32" width="32" />
				<h2>{title}</h2>
			</header>
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
		padding: 1.2rem;
	}

	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
	}

	img {
		border-radius: 100%;
		max-width: 32px;
		max-height: 32px;
		margin-bottom: 0.2rem;
	}

	hr {
		border-bottom: 1px solid var(--color-text);
		margin: 0.5rem 0 1rem 0;
	}
</style>
