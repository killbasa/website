<script lang="ts">
	import Anchor from '$components/Anchor.svelte';
	import Card from '$components/Card.svelte';
	import Discord from '$components/svg/Discord.svelte';
	import Email from '$components/svg/Email.svelte';
	import GitHub from '$components/svg/GitHub.svelte';
	import Twitter from '$components/svg/Twitter.svelte';
</script>

<svelte:head>
	<title>KB</title>
</svelte:head>

<section class="flex flex-col items-center gap-4 max-w-md m-auto text-center">
	<header class="flex flex-col items-center">
		<img
			alt="KB's avatar"
			src="/images/ProfilePicture.png"
			height="128"
			width="128"
			class="rounded-full"
		/>
		<h1>Shane / KB</h1>
	</header>

	<div>
		<p>Hello! I'm Shane, a Software Engineer that occasionally help run VTuber events.</p>
	</div>

	<Card>
		<ul class="flex flex-col gap-4 list-none">
			<li>
				<Anchor title="Email" href="mailto:contact@killbasa.com">
					<Email height={20} width={20} />
				</Anchor>
			</li>
			<li>
				<Anchor
					title="Discord"
					href="https://discordapp.com/users/137657554200166401"
					external
				>
					<Discord height={20} width={20} />
				</Anchor>
			</li>
			<li>
				<Anchor title="Twitter" href="https://twitter.com/Killbasa1" external>
					<Twitter height={20} width={20} />
				</Anchor>
			</li>
			<li>
				<Anchor title="GitHub" href="https://github.com/killbasa" external>
					<GitHub height={20} width={20} />
				</Anchor>
			</li>
		</ul>
	</Card>
</section>
