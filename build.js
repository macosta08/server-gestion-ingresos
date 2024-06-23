const fs = require('fs');
const esbuild = require('esbuild');

// Leer el esquema GraphQL desde el archivo
const graphqlSchema = fs.readFileSync('./graphql/schema.graphql', 'utf8');

// Función para insertar el esquema GraphQL en el código
const insertSchema = (args) => {
  return args.path.endsWith('.graphql')
    ? { contents: graphqlSchema, loader: 'graphql' }
    : null;
};

// Configuración de esbuild
esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  target: 'es2020',
  outfile: 'dist/index.js',
  loader: {
    '.graphql': 'text',
  },
  define: {
    'process.env.GRAPHQL_SCHEMA': JSON.stringify(graphqlSchema),
  },
  plugins: [
    {
      name: 'insert-schema',
      setup(build) {
        build.onLoad({ filter: /.*/, namespace: 'file' }, insertSchema);
      },
    },
  ],
}).catch(() => process.exit(1));
