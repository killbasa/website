<script>
	import ProjectItem from '$components/ProjectItem.svelte';
</script>

<svelte:head>
	<title>Projects | Shane Brown</title>
</svelte:head>

<section>
	<h1>Projects</h1>

	<h2>Active</h2>
	<ul>
		<ProjectItem title="Hive" href="https://github.com/killbasa/hive" external>
			YouTube channel archive manager
		</ProjectItem>
		<ProjectItem title="Amaneko" href="https://github.com/killbasa/Amaneko" external>
			Discord bot for VTuber livestream chat relays and notifications
		</ProjectItem>
		<ProjectItem title="CLI" href="https://github.com/killbasa/cli" external>
			A personal CLI to make life a little easier
		</ProjectItem>
		<ProjectItem title="vt" href="https://github.com/killbasa/vt" external>
			Check upcoming VTuber streams in your terminal
		</ProjectItem>
		<ProjectItem
			title="Redis utilities"
			href="https://github.com/killbasa/redis-utils"
			external
		>
			An ioredis wrapper to improve development experience
		</ProjectItem>
	</ul>

	<h2>Planning</h2>
	<ul>
		<ProjectItem title="Tagg" href="https://github.com/CRSDPoyoyo/tagg" external>
			Create and share timestamps on YouTube livestreams and VoDs
		</ProjectItem>
	</ul>

	<h2>Maintenance</h2>
	<ul>
		<ProjectItem title="KBot" href="https://github.com/KBot-discord/KBot" external>
			A multi-purpose Discord bot using Sapphire and discord.js
		</ProjectItem>
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 960px;
		margin: 3rem auto 1.5rem;
	}

	h2 {
		margin-top: 1rem;
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
