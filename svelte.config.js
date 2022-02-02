import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte"],

	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
		vite: {
			resolve: {
				dedupe: ['svelte']
			},
			optimizeDeps: {
				// exclude: Object.keys(pkg.dependencies || {}).filter((d) => !['graphql'].includes(d)),
				include: ['graphql']
			},
			ssr: {
				// Until https://github.com/vitejs/vite/issues/2579
				// noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};

export default config;
