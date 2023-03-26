import type { StructureBuilder } from 'sanity/desk';

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Info')
        .child(S.document().schemaType('info').documentId('info')),
      ...S.documentTypeListItems().filter(
        listItem => !['info'].includes(listItem.getId() as string)
      ),
    ]);

export default structure;
