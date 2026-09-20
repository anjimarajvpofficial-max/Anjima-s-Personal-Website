import { defineField, defineType } from 'sanity'

export const testimonialsSectionType = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
  ]
})