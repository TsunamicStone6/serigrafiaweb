import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: '👕 Apparel', value: 'apparel' },
          { title: '📦 Accessories', value: 'accessories' },
          { title: '🛍️ Tote Bags / Promotional', value: 'promotional' },
        ],
        layout: 'radio',
      },
      initialValue: 'apparel',
    }),
    defineField({
      name: 'benefits',
      title: 'Features / Benefits',
      type: 'array',
      description: 'Bullet points shown below the description',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Display Order (1, 2, 3…)',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
