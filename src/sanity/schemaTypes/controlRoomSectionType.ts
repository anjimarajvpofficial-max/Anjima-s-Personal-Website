
import { defineField, defineType } from 'sanity'
export const controlRoomSectionType = defineType({
  name: 'controlRoomSection', title: 'Control Room Section', type: 'object',
  fields: [
    defineField({ name: 'skills', title: 'Skills', type: 'array', of: [{ type: 'object', fields: [ {name: 'skill', type: 'string'}, {name: 'status', type: 'string'}, {name: 'code', type: 'string'}, {name: 'desc', type: 'text'} ] }] })
  ]
})
