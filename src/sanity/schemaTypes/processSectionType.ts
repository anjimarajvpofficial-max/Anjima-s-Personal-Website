
import { defineField, defineType } from 'sanity'
export const processSectionType = defineType({
  name: 'processSection', title: 'Process Section', type: 'object',
  fields: [
    defineField({ name: 'steps', title: 'Steps', type: 'array', of: [{ type: 'object', fields: [ {name: 'name', type: 'string'}, {name: 'img', type: 'string', title: 'Image URL'} ] }] })
  ]
})
