import { defineField, defineType } from 'sanity'

export const aboutSectionType = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
  ]
})