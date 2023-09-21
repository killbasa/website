<script lang="ts">
	import ProfilePicture from '$lib/assets/ProfilePicture.png';
	import Anchor from '$components/Anchor.svelte';
	import Card from '$components/Card.svelte';
	import Discord from '$components/svg/Discord.svelte';
	import Email from '$components/svg/Email.svelte';
	import GitHub from '$components/svg/GitHub.svelte';
</script>

<svelte:head>
	<title>Shane Brown</title>
</svelte:head>

<div>
	<header>
		<img alt="Shane's avatar" src={ProfilePicture} />
		<h1>Shane Brown</h1>
		<p>Full-stack Developer</p>
	</header>
	<Card>
		<Anchor title="GitHub" href="https://github.com/killbasa" external>
			<GitHub />
		</Anchor>
		<Anchor title="Discord" href="https://discordapp.com/users/137657554200166401" external>
			<Discord />
		</Anchor>
		<Anchor title="Email" href="mailto:contact@shaneb.xyz" external>
			<Email />
		</Anchor>
	</Card>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		height: 100%;
		margin-top: -8em;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		border-radius: 100%;
		max-width: 128px;
		max-height: 128px;
		margin-bottom: 0.5rem;
	}

	h1 {
		font-weight: 800;
		font-size: 20pt;
	}
</style>
