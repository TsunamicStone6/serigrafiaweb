import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Customer Name',
      type: 'string',
      description: 'Ex: "Maria G." (first name + last initial is enough)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Review Text',
      type: 'text',
      rows: 4,
      description: 'Copy the review exactly as the customer wrote it. Max 400 characters.',
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: 'rating',
      title: 'Stars',
      type: 'number',
      options: { list: [5, 4, 3, 2, 1], layout: 'radio' },
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'source',
      title: 'Where was it posted?',
      type: 'string',
      options: { list: ['Yelp', 'Instagram', 'Facebook', 'Direct'], layout: 'radio' },
      initialValue: 'Direct',
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Link to the original review (optional)',
      type: 'url',
      description: 'Lets visitors verify the review. Strongly recommended.',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'service',
      title: 'Service (optional)',
      type: 'string',
      description: 'Ex: "Custom tees", "Hats", "Tote bags"',
    }),
    defineField({
      name: 'order',
      title: 'Display Order (1, 2, 3…)',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    { title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'author', subtitle: 'quote', rating: 'rating' },
    prepare: ({ title, subtitle, rating }) => ({
      title: `${'★'.repeat(rating || 0)} ${title}`,
      subtitle,
    }),
  },
})
