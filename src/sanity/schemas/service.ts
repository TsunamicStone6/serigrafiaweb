import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Servicio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del servicio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Ícono',
      type: 'string',
      options: {
        list: [
          { title: '👕 Ropa / Apparel', value: 'apparel' },
          { title: '📦 Accesorios', value: 'accessories' },
          { title: '🛍️ Tote Bags / Promocional', value: 'promotional' },
        ],
        layout: 'radio',
      },
      initialValue: 'apparel',
    }),
    defineField({
      name: 'benefits',
      title: 'Características / Beneficios',
      type: 'array',
      description: 'Lista de puntos que aparecen debajo de la descripción',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición (1, 2, 3…)',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Orden',
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
