import { defineField, defineType } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'statementSection' },
        { type: 'transmissionsSection' },
        { type: 'servicesSection' },
        { type: 'processSection' },
        { type: 'testimonialsSection' },
        { type: 'controlRoomSection' },
        { type: 'aboutSection' },
        { type: 'formulaSection' },
        { type: 'insightsSection' },
      ],
      options: {
        insertMenu: {
          views: [{name: 'list'}],
        }
      }
    })
  ]
})