import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { schemaTypes } from './schemas';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['info']);

export default defineConfig({
  name: 'default',
  title: 'Alison Lamb, Visual Designer',

  projectId: '0wrqsydr',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Info')
              .id('info')
              .child(S.document().schemaType('info').documentId('info')),
            S.documentTypeListItem('work').title('Work'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    templates: templates =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
