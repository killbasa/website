<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>KB</title>
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

{@render children()}
