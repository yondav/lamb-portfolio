import { defineType } from 'sanity';

export default defineType({
  name: 'pageBlock',
  type: 'object',
  title: 'pageBlock',
  fields: [
    { name: 'colSpan', type: 'colSpan' },
    { name: 'elements', type: 'elements' },
  ],
});
