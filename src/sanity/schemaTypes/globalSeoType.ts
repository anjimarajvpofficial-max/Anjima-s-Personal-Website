import { defineField, defineType } from 'sanity'

export const globalSeoType = defineType({
  name: 'globalSeo',
  title: 'Global SEO',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', title: 'Site Title', type: 'string' }),
    defineField({ name: 'siteDescription', title: 'Site Description', type: 'text' }),
    defineField({ name: 'ogImage', title: 'Default Open Graph Image', type: 'image' }),
    defineField({ name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] }),
  ],
})