<script lang="ts">
	import { getProjects } from './projects.remote';
	import ProjectItem from '$components/ProjectItem.svelte';

	const projectMap = await getProjects();

	const uniqueAvatars = new Set<string>();

	for (const projects of Object.values(projectMap.entries)) {
		for (const project of Object.values(projects)) {
			uniqueAvatars.add(project.owner.avatar_url);
		}
	}
</script>

<svelte:head>
	<title>Projects | KB</title>
</svelte:head>

<section class="flex flex-col gap-4 mx-auto max-w-4xl">
	{#each Object.entries(projectMap.entries) as [category, projects]}
		<h2>{category}</h2>
		<ul class="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 md:grid-cols-2">
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
