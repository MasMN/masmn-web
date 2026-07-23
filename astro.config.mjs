import { defineConfig } from 'astro/config';

// MAS Minnesota — deployed to masmn.org via GitHub Pages with a custom domain,
// so paths are served from the root rather than a repo-name subpath.
export default defineConfig({
  site: 'https://masmn.org',
  base: '/',
  trailingSlash: 'ignore',
});
