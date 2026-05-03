import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'calacas-prints',
  title: 'Calacas Prints — Panel de Administración',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido del Sitio')
          .items([
            // Singleton: business settings
            S.listItem()
              .title('⚙️ Configuración del Negocio')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Configuración del Negocio')
              ),
            S.divider(),
            // Services list
            S.documentTypeListItem('service').title('🖨️ Servicios'),
            // Portfolio list
            S.documentTypeListItem('portfolioItem').title('🎨 Portafolio / Productos'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
