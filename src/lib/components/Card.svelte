<section>
	<slot />
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		width: 100%;
		justify-content: center;
		max-width: 480px;
		padding: 1rem;
		border-radius: 8px;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
		background-color: var(--bg-alt);
	}
</style>
