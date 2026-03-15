<script lang="ts">
	import { getProjects } from './projects.remote';
	import GithubProjectItem from '$components/GithubProjectItem.svelte';
	import WebsiteProjectItem from '$components/WebsiteProjectItem.svelte';

	const projectMap = await getProjects();
</script>

<svelte:head>
	<title>Projects | KB</title>
</svelte:head>

<section class="flex flex-col gap-4 mx-auto max-w-4xl py-4 p-2 lg:p-8">
	{#each Object.entries(projectMap.entries) as [category, projects]}
		<h2>{category}</h2>
		<ul class="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 md:grid-cols-2">
			{#each Object.values(projects) as project}
				{#if project.type === 'github'}
					<GithubProjectItem
						title={project.name}
						href={project.homepage}
						projectHref={project.url}
						image={project.images.owner_icon}
					>
						{project.description}
					</GithubProjectItem>
				{:else}
					<WebsiteProjectItem title={project.name} href={project.url}>
						{project.description}
					</WebsiteProjectItem>
				{/if}
			{/each}
		</ul>
	{/each}
</section>
