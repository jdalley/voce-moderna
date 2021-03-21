export default {
  name: 'aria',
  title: 'Aria',
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
      name: 'opera',
      title: 'Opera',
      type: 'reference',
      to: [{ type: 'opera' }]
    },
    {
      name: 'voiceType',
      title: 'Voice Type',
      type: 'reference',
      to: [{ type: 'voiceType' }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'character',
      title: 'Character',
      type: 'string'
    },
    {
      name: 'tessitura',
      title: 'Tessitura',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'scoreLink',
      title: 'Score Link',
      type: 'externalLink'
    },
    {
      name: 'performanceLinks',
      title: 'Performance Links',
      type: 'array',
      of: [{ type: 'externalLink' }]
    },
    {
      name: 'pianoTrack',
      title: 'Piano Track',
      type: 'track'
    },
    {
      name: 'vocalTrack',
      title: 'Vocal Track',
      type: 'track'
    }
  ]
};
