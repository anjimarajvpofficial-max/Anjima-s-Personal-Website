const fs = require('fs');
const path = require('path');

const schemaDir = path.join(__dirname, 'src', 'sanity', 'schemaTypes');

// Singletons
const singletons = {
  'globalThemeType.ts': `import { defineField, defineType } from 'sanity'

export const globalThemeType = defineType({
  name: 'globalTheme',
  title: 'Global Theme',
  type: 'document',
  fields: [
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'object',
      fields: [
        defineField({ name: 'ink', title: 'Background (Ink)', type: 'string', description: 'Hex code, e.g. #050505' }),
        defineField({ name: 'paper', title: 'Text (Paper)', type: 'string', description: 'Hex code, e.g. #f4f4f0' }),
        defineField({ name: 'accent', title: 'Accent Color', type: 'string', description: 'Hex code, e.g. #ff0050' }),
        defineField({ name: 'inkLight', title: 'Ink Light', type: 'string', description: 'Hex code, e.g. #1a1a1a' }),
        defineField({ name: 'paperDim', title: 'Paper Dim', type: 'string', description: 'Hex code, e.g. #e0e0dc' }),
      ]
    }),
  ],
})`,

  'globalSeoType.ts': `import { defineField, defineType } from 'sanity'

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
})`,

  'navigationType.ts': `import { defineField, defineType } from 'sanity'

export const navigationType = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'mainNav',
      title: 'Main Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'url', title: 'URL or Anchor', type: 'string', description: 'e.g. /#about' }),
          ]
        }
      ]
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'string' }),
          ]
        }
      ]
    })
  ]
})`
};

const objects = {
  'seoType.ts': `import { defineField, defineType } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
    defineField({ name: 'ogImage', title: 'Open Graph Image', type: 'image' }),
  ]
})`,
  
  'heroSectionType.ts': `import { defineField, defineType } from 'sanity'

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Main Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text' }),
  ]
})`,

  'statementSectionType.ts': `import { defineField, defineType } from 'sanity'

export const statementSectionType = defineType({
  name: 'statementSection',
  title: 'Statement Section',
  type: 'object',
  fields: [
    defineField({ name: 'text', title: 'Statement Text', type: 'text' }),
  ]
})`,

  'transmissionsSectionType.ts': `import { defineField, defineType } from 'sanity'

export const transmissionsSectionType = defineType({
  name: 'transmissionsSection',
  title: 'Transmissions (Projects) Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Transmissions' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ]
})`,

  'servicesSectionType.ts': `import { defineField, defineType } from 'sanity'

export const servicesSectionType = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
  ]
})`,

  'processSectionType.ts': `import { defineField, defineType } from 'sanity'

export const processSectionType = defineType({
  name: 'processSection',
  title: 'Process Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
    defineField({ name: 'steps', title: 'Steps', type: 'array', of: [{
      type: 'object',
      fields: [
        defineField({ name: 'number', title: 'Step Number', type: 'string' }),
        defineField({ name: 'title', title: 'Step Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
      ]
    }] }),
  ]
})`,

  'testimonialsSectionType.ts': `import { defineField, defineType } from 'sanity'

export const testimonialsSectionType = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
  ]
})`,

  'controlRoomSectionType.ts': `import { defineField, defineType } from 'sanity'

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
})`,

  'aboutSectionType.ts': `import { defineField, defineType } from 'sanity'

export const aboutSectionType = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
  ]
})`,

  'formulaSectionType.ts': `import { defineField, defineType } from 'sanity'

export const formulaSectionType = defineType({
  name: 'formulaSection',
  title: 'Formula Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'content', title: 'Content', type: 'text' }),
  ]
})`,

  'insightsSectionType.ts': `import { defineField, defineType } from 'sanity'

export const insightsSectionType = defineType({
  name: 'insightsSection',
  title: 'Insights Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
  ]
})`,

};

const documents = {
  'pageType.ts': `import { defineField, defineType } from 'sanity'

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
})`
};

for (const [filename, content] of Object.entries({...singletons, ...objects, ...documents})) {
  fs.writeFileSync(path.join(schemaDir, filename), content);
}

// Update index.ts
let indexContent = fs.readFileSync(path.join(schemaDir, 'index.ts'), 'utf-8');
const newTypes = Object.keys({...singletons, ...objects, ...documents}).map(f => f.replace('.ts', ''));

const imports = newTypes.map(t => \`import { \${t} } from './\${t}'\`).join('\\n');
const exports = newTypes.join(',\\n  ');

indexContent = \`import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { serviceType } from './serviceType'
import { testimonialType } from './testimonialType'
import { insightType } from './insightType'
import { siteSettingsType } from './siteSettingsType'
\${imports}

export const schemaTypes: SchemaTypeDefinition[] = [
  projectType,
  serviceType,
  testimonialType,
  insightType,
  siteSettingsType,
  \${exports}
]
\`;

fs.writeFileSync(path.join(schemaDir, 'index.ts'), indexContent);

console.log("Schemas generated successfully!");
