export default {
  name: 'track',
  title: 'Track',
  description: 'Fields to define a Snipcart Product (Track)',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'id',
      title: 'Id',
      type: 'slug',
      options: {
        source: (doc, options) => options.parent.ariaName,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9\-]/g, '')
            .slice(0, 200)
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'relativeUrl',
      title: 'Relative URL',
      type: 'string',
      description: '/aria/aria-name'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'fileGuid',
      title: 'File GUID',
      type: 'string',
      description: 'Snipcart file identifier'
    }
  ]
};
