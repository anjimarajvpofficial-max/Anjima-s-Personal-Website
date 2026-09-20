import { defineField, defineType } from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const projectType = defineType({
  name: 'project',
  title: 'Project (Transmission)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'metric',
      title: 'Metric / Performance',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube ID',
      type: 'string',
      description: 'e.g. Z9QNH7goiQM (from https://youtube.com/watch?v=Z9QNH7goiQM)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to sort projects',
    }),
    orderRankField({ type: "project" }),
  ],
  orderings: [
    {
      title: 'Custom Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
