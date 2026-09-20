import { defineField, defineType } from 'sanity'

export const processSectionType = defineType({
  name: 'processSection',
  title: 'Process Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
    defineField({ name: 'steps', title: 'Steps', type: 'array', of: [{
      type: 'object',
      fields: [
        defineField({ name: 'number', title: 'Step Number', type: 'string' }),
        defineField({ name: 'title', title: 'Step Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
      ]
    }] }),
  ]
})