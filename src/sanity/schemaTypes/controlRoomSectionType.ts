import { defineField, defineType } from 'sanity'

export const controlRoomSectionType = defineType({
  name: 'controlRoomSection',
  title: 'Control Room Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'stats', title: 'Stats', type: 'array', of: [{
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'value', title: 'Value', type: 'string' }),
      ]
    }] }),
  ]
})