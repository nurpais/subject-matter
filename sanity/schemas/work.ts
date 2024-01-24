import { Rule, defineType } from 'sanity'

export const work = defineType({
  title: 'Work',
  name: 'work',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Required'),
    },
    {
      title: 'Color',
      name: 'color',
      type: 'string',
    },
    {
      title: 'Main image',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          title: 'Alt',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: Rule) => Rule.required().error('Required'),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule: Rule) => Rule.max(200).error('Max 200 characters'),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'workTag' }] }],
    },
  ],
})
