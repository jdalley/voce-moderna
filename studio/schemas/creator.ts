import { SanityDocument, SlugSourceOptions } from '@sanity/types';

export default {
  name: 'creator',
  title: 'Creator',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string'
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: SanityDocument, options: SlugSourceOptions) =>
          `${doc.firstName} ${doc.lastName}`,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 96)
      }
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};
