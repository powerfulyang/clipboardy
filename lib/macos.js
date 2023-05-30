import {execa, execaSync} from 'execa';

const env = {
	LC_CTYPE: 'utf8',
};

const clipboard = {
	copy: async options => execa('pbcopy', {...options, env}),
	async paste(options) {
		const {stdout} = await execa('pbpaste', {...options, env});
		return stdout;
	},
	copySync: options => execaSync('pbcopy', {...options, env}),
	pasteSync: options => execaSync('pbpaste', {...options, env}).stdout,
};

export default clipboard;
