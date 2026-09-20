import { defineField, defineType } from 'sanity'

export const transmissionsSectionType = defineType({
  name: 'transmissionsSection',
  title: 'Transmissions (Projects) Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Transmissions' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ]
})