import { defineField, defineType } from 'sanity'

export const comingSoonItem = defineType({
  name: 'comingSoonItem',
  title: 'Coming Soon Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Design name (e.g., "¡Guapea!")',
    }),
    defineField({
      name: 'image',
      title: '📷 Product Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      description: 'Upload the coming soon design image. Recommended formats: WebP, PNG, JPG.',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL (migration only)',
      type: 'string',
      hidden: true,
      description: 'Temporary field for local image migration.',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      description: 'Controls the display order (0 = first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      order: 'order',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
        subtitle: `Order: ${selection.order}`,
      }
    },
  },
})
