<script lang="ts">
	import ExternalLink from './svg/ExternalLink.svelte';
	import type { Snippet } from 'svelte';

	let {
		title,
		href,
		children
	}: {
		title: string;
		href: string;
		children: Snippet;
	} = $props();
</script>

<li class="relative top-0 bg-alt rounded-lg overflow-hidden">
	<div class="p-5">
		<header class="flex flex-row justify-between items-start gap-2">
			<div class="flex flex-row items-center gap-2">
				<h3>{title}</h3>
			</div>
			<div class="flex flex-row items-center gap-2">
				<a class="anchor" {href} target="_blank">
					<ExternalLink />
				</a>
			</div>
		</header>
		<hr class="border-b mb-4 mt-2" />
		<p>
			{@render children()}
		</p>
	</div>
</li>
