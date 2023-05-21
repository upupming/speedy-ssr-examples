// @ts-check
const esbuild = require('esbuild');
const path = require('path');

// workaround for resolve react, etc in soft-linked monorepo
// user using universal by npm install does not need this workaround
/**
 *
 * @param {string} importSource
 * @returns {boolean}
 */
function isUniversalComponent(importSource) {
  return /universal\/dist\/cjs|esm/.test(importSource);
}

/**
 *
 * @param {string} package
 * @returns {boolean}
 */
const isSpecificPackages = (package) => {
  return ['react', 'react-router-dom', 'react-dom', '@loadable/component'].some((prefix) => package.startsWith(prefix));
};

esbuild.build({
  entryPoints: [path.join(__dirname, 'server.worker.ts')],
  sourcemap: true,
  outdir: path.join(__dirname, 'dist'),
  bundle: true,
  plugins: [
    {
      name: 'force-resolve-host-dep-in-linked-package',
      setup(build) {
        build.onResolve({ filter: /.*/ }, async (args) => {
          if (isUniversalComponent(args.importer) && isSpecificPackages(args.path)) {
            // resolve in current project directory
            return build.resolve(args.path, { resolveDir: __dirname });
          }
        });
      },
    },
  ],
});
