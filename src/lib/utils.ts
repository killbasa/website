export type GithubProject = {
	name: string;
	description: string;
	url: string;
	owner: {
		avatar_url: string;
	};
};

// For hot-reloads
const cache = new Map<string, GithubProject>();

export const fetchProject = async (repo: string): Promise<GithubProject> => {
	if (cache.has(repo)) {
		return cache.get(repo)!;
	}

	const res = await fetch(`https://api.github.com/repos/${repo}`, {
		headers: {
			Accept: 'application/vnd.github+json',
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});

	const resetTimestamp = Number.parseInt(res.headers.get('X-RateLimit-Reset')!);
	const resetDate = new Date(resetTimestamp * 1000);
	const secondsUntilReset = Math.ceil((resetDate.getTime() - Date.now()) / 1000);

	console.log({
		count: res.headers.get('X-RateLimit-Limit'),
		remaining: res.headers.get('X-RateLimit-Remaining'),
		reset: `${secondsUntilReset}s`
	});

	if (!res.ok) {
		console.error(`Error fetching repository data: ${repo} ${res.status} ${res.statusText}`);
		throw new Error('Failed to fetch repository data');
	}

	const data = await res.json();
	const project: GithubProject = {
		name: data.name,
		description: data.description,
		url: data.html_url,
		owner: {
			avatar_url: data.owner.avatar_url + '&s=32'
		}
	};

	if (!cache.has(repo)) {
		cache.set(repo, project);
	}

	if (!data.name || !data.description || !data.html_url) {
		console.error(project);
		throw new Error('Invalid repository data');
	}

	return project;
};
