<script lang="ts">
	import ExternalLink from './svg/ExternalLink.svelte';
	import GitHub from './svg/GitHub.svelte';
	import type { Snippet } from 'svelte';

	let {
		title,
		href,
		projectHref,
		image,
		children
	}: {
		title: string;
		href?: string;
		projectHref: string;
		image: string;
		children: Snippet;
	} = $props();
</script>

<li>
	<div>
		<header>
			<div>
				<img src={image} alt={title} height="32" width="32" />
				<h3>{title}</h3>
			</div>
			<div>
				{#if href}
					<a class="anchor" {href} target="_blank">
						<ExternalLink />
					</a>
				{/if}
				<a class="anchor" href={projectHref} target="_blank">
					<GitHub />
				</a>
			</div>
		</header>
		<hr />
		<p>
			{@render children()}
		</p>
	</div>
</li>

<style>
	li {
		position: relative;
		top: 0px;
		background: var(--background-alt);
		border-radius: 8px;
		overflow: hidden;
	}

	li > div {
		padding: 1.2rem;
	}

	a {
		display: flex;
		flex-direction: column;
	}

	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
	}

	header > div {
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
