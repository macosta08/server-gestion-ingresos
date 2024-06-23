const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'graphql',
  setup(build) {
    build.onResolve({ filter: /\.graphql$/ }, args => ({
      path: path.resolve(args.resolveDir, args.path),
      namespace: 'graphql'
    }));

    build.onLoad({ filter: /.*/, namespace: 'graphql' }, async (args) => {
      const contents = await fs.promises.readFile(args.path, 'utf8');
      return {
        contents: `module.exports = ${JSON.stringify(contents)}`,
        loader: 'text',
      };
    });
  },
};
