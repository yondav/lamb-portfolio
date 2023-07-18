import { defineType } from 'sanity';

export default defineType({
  title: 'Socials',
  name: 'socials',
  type: 'object',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      // initialValue: 'alisonlamba@gmail.com',
    },
    {
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string',
      // initialValue: 'https://www.linkedin.com/in/alison-lamb-a3173312/',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      // initialValue: 'https://www.instagram.com/alilambop/?hl=en',
    },
  ],
});
