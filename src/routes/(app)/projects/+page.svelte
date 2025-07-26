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

	<h2>Organization</h2>
	<ul>
		<ProjectItem
			title={data.organization.srsdvr.name}
			href={data.organization.srsdvr.url}
			image={data.organization.srsdvr.owner.avatar_url}
			external
		>
			{data.organization.srsdvr.description}
		</ProjectItem>
	</ul>

	<h2>Personal</h2>
	<ul>
		<ProjectItem
			title={data.personal.hive.name}
			href={data.personal.hive.url}
			image={data.personal.hive.owner.avatar_url}
			external
		>
			{data.personal.hive.description}
		</ProjectItem>
		<ProjectItem
			title={data.personal.vt.name}
			href={data.personal.vt.url}
			image={data.personal.vt.owner.avatar_url}
			external
		>
			{data.personal.vt.description}
		</ProjectItem>
		<ProjectItem
			title={data.personal.amaneko.name}
			href={data.personal.amaneko.url}
			image={data.personal.amaneko.owner.avatar_url}
			external
		>
			{data.personal.amaneko.description}
		</ProjectItem>
		<ProjectItem
			title={data.personal.kbot.name}
			href={data.personal.kbot.url}
			image={data.personal.kbot.owner.avatar_url}
			external
		>
			{data.personal.kbot.description}
		</ProjectItem>
	</ul>

	<h2>Gifts</h2>
	<ul>
		<ProjectItem
			title={data.gifts.triggerphish.name}
			href={data.gifts.triggerphish.url}
			image={data.gifts.triggerphish.owner.avatar_url}
			external
		>
			{data.gifts.triggerphish.description}
		</ProjectItem>
		<ProjectItem
			title={data.gifts.monomonet.name}
			href={data.gifts.monomonet.url}
			image={data.gifts.monomonet.owner.avatar_url}
			external
		>
			{data.gifts.monomonet.description}
		</ProjectItem>
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 960px;
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
