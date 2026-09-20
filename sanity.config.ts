import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { FileText, LayoutDashboard, LayoutTemplate, Briefcase, FileSignature, MessageSquare, Newspaper, Settings, Palette, Navigation, Search, Image as ImageIcon } from 'lucide-react'

export default defineConfig({
  name: 'default',
  title: 'AI Website CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string || 'default',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Dashboard')
          .items([
            // CONTENT
            S.listItem()
              .title('Content')
              .icon(FileText)
              .child(
                S.list()
                  .title('Content')
                  .items([
                    S.documentTypeListItem('page').title('Pages').icon(LayoutTemplate),
                    orderableDocumentListDeskItem({ type: 'project', title: 'Projects', icon: Briefcase, S, context }),
                    orderableDocumentListDeskItem({ type: 'service', title: 'Services', icon: FileSignature, S, context }),
                    orderableDocumentListDeskItem({ type: 'testimonial', title: 'Testimonials', icon: MessageSquare, S, context }),
                    orderableDocumentListDeskItem({ type: 'insight', title: 'Insights (Blog)', icon: Newspaper, S, context }),
                  ])
              ),

            S.divider(),

            // DESIGN
            S.listItem()
              .title('Design')
              .icon(Palette)
              .child(
                S.document()
                  .title('Global Theme')
                  .schemaType('globalTheme')
                  .documentId('globalTheme')
              ),

            // NAVIGATION
            S.listItem()
              .title('Navigation')
              .icon(Navigation)
              .child(
                S.document()
                  .title('Navigation Menus')
                  .schemaType('navigation')
                  .documentId('navigation')
              ),

            // SEO
            S.listItem()
              .title('SEO Defaults')
              .icon(Search)
              .child(
                S.document()
                  .title('Global SEO')
                  .schemaType('globalSeo')
                  .documentId('globalSeo')
              ),
              
            S.divider(),

            // SETTINGS
            S.listItem()
              .title('Site Settings')
              .icon(Settings)
              .child(
                S.document()
                  .title('Site Identity & Settings')
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
