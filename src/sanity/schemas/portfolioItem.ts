import { defineField, defineType } from 'sanity'

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Producto / Diseño',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
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
      title: '📷 Imagen del producto',
      type: 'image',
      options: { hotspot: true },
      description: 'Sube la imagen aquí. Formatos recomendados: WebP, PNG, JPG.',
    }),
    defineField({
      name: 'imageUrl',
      title: 'URL de imagen (solo migración)',
      type: 'string',
      hidden: true,
      description: 'Campo temporal para migración de imágenes locales.',
    }),
    defineField({
      name: 'description',
      title: 'Descripción (para SEO)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número más bajo aparece primero',
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: 'Orden manual',
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
