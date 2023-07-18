import { defineType } from 'sanity';

export { default as pageBlock } from './page.block';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'array',
  of: [{ type: 'pageBlock' }],
});
