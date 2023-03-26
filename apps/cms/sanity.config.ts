import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import structure from './deskStructure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'lamb-portfolio',

  projectId: '0wrqsydr',
  dataset: 'production',

  plugins: [deskTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
