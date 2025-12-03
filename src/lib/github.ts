import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

export type GithubProject = {
	name: string;
	description: string;
	url: string;
	homepage?: string;
	owner: {
		avatar_url: string;
	};
};

// For hot-reloads
const cache = {
	dir: resolve('node_modules/.cache/postfolio'),
	fmtKey: (repo: string) => repo.replace('/', '_') + '.json',
	async get(key: string): Promise<GithubProject | null> {
		const path = join(this.dir, this.fmtKey(key));
		if (!existsSync(path)) return null;

		const file = await readFile(path, 'utf-8');
		return JSON.parse(file);
	},
	async set(key: string, value: GithubProject) {
		await mkdir(this.dir, { recursive: true });
		await writeFile(join(this.dir, this.fmtKey(key)), JSON.stringify(value), 'utf-8');
	},
	has(key: string): boolean {
		const path = join(this.dir, this.fmtKey(key));
		return existsSync(path);
	}
};

export const fetchProject = async (
	repo: string,
	options: {
		fetch: typeof fetch;
	}
): Promise<GithubProject> => {
	if (!process.env.CI) {
		const cached = await cache.get(repo);
		if (cached) {
			return cached;
		}
	}

	const res = await options.fetch(`https://api.github.com/repos/${repo}`, {
		headers: {
			Accept: 'application/vnd.github+json',
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});

	const resetTimestamp = Number.parseInt(res.headers.get('X-RateLimit-Reset')!);
	const resetDate = new Date(resetTimestamp * 1000);
	const secondsUntilReset = Math.ceil((resetDate.getTime() - Date.now()) / 1000);

	console.log('ratelimit:', {
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
		homepage: data.homepage,
		owner: {
			avatar_url: data.owner.avatar_url + '&s=64'
		}
	};

	if (!process.env.CI && !cache.has(repo)) {
		console.log(`caching repository "${repo}" to disk`);
		await cache.set(repo, project);
	}

	if (!data.name || !data.description || !data.html_url) {
		console.error(project);
		throw new Error('Invalid repository data');
	}

	return project;
};
