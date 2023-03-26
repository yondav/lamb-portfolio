import { MdPerson as icon } from 'react-icons/md';
import { defineType } from 'sanity';

export default defineType({
  name: 'info',
  title: 'Info',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      initialValue: 'Alison Lamb',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['location'],
      },
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{ type: 'details' }],
    },
    {
      name: 'credentials',
      title: 'Credentials',
      type: 'credentials',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'socials',
    },
  ],
});
