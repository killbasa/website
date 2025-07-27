<script lang="ts">
	import Anchor from '$components/Anchor.svelte';
	import Card from '$components/Card.svelte';
	import Discord from '$components/svg/Discord.svelte';
	import Email from '$components/svg/Email.svelte';
	import GitHub from '$components/svg/GitHub.svelte';
	import Terminal from '$components/svg/Terminal.svelte';
	import Twitter from '$components/svg/Twitter.svelte';
	import Twitch from '$components/svg/Twitch.svelte';
</script>

<svelte:head>
	<title>KB</title>
</svelte:head>

<section>
	<header>
		<img alt="KB's avatar" src="/images/ProfilePicture.png" height="128" width="128" />
		<h1>KB</h1>
		<h2>Software Engineer</h2>
	</header>
	<div>
		<p>
			Hello! I'm just a little guy that writes code, volunteers at conventions, and attempts
			to DJ.
		</p>
	</div>
	<Card>
		<ul>
			<li>
				<Anchor title="Email" class="button" href="mailto:contact@killbasa.com">
					<Email />
				</Anchor>
			</li>
			<li>
				<Anchor
					title="Discord"
					class="button"
					href="https://discordapp.com/users/137657554200166401"
					external
				>
					<Discord />
				</Anchor>
			</li>
			<li>
				<Anchor
					title="Twitter"
					class="button"
					href="https://twitter.com/Killbasa1"
					external
				>
					<Twitter />
				</Anchor>
			</li>
			<li>
				<Anchor
					title="Twitch"
					class="button"
					href="https://www.twitch.tv/killbasa102"
					external
				>
					<Twitch />
				</Anchor>
			</li>
			<li>
				<Anchor title="GitHub" class="button" href="https://github.com/killbasa" external>
					<GitHub />
				</Anchor>
			</li>
			<li>
				<Anchor
					title="Dotfiles"
					class="button"
					href="https://github.com/killbasa/dotfiles"
					external
				>
					<Terminal />
				</Anchor>
			</li>
		</ul>
	</Card>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		max-width: 32rem;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
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

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style: none;
	}
</style>
