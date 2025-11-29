<script lang="ts">
	import { getEvents } from './events/events.remote';
	import { getProjects } from './projects/projects.remote';
	import Header from '$components/Header.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const events = await getEvents();
	const projects = await getProjects();
</script>

<svelte:head>
	<link rel="preload" fetchpriority="high" as="image" href="/images/ProfilePicture.webp" />

	{#each events as { image }}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each projects.images as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

<div class="flex flex-col min-h-screen bg-primary text-color-text">
	<Header />

	<main class="flex flex-col flex-1 p-8 mt-12">
		{@render children()}
	</main>
</div>
