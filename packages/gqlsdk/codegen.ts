import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://0wrqsydr.api.sanity.io/v1/graphql/production/default',
  documents: ['src/**/*.gql'],
  // generates: {
  //   './src/generated/': {
  //     preset: 'client',
  //   },
  // },
  generates: {
    './src/generated/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        useTypeImports: true,
        InlineFragmentTypeOptions: 'combine',
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
