import { defineField, defineType } from 'sanity'

export const insightsSectionType = defineType({
  name: 'insightsSection',
  title: 'Insights Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
  ]
})