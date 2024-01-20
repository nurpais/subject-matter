import { Rule } from 'sanity'

export const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Required'),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().error('Required'),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required().error('Required'),
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: Rule) => Rule.required().error('Required'),
    },
  ],
}
