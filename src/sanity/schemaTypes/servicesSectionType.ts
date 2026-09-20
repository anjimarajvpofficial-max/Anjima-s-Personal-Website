import { defineField, defineType } from 'sanity'

export const servicesSectionType = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
  ]
})