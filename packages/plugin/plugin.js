const { command, commandSync } = require('execa');
const { env } = require('npm-run-path');
const cwd = process.cwd();

function dataListener(chunk, log) {
	let stdOutput = chunk.toString();
	// In --watch mode, handle the "clear" character
	if (stdOutput.includes('\u001bc') || stdOutput.includes('\x1Bc')) {
		log('WORKER_RESET', {});
		stdOutput = stdOutput.replace(/\x1Bc/, '').replace(/\u001bc/, '');
	}
	log('WORKER_MSG', { level: 'log', msg: `${stdOutput}` });
}

function angularPlugin(_, { args } = {}) {
	/**
	 * @type {import('snowpack').SnowpackPlugin}
	 */
	const plugin = {
		name: '@snowpack-angular/plugin',
		async run({ isDev, log }) {
			const workerPromise = command(
				`ngc ${args || '--project ./tsconfig.app.json'} && ngc ${
					args || '--project ./tsconfig.app.json'
				} ${isDev ? '--watch' : ''}`,
				{
					all: true,
					cwd,
					env: env(),
					extendEnv: true,
					shell: true,
					windowsHide: false,
				}
			);
			const { all } = workerPromise;

			all && all.on('data', (chunk) => dataListener(chunk, log));

			return workerPromise;
		},
		transform({ contents, fileExt, isDev }) {
			if (isDev || fileExt.trim() !== '.js' || !contents.trim())
				return contents;

			const {
				buildOptimizer,
			} = require('@angular-devkit/build-optimizer');

			const transpiledContent = buildOptimizer({ content: contents })
				.content;

			return transpiledContent || contents;
		},
	};

	return plugin;
}

module.exports = angularPlugin;
