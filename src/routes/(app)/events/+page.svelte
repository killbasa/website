<script lang="ts">
	import { getEvents } from './events.remote';

	const events = await getEvents();
</script>

<svelte:head>
	<title>Events | KB</title>

	{#each events as event}
		<link rel="preload" as="image" href={event.image} />
	{/each}
</svelte:head>

<section class="flex flex-col gap-4 mx-auto max-w-4xl">
	<ul class="grid grid-cols-1 gap-4 list-none lg:grid-cols-2">
		{#each events as event}
			<li class="flex flex-col gap-2">
				<div class="flex flex-col">
					<h2 class="font-bold underline">{event.name} - {event.role.title}</h2>
					<span>{event.date} @ {event.location}</span>
				</div>

				<p>{@html event.description}</p>

				<img src={event.image} alt={event.name} class="max-w-sm mx-auto" />
			</li>
		{/each}
	</ul>
</section>
