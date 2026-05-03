import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del Negocio',
  type: 'document',
  groups: [
    { name: 'business', title: '📋 Información General' },
    { name: 'about', title: '📖 Sobre Nosotros' },
    { name: 'hours', title: '🕐 Horarios' },
    { name: 'social', title: '📱 Redes Sociales' },
  ],
  fields: [
    // ── Business Info ──────────────────────────────────────────────
    defineField({
      name: 'businessName',
      title: 'Nombre del negocio',
      type: 'string',
      group: 'business',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Eslogan (tagline)',
      type: 'string',
      group: 'business',
      description: 'Ej: "Print what defines your brand"',
    }),
    defineField({
      name: 'description',
      title: 'Descripción breve del negocio',
      type: 'text',
      rows: 3,
      group: 'business',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      group: 'business',
      description: 'Ej: +1 (415) 763-2988',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'business',
    }),
    defineField({
      name: 'address',
      title: 'Dirección completa',
      type: 'string',
      group: 'business',
    }),
    defineField({
      name: 'founded',
      title: 'Año de fundación',
      type: 'number',
      group: 'business',
    }),
    defineField({
      name: 'stats',
      title: 'Estadísticas destacadas',
      type: 'array',
      group: 'business',
      description: 'Ej: "10K+ Prints", "12+ Years Experience"',
      of: [
        {
          type: 'object',
          name: 'stat',
          fields: [
            { name: 'value', title: 'Número / Valor (ej: 10K+)', type: 'string' },
            { name: 'label', title: 'Etiqueta (ej: Prints Made)', type: 'string' },
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
      title: 'Título de "Sobre Nosotros"',
      type: 'string',
      group: 'about',
      description: 'Ej: MISSION DISTRICT ROOTS',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'Descripción principal',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'aboutStory',
      title: 'Historia del negocio',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Foto de la tienda / local',
      type: 'image',
      options: { hotspot: true },
      group: 'about',
    }),

    // ── Business Hours ──────────────────────────────────────────────
    defineField({
      name: 'businessHours',
      title: 'Horarios de atención',
      type: 'array',
      group: 'hours',
      of: [
        {
          type: 'object',
          name: 'dayHours',
          fields: [
            {
              name: 'day',
              title: 'Día de la semana',
              type: 'string',
              options: {
                list: [
                  { title: 'Lunes', value: 'Monday' },
                  { title: 'Martes', value: 'Tuesday' },
                  { title: 'Miércoles', value: 'Wednesday' },
                  { title: 'Jueves', value: 'Thursday' },
                  { title: 'Viernes', value: 'Friday' },
                  { title: 'Sábado', value: 'Saturday' },
                  { title: 'Domingo', value: 'Sunday' },
                ],
              },
            },
            {
              name: 'openTime',
              title: 'Hora de apertura',
              type: 'string',
              description: 'Ej: 9:00 AM',
            },
            {
              name: 'closeTime',
              title: 'Hora de cierre',
              type: 'string',
              description: 'Ej: 6:00 PM',
            },
            {
              name: 'isClosed',
              title: '¿Cerrado este día?',
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
              const dayLabels: Record<string, string> = {
                Monday: 'Lunes', Tuesday: 'Martes', Wednesday: 'Miércoles',
                Thursday: 'Jueves', Friday: 'Viernes', Saturday: 'Sábado', Sunday: 'Domingo',
              }
              return {
                title: dayLabels[day] || day,
                subtitle: closed ? '🔴 Cerrado' : `🟢 ${open} – ${close}`,
              }
            },
          },
        },
      ],
    }),

    // ── Social Media ──────────────────────────────────────────────
    defineField({
      name: 'instagram',
      title: 'Instagram (URL completa)',
      type: 'url',
      group: 'social',
      description: 'Ej: https://instagram.com/calacasprints',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook (URL completa)',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter / X (URL completa)',
      type: 'url',
      group: 'social',
    }),
  ],
  preview: {
    prepare() {
      return { title: '⚙️ Configuración del Negocio' }
    },
  },
})
