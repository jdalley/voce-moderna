export default {
  name: 'opera',
  title: 'Opera',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9\-]/g, '')
            .slice(0, 200)
      }
    },
    {
      name: 'composers',
      title: 'Composers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'creator' }]
        }
      ]
    },
    {
      name: 'librettists',
      title: 'Librettists',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'creator' }]
        }
      ]
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string'
    },
    {
      name: 'sourceMaterial',
      title: 'Source Material',
      type: 'string'
    },
    {
      name: 'synopsis',
      title: 'Synopsis',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'premiereInformation',
      title: 'Premiere Information',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'scoreLink',
      title: 'Score Link',
      type: 'externalLink'
    },
    {
      name: 'mediaLinks',
      title: 'Media Links',
      type: 'array',
      of: [{ type: 'externalLink' }]
    }
  ]
};
