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
      title: 'Project link',
      name: 'projectLink',
      type: 'string',
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
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
      title: 'Main image',
      name: 'mainImage',
      type: 'image',
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
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'workTag' }] }],
    },
    {
      name: 'videoLink',
      title: 'Video link',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
})
