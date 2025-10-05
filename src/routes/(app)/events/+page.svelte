<script lang="ts">
	import Twitter from '$components/svg/Twitter.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<section>
	<h1>Events</h1>

	{#each data.events as event}
		<div class="event-section">
			<div>
				<h2>{event.name}</h2>
				<span>{event.date} @ {event.location}</span>
			</div>

			<p>{event.description}</p>

			<div class="event-image">
				<img src={event.image} alt={event.name} />

				<a class="button" href={event.url} target="_blank">
					<Twitter /> Announcement
				</a>
			</div>
		</div>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 960px;
		width: 100%;
		margin: 0 auto;
	}

	.event-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		div {
			display: flex;
			flex-direction: column;
		}

		h2 {
			font-weight: bold;
		}

		a {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			width: fit-content;
		}

		.event-image {
			gap: 0.5rem;
			max-width: 500px;
		}
	}
</style>
