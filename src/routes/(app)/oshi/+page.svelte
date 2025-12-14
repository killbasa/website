<script lang="ts" module>
	type Command = {
		cmd: string;
		result: string[];
	};
</script>

<script lang="ts">
	import { tick } from 'svelte';

	import type { EventHandler } from 'svelte/elements';

	const SpanRegex = /<span style="(color: rgb\(\d+, \d+, \d+\);)">(https?:\/\/[^\s]+)<\/span>/g;
	const HelpCommand: Command['result'] = [
		'available commands:',
		'  curl oshi.killbasa.com - Fetch stream data about my oshi',
		'  curl oshi.killbasa.com/list - Fetch a list of my shi',
		'  help - Display this help message',
		'  clear - Clear the terminal screen'
	];

	const prefix = 'kb@127.0.0.1 ~ $';
	const history = $state<string[]>(['help']);
	const lines = $state<Command[]>([{ cmd: 'help', result: HelpCommand }]);

	let input: HTMLInputElement;
	let cmdCursor = $state(-1);
	let loading = $state(false);

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (event) => {
		event.preventDefault();
		if (loading) return;

		const form = event.currentTarget;
		const command = new FormData(form).get('command')?.toString().trim() ?? '';

		if (command === 'curl oshi.killbasa.com') {
			loading = true;

			const response = await fetch('https://oshi.killbasa.com', {
				method: 'GET',
				headers: {
					Accept: 'text/plain'
				}
			});
			const data = await response.text();

			loading = false;
			lines.push({ cmd: command, result: data.split('\n').map(ansiToHtml) });
		} else if (command === 'curl oshi.killbasa.com/list') {
			loading = true;

			const response = await fetch('https://oshi.killbasa.com/list', {
				method: 'GET',
				headers: {
					Accept: 'text/plain'
				}
			});
			const data = await response.text();

			loading = false;
			lines.push({ cmd: command, result: data.split('\n').map(ansiToHtml) });
		} else if (command === 'help') {
			lines.push({
				cmd: command,
				result: HelpCommand
			});
		} else if (command === 'clear') {
			lines.splice(0, lines.length);
		} else if (command === '') {
			lines.push({ cmd: command, result: [] });
		} else if (command.includes('rm -rf /')) {
			lines.push({
				cmd: command,
				result: [
					'<a style="color: rgb(102, 204, 255); text-decoration: underline;" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>'
				]
			});
		} else {
			lines.push({ cmd: command, result: [`${command}: command not found`] });
		}

		if (lines.length > 50) {
			lines.shift();
		}

		if (command.trim() !== '') {
			history.push(command);
		}

		cmdCursor = -1;
		form.reset();

		await tick(); // wait for DOM update
		input.scrollIntoView(); // scroll to bottom
	};

	function ansiToHtml(text: string): string {
		if (text === '') return '&nbsp;';

		// parse ansi color codes to html spans
		// https://talyian.github.io/ansicolors/
		return (
			text
				// eslint-disable-next-line no-control-regex
				.replace(/\x1b\[38;5;117m/g, '<span style="color: rgb(102, 204, 255);">') // light blue
				// eslint-disable-next-line no-control-regex
				.replace(/\x1b\[38;5;120m/g, '<span style="color: rgb(102, 255, 102);">') // green
				// eslint-disable-next-line no-control-regex
				.replace(/\x1b\[38;5;196m/g, '<span style="color: rgb(255, 0, 0);">') // bright red
				// eslint-disable-next-line no-control-regex
				.replace(/\x1b\[38;5;226m/g, '<span style="color: rgb(255, 255, 0);">') // bright yellow
				// eslint-disable-next-line no-control-regex
				.replace(/\x1b\[38;5;129m/g, '<span style="color: rgb(153, 0, 255);">') // bright purple
				// eslint-disable-next-line no-control-regex
				.replace(/\x1b\[0m/g, '</span>')
				.replace(
					SpanRegex,
					'<a style="$1 text-decoration: underline;" href="$2" target="_blank">$2</a>'
				)
		);
	}
</script>

<svelte:head>
	<title>Oshi | KB</title>
</svelte:head>

<svelte:window
	onmouseup={() => {
		if (document.activeElement !== input) {
			const selected = window.getSelection()?.toString();
			if (selected && selected.length > 0) {
				navigator.clipboard.writeText(selected);
			}

			input.focus();
			input.selectionStart = input.value.length;
		}
	}}
	onkeydown={(event) => {
		if (event.code === 'ArrowUp') {
			if (history.length === 0) return;

			cmdCursor += 1;
			if (cmdCursor >= history.length) {
				cmdCursor = history.length - 1;
			}

			input.value = history[history.length - 1 - cmdCursor];

			event.preventDefault();
		} else if (event.code === 'ArrowDown') {
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
		} else if (event.ctrlKey && event.code === 'KeyC') {
			input.value = '';
			cmdCursor = -1;
			event.preventDefault();
		}
	}}
/>

<section>
	<div
		id="terminal"
		class="h-[calc(100vh-4rem)] lg:h-[calc(100vh-7rem)] bg-black flex flex-col text-gray-100 font-mono p-2 overflow-y-auto cursor-default border border-gray-700 rounded"
	>
		{#each lines as cmd, i (i)}
			<div class="flex gap-2"><span class="text-green-400">{prefix}</span> {cmd.cmd}</div>
			{#each cmd.result as line}
				<span class="whitespace-pre">{@html line}</span>
			{/each}
		{/each}

		<form onsubmit={handleSubmit} class="flex items-center rounded font-mono h-6">
			<span class="text-green-400 whitespace-nowrap">{prefix}</span>
			<input
				name="command"
				type="text"
				class="pl-2 outline-0 w-full cursor-default bg-transparent"
				autocomplete="off"
				bind:this={input}
			/>
		</form>
	</div>
</section>

<style lang="postcss">
	@reference '$src/app.css';

	::selection {
		@apply bg-yellow-300 text-black;
	}
</style>
