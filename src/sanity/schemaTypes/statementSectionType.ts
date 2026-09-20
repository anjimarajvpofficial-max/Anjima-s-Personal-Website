import { defineField, defineType } from 'sanity'

export const statementSectionType = defineType({
  name: 'statementSection',
  title: 'Statement Section',
  type: 'object',
  fields: [
    defineField({ name: 'text', title: 'Statement Text', type: 'text' }),
  ]
})