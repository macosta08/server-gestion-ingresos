const esbuild = require('esbuild');
const graphqlPlugin = require('./esbuild-graphql-plugin');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  target: 'es2020',
  outfile: 'dist/index.js',
  plugins: [graphqlPlugin],
  external: ['./graphql/schema.graphql']
}).catch(() => process.exit(1));
