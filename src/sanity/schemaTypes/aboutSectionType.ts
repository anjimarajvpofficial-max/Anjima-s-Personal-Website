
import { defineField, defineType } from 'sanity'
export const aboutSectionType = defineType({
  name: 'aboutSection', title: 'About Section', type: 'object',
  fields: [
    defineField({ name: 'timeline', title: 'Timeline', type: 'array', of: [{ type: 'object', fields: [ {name: 'year', type: 'string'}, {name: 'role', type: 'string'}, {name: 'org', type: 'string'}, {name: 'desc', type: 'text'} ] }] }),
    defineField({ name: 'education', title: 'Education', type: 'array', of: [{ type: 'object', fields: [ {name: 'year', type: 'string'}, {name: 'degree', type: 'string'}, {name: 'institution', type: 'string'}, {name: 'desc', type: 'text'} ] }] }),
    defineField({ name: 'achievements', title: 'Achievements', type: 'array', of: [{ type: 'string' }] }),
  ]
})
