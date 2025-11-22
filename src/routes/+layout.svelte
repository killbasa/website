<script lang="ts">
	import '../app.css';

	import { getEvents } from './(app)/events/events.remote';
	import { getProjects } from './(app)/projects/projects.remote';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const events = await getEvents();
	const projects = await getProjects();
</script>

<svelte:head>
	<link rel="preload" as="image" href="/images/ProfilePicture.png" />

	{#each events as { image }}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each projects.images as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

{@render children()}
