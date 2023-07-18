import { visionTool } from '@sanity/vision';
import { AiFillInfoCircle } from 'react-icons/ai';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

import { defaultDocumentNode } from './defaultDocumentNode';
import { schemaTypes } from './schemas';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['info']);

export default defineConfig({
  name: 'default',
  title: 'ALamb - CMS',

  projectId: '0wrqsydr',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode,
      structure: S =>
        S.list()
          .title('Content')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title('Info')
              .id('info')
              .icon(AiFillInfoCircle)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType('info')
                  .documentId('info')
                  .views([
                    S.view.form(),
                    S.view
                      .component(Iframe)
                      .options({
                        url: 'http://localhost:3000',
                      })
                      .title('Preview'),
                  ])
              ),

            // Regular document types
            S.documentTypeListItem('work').title('Work'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: templates =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
