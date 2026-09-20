import { defineField, defineType } from 'sanity'

export const formulaSectionType = defineType({
  name: 'formulaSection',
  title: 'Formula Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'content', title: 'Content', type: 'text' }),
  ]
})