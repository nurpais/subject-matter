import { defineType } from 'sanity'

export const workTag = defineType({
  title: 'Work tag',
  name: 'workTag',
  type: 'document',
  fields: [
    {
      title: 'Tag Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
  ],
})
