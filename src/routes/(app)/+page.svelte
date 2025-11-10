<script lang="ts">
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
			<li class="flex items-center gap-1">
				<Email height={20} width={20} />
				<span>
					Email:
					<a class="anchor" href="mailto:contact@killbasa.com" target="_blank"
						>contact@killbasa.com</a
					>
				</span>
			</li>
			<li class="flex items-center gap-1">
				<Discord height={20} width={20} />
				<span>Discord: killbasa</span>
			</li>
			<li class="flex items-center gap-1">
				<Twitter height={20} width={20} />
				<span
					>Twitter: <a class="anchor" href="https://twitter.com/Killbasa1" target="_blank"
						>@killbasa1</a
					></span
				>
			</li>
			<li class="flex items-center gap-1">
				<GitHub height={20} width={20} />
				<span
					>GitHub: <a class="anchor" href="https://github.com/killbasa" target="_blank"
						>killbasa</a
					></span
				>
			</li>
		</ul>
	</Card>
</section>
