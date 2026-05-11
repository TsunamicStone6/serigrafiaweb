import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Business Settings',
  type: 'document',
  groups: [
    { name: 'business', title: '📋 General Info' },
    { name: 'about', title: '📖 About Us' },
    { name: 'hours', title: '🕐 Business Hours' },
    { name: 'social', title: '📱 Social Media' },
  ],
  fields: [
    // ── Business Info ──────────────────────────────────────────────
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      group: 'business',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'business',
      description: 'Ex: "Print what defines your brand"',
    }),
    defineField({
      name: 'description',
      title: 'Short Business Description',
      type: 'text',
      rows: 3,
      group: 'business',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      group: 'business',
      description: 'Ex: +1 (415) 763-2988',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'business',
    }),
    defineField({
      name: 'address',
      title: 'Full Address',
      type: 'string',
      group: 'business',
    }),
    defineField({
      name: 'founded',
      title: 'Founded Year',
      type: 'number',
      group: 'business',
    }),
    defineField({
      name: 'stats',
      title: 'Hero Stats',
      type: 'array',
      group: 'business',
      description: 'Ex: "10K+ Prints", "12+ Years Experience"',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            { name: 'value', title: 'Value (ex: 10K+)', type: 'string' },
            { name: 'label', title: 'Label (ex: Prints Made)', type: 'string' },
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
    }),

    // ── About Section ──────────────────────────────────────────────
    defineField({
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
      group: 'about',
      description: 'Ex: MISSION DISTRICT ROOTS',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'Main Description',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'aboutStory',
      title: 'Business Story',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Store / Location Photo',
      type: 'image',
      options: { hotspot: true },
      group: 'about',
    }),

    // ── Business Hours ──────────────────────────────────────────────
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'array',
      group: 'hours',
      of: [
        {
          type: 'object',
          name: 'dayHours',
          fields: [
            {
              name: 'day',
              title: 'Day of the Week',
              type: 'string',
              options: {
                list: [
                  { title: 'Monday', value: 'Monday' },
                  { title: 'Tuesday', value: 'Tuesday' },
                  { title: 'Wednesday', value: 'Wednesday' },
                  { title: 'Thursday', value: 'Thursday' },
                  { title: 'Friday', value: 'Friday' },
                  { title: 'Saturday', value: 'Saturday' },
                  { title: 'Sunday', value: 'Sunday' },
                ],
              },
            },
            {
              name: 'openTime',
              title: 'Opening Time',
              type: 'string',
              description: 'Ex: 9:00 AM',
            },
            {
              name: 'closeTime',
              title: 'Closing Time',
              type: 'string',
              description: 'Ex: 6:00 PM',
            },
            {
              name: 'isClosed',
              title: 'Closed this day?',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              day: 'day',
              open: 'openTime',
              close: 'closeTime',
              closed: 'isClosed',
            },
            prepare({ day, open, close, closed }) {
              return {
                title: day,
                subtitle: closed ? '🔴 Closed' : `🟢 ${open} – ${close}`,
              }
            },
          },
        },
      ],
    }),

    // ── Social Media ──────────────────────────────────────────────
    defineField({
      name: 'instagram',
      title: 'Instagram (full URL)',
      type: 'url',
      group: 'social',
      description: 'Ex: https://instagram.com/calacasprints',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook (full URL)',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter / X (full URL)',
      type: 'url',
      group: 'social',
    }),
  ],
  preview: {
    prepare() {
      return { title: '⚙️ Business Settings' }
    },
  },
})
