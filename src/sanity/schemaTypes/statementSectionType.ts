import { defineField, defineType } from 'sanity'
export const statementSectionType = defineType({
  name: 'statementSection', title: 'Statement Section', type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'text', title: 'Text', type: 'text' })
  ]
})
