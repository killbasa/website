<script lang="ts">
	import ProfilePicture from '$lib/assets/ProfilePicture.png';
	import Anchor from '$components/Anchor.svelte';
	import Card from '$components/Card.svelte';
	import Discord from '$components/svg/Discord.svelte';
	import Email from '$components/svg/Email.svelte';
	import GitHub from '$components/svg/GitHub.svelte';
	import Terminal from '$components/svg/Terminal.svelte';
</script>

<svelte:head>
	<title>Shane Brown</title>
</svelte:head>

<section>
	<header>
		<img alt="Shane's avatar" src={ProfilePicture} />
		<h1>Shane Brown</h1>
		<p>Full-stack Developer</p>
	</header>
	<Card>
		<Anchor title="GitHub" class="button" href="https://github.com/killbasa" external>
			<GitHub />
		</Anchor>
		<Anchor
			title="Discord"
			class="button"
			href="https://discordapp.com/users/137657554200166401"
			external
		>
			<Discord />
		</Anchor>
		<Anchor title="Email" class="button" href="mailto:contact@shaneb.xyz">
			<Email />
		</Anchor>
		<Anchor
			title="Dotfiles"
			class="button"
			href="https://github.com/killbasa/dotfiles"
			external
		>
			<Terminal />
		</Anchor>
	</Card>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		height: 70vh;
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
</style>
