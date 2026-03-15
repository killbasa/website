<script lang="ts">
	import { getEvents } from './events.remote';

	const events = await getEvents();
</script>

<svelte:head>
	<title>Events | KB</title>
</svelte:head>

<section class="flex flex-col gap-4 mx-auto max-w-4xl py-4 p-2 lg:p-8">
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

				<div class="w-full max-w-sm mx-auto">
					{#if event.image}
						<img src={event.image} alt={event.name} />
					{:else}
						<div
							class="bg-gray-600 w-full h-full aspect-square flex items-center justify-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-1/4 h-1/4 text-gray-400"
							>
								<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
								<line x1="12" y1="17" x2="12.01" y2="17" />
							</svg>
						</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>
