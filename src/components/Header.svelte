<header>
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/events">Events</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		z-index: 999;
	}

	nav {
		position: fixed;
	}

	ul {
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		list-style: none;
		box-shadow: var(--shadow);
		border-radius: 0 0 var(--border-radius) var(--border-radius);
		background: var(--background-alt);
		overflow: hidden;
	}

	li {
		position: relative;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1rem;
	}

	a:hover {
		backdrop-filter: brightness(130%);
	}
</style>
