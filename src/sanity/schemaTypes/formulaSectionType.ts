
import { defineField, defineType } from 'sanity'
export const formulaSectionType = defineType({
  name: 'formulaSection', title: 'Formula Section', type: 'object',
  fields: [
    defineField({ name: 'words', title: 'Words (Marquee)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'label', title: 'Label', type: 'string' })
  ]
})
