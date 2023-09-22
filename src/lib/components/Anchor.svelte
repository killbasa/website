<script lang="ts">
	export let title: string | undefined = undefined;
	export let href: string;

	export let external = false;
</script>

<a
	{href}
	rel={external ? 'noopener noreferrer' : undefined}
	target={external ? '_blank' : undefined}
	{...$$restProps}
>
	<slot />
	{#if title}
		{title}
	{/if}
</a>

<style>
	a {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}
</style>
