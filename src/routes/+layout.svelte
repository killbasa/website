<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/global.css';

	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

{@render children()}
