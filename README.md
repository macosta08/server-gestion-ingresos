# graphql-servidor-gestion-ingresos

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

  "scripts": {
    "compile": "tsc",
    // "start": "bun run compile && node ./dist/index.js"
     "start": "ts-node --loader ts-node/esm index.ts",
  },

  {
  "compilerOptions": {
    "rootDirs": ["src"],
    "outDir": "dist",
    "lib": ["es2020"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node"]
  }
}

// {
//   "compilerOptions": {
//     // Enable latest features
//     "lib": ["ESNext", "DOM"],
//     "target": "ESNext",
//     "module": "ESNext",
//     "moduleDetection": "force",
//     "jsx": "react-jsx",
//     "allowJs": true,

//     // Bundler mode
//     "moduleResolution": "bundler",
//     "allowImportingTsExtensions": true,
//     "verbatimModuleSyntax": true,
//     "noEmit": true,

//     // Best practices
//     "strict": true,
//     "skipLibCheck": true,
//     "noFallthroughCasesInSwitch": true,

//     // Some stricter flags (disabled by default)
//     "noUnusedLocals": false,
//     "noUnusedParameters": false,
//     "noPropertyAccessFromIndexSignature": false
//   }
// }
