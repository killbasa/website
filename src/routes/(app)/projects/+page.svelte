<script lang="ts">
	import ProjectItem from '$components/ProjectItem.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Projects</title>
	<link rel="preconnect" href="https://github.com" />
</svelte:head>

<section>
	<h1>Projects</h1>

	{#each Object.entries(data.projects) as [category, projects]}
		<h2>{category}</h2>
		<ul>
			{#each Object.values(projects) as project}
				<ProjectItem
					title={project.name}
					href={project.url}
					image={project.owner.avatar_url}
					external
				>
					{project.description}
				</ProjectItem>
			{/each}
		</ul>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 960px;
		width: 100%;
		margin: 0 auto;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		list-style: none;
		gap: 1rem;
	}

	@media only screen and (max-width: 960px) {
		ul {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media only screen and (max-width: 720px) {
		ul {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
	}
</style>
