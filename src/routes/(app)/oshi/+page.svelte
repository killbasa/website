<script lang="ts" module>
	type Command = {
		input: string;
		result: string[] | null;
	};
</script>

<script lang="ts">
	import { onMount, tick } from 'svelte';
	import type { EventHandler } from 'svelte/elements';

	const SpanRegex =
		/<span style="(color: var\(\S+\);)">(https?:\/\/[^\s]+)<\/span>/g;
	const HelpCommandOutput: Command['result'] = [
		'what is this?',
		'  I have a public API hosted at oshi.killbasa.com that',
		'  tracks the upcoming streams of VTubers I watch.',
		`  More info at: ${formatAnchor('https://github.com/killbasa/oshi-api')}`,
		'\n',
		'available commands:',
		'  curl oshi.killbasa.com - Fetch stream data about my oshi',
		'  curl oshi.killbasa.com/list - Fetch a list of my oshi',
		'  help - Display this help message',
		'  clear - Clear the terminal screen',
		'\n',
	];

	const prefix = 'kb@127.0.0.1 ~ $';

	const history: string[] = ['help'];
	const lines = $state<{ id: number; command: Command }[]>([
		{
			id: 0,
			command: { input: 'help', result: HelpCommandOutput },
		},
	]);

	let terminal: HTMLDivElement;
	let input: HTMLInputElement;
	let cmdCursor = -1;
	let loading = $state(false);
	let lineId = 0;

	function formatAnchor(url: string): string {
		return `<a style="color: var(--light-blue); text-decoration: underline;" href="${url}" target="_blank">${url}</a>`;
	}

	const makeRequest = async (url: string): Promise<string[]> => {
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					Accept: 'text/plain',
				},
				signal: AbortSignal.timeout(10_000),
			});
			if (!response.ok) {
				throw new Error(`fetch error, status: ${response.status}`);
			}

			const data = await response.text();

			return data.split('\n').map(ansiToHtml);
		} catch (err) {
			console.error(err);
			if (err instanceof DOMException && err.name === 'TimeoutError') {
				return ['request timed out'];
			}
			return ['error fetching data'];
		}
	};

	const addLine = (command: Command): void => {
		lineId += 1;
		lines.push({ id: lineId, command });

		if (lines.length > 50) {
			lines.shift();
		}
	};

	const runCommand = async (command: string): Promise<void> => {
		if (command === 'curl oshi.killbasa.com') {
			loading = true;
			const result = await makeRequest('https://oshi.killbasa.com');
			loading = false;

			addLine({
				input: command,
				result,
			});
		} else if (command === 'curl oshi.killbasa.com/list') {
			loading = true;
			const result = await makeRequest('https://oshi.killbasa.com/list');
			loading = false;

			addLine({
				input: command,
				result,
			});
		} else if (command === 'help') {
			addLine({
				input: command,
				result: HelpCommandOutput,
			});
		} else if (command === 'clear' || command === 'c') {
			lines.splice(0, lines.length);
		} else if (command === '') {
			addLine({
				input: '',
				result: [],
			});
		} else if (command.includes('rm -rf /')) {
			addLine({
				input: command,
				result: [formatAnchor('https://www.youtube.com/watch?v=dQw4w9WgXcQ')],
			});
		} else {
			addLine({
				input: command,
				result: null,
			});
		}

		if (command.trim() !== '') {
			history.push(command);
		}
	};

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (
		event,
	) => {
		event.preventDefault();
		if (loading) return;

		const form = event.currentTarget;
		const command = new FormData(form).get('command')?.toString().trim() ?? '';

		await runCommand(command);

		cmdCursor = -1;
		form.reset();

		await scrollToBottom();
	};

	const scrollToBottom = async (): Promise<void> => {
		await tick(); // wait for DOM update
		terminal.scrollTop = terminal.scrollHeight;
	};

	const handleKeydown: EventHandler<KeyboardEvent, HTMLInputElement> = (
		event,
	) => {
		if (event.key === 'ArrowUp') {
			if (history.length === 0) return;

			cmdCursor += 1;
			if (cmdCursor >= history.length) {
				cmdCursor = history.length - 1;
			}

			input.value = history[history.length - 1 - cmdCursor];

			event.preventDefault();
		} else if (event.key === 'ArrowDown') {
			if (history.length === 0) return;

			cmdCursor -= 1;
			if (cmdCursor < -1) {
				cmdCursor = -1;
			}

			if (cmdCursor === -1) {
				input.value = '';
			} else {
				input.value = history[history.length - 1 - cmdCursor];
			}

			event.preventDefault();
		} else if (event.ctrlKey && event.key.toLowerCase() === 'c') {
			input.value = '';
			cmdCursor = -1;
			event.preventDefault();
		}
	};

	function ansiToHtml(text: string): string {
		if (text === '') return '&nbsp;';

		// shouldn't return html
		const escapedText = text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');

		// parse ansi color codes to html spans
		// https://talyian.github.io/ansicolors/
		const coloredText = escapedText
			// parse colors
			// biome-ignore lint/suspicious/noControlCharactersInRegex: ansi color codes
			.replace(/\x1b\[38;5;117m/g, '<span style="color: var(--light-blue);">')
			// biome-ignore lint/suspicious/noControlCharactersInRegex: ansi color codes
			.replace(/\x1b\[38;5;120m/g, '<span style="color: var(--green);">')
			// biome-ignore lint/suspicious/noControlCharactersInRegex: ansi color codes
			.replace(/\x1b\[38;5;196m/g, '<span style="color: var(--bright-red);">')
			.replace(
				// biome-ignore lint/suspicious/noControlCharactersInRegex: ansi color codes
				/\x1b\[38;5;226m/g,
				'<span style="color: var(--bright-yellow);">',
			)
			.replace(
				// biome-ignore lint/suspicious/noControlCharactersInRegex: ansi color codes
				/\x1b\[38;5;129m/g,
				'<span style="color: var(--bright-purple);">',
			)
			// biome-ignore lint/suspicious/noControlCharactersInRegex: ansi color codes
			.replace(/\x1b\[0m/g, '</span>');

		const textWithLinks = coloredText.replace(
			SpanRegex,
			'<a style="$1 text-decoration: underline;" href="$2" target="_blank">$2</a>',
		);

		return textWithLinks;
	}

	onMount(async () => {
		await runCommand('curl oshi.killbasa.com');
		await scrollToBottom();
	});
</script>

<svelte:head>
	<title>Oshi | KB</title>
</svelte:head>

<svelte:window
	onmouseup={(event) => {
		if (document.activeElement !== input) {
			const selected = window.getSelection()?.toString();
			if (selected && selected.length > 0) {
				// emulate terminal copying
				navigator.clipboard.writeText(selected).catch(() => {});
			}

			// don't pop the mobile keyboard when tapping a link
			if (event.target instanceof Element && event.target.closest('a')) {
				return;
			}

			input.focus({ preventScroll: true });
			input.selectionStart = input.value.length;
		}
	}}
/>

<section>
	<div
		class="terminal h-[calc(100dvh-var(--spacing-header))] bg-black flex flex-col text-gray-100 font-mono p-2 overflow-y-auto cursor-default leading-4.5 sm:leading-5 text-sm sm:text-base"
		bind:this={terminal}
	>
		<div role="log" aria-label="Terminal output" class="flex flex-col">
			{#each lines as cmd (cmd.id)}
				<div class="flex gap-2 whitespace-nowrap">
					<span class="text-green-400">{prefix}</span>
					{cmd.command.input}
				</div>
				{#if cmd.command.result === null}
					<span class="whitespace-pre"
						>{cmd.command.input}: command not found</span
					>
				{:else}
					{#each cmd.command.result as line, i (i)}
						<span class="whitespace-pre">{@html line}</span>
					{/each}
				{/if}
			{/each}

			{#if loading}
				<span class="whitespace-pre text-gray-400">fetching...</span>
			{/if}
		</div>

		<form onsubmit={handleSubmit} class="flex items-center h-5">
			<span class="text-green-400 whitespace-nowrap">{prefix}</span>
			<input
				name="command"
				type="text"
				aria-label="Terminal command"
				class="pl-2 outline-0 w-full cursor-default bg-transparent"
				autocomplete="off"
				autocapitalize="off"
				autocorrect="off"
				spellcheck="false"
				onkeydown={handleKeydown}
				bind:this={input}
			/>
		</form>
	</div>
</section>

<style lang="postcss">
	@reference "#src/app.css";

	.terminal {
		--light-blue: rgb(102, 204, 255);
		--green: rgb(102, 255, 102);
		--bright-red: rgb(255, 0, 0);
		--bright-yellow: rgb(255, 255, 0);
		--bright-purple: rgb(153, 0, 255);
	}

	::selection {
		@apply bg-yellow-300 text-black;
	}
</style>
