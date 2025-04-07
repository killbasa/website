<script lang="ts">
	import ProjectItem from '$components/ProjectItem.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Projects | Shane Brown</title>
</svelte:head>

<section>
	<h1>Projects</h1>

	<ul>
		<ProjectItem
			title={data.srsdvr.name}
			href={data.srsdvr.url}
			image={data.srsdvr.owner.avatar_url}
			external
		>
			{data.srsdvr.description}
		</ProjectItem>
		<ProjectItem
			title={data.hive.name}
			href={data.hive.url}
			image={data.hive.owner.avatar_url}
			external
		>
			{data.hive.description}
		</ProjectItem>
		<ProjectItem
			title={data.amaneko.name}
			href={data.amaneko.url}
			image={data.amaneko.owner.avatar_url}
			external
		>
			{data.amaneko.description}
		</ProjectItem>
		<ProjectItem
			title={data.kbot.name}
			href={data.kbot.url}
			image={data.kbot.owner.avatar_url}
			external
		>
			{data.kbot.description}
		</ProjectItem>
		<ProjectItem
			title={data.vt.name}
			href={data.vt.url}
			image={data.vt.owner.avatar_url}
			external
		>
			{data.vt.description}
		</ProjectItem>
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 960px;
		overflow-y: scroll;
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
