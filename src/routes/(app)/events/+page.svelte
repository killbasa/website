<script lang="ts">
	import { getEvents } from './events.remote';

	const events = await getEvents();
</script>

<svelte:head>
	<title>Events | KB</title>
</svelte:head>

<section class="flex flex-col gap-4 mx-auto max-w-4xl">
	<ul class="flex flex-col gap-8 list-none">
		{#each events as event}
			<li class="flex flex-col gap-3">
				<div class="flex flex-col">
					<h2 class="font-bold underline">{event.name} - {event.role.title}</h2>
					<h3>{event.date} @ {event.location}</h3>
				</div>

				{#if event.description}
					<p>{@html event.description}</p>
				{/if}

				<div class="flex gap-2">
					{#if event.links.length > 0}
						<span>Links:</span>
						<ul class="list-none gap-2 flex">
							{#each event.links as link}
								<li>
									<a
										href={link.url}
										class="anchor"
										target="_blank"
										rel="noopener noreferrer">{link.label}</a
									>
								</li>
							{/each}
						</ul>
					{/if}
				</div>

				<img src={event.image} alt={event.name} class="w-full max-w-sm mx-auto" />
			</li>
		{/each}
	</ul>
</section>
