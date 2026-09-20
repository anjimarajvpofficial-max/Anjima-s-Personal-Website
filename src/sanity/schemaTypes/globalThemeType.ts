import { defineField, defineType } from 'sanity'

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
})