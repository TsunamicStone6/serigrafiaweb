import { defineField, defineType } from 'sanity'

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'T-Shirts', value: 'T-Shirts' },
          { title: 'Hoodies', value: 'Hoodies' },
          { title: 'Accessories', value: 'Accessories' },
          { title: 'Hats', value: 'Hats' },
          { title: 'Tote Bags', value: 'Tote Bags' },
          { title: 'Merchandise', value: 'Merchandise' },
          { title: 'Events', value: 'Events' },
          { title: 'Apparel', value: 'Apparel' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: '📷 Product Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload image here. Recommended formats: WebP, PNG, JPG.',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL (migration only)',
      type: 'string',
      hidden: true,
      description: 'Temporary field for local image migration.',
    }),
    defineField({
      name: 'description',
      title: 'Description (for SEO)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number appears first',
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: 'Manual Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
