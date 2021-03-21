export default {
  name: 'featuredAria',
  title: 'Featured Aria',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'aria',
      title: 'Aria',
      type: 'reference',
      to: [{ type: 'aria' }]
    }
  ]
};
