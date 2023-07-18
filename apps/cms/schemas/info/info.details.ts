import { defineType } from 'sanity';

export default defineType({
  title: 'Details',
  name: 'details',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});
