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

<li class="relative top-0 bg-alt rounded-lg overflow-hidden">
	<div class="p-5">
		<header class="flex flex-row justify-between items-start gap-2">
			<div class="flex flex-row items-center gap-2">
				<img
					class="rounded-full max-w-8 max-h-8 mb-1"
					src={image}
					alt={title}
					height="32"
					width="32"
				/>
				<h3>{title}</h3>
			</div>
			<div class="flex flex-row items-center gap-2">
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
		<hr class="border-b mb-4 mt-2" />
		<p>
			{@render children()}
		</p>
	</div>
</li>
