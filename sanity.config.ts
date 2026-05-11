import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'calacas-prints',
  title: 'Calacas Prints — Admin Panel',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Site Content')
          .items([
            // Singleton: business settings
            S.listItem()
              .title('⚙️ Business Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Business Settings')
              ),
            S.divider(),
            // Services list
            S.documentTypeListItem('service').title('🖨️ Services'),
            // Portfolio list
            S.documentTypeListItem('portfolioItem').title('🎨 Portfolio / Products'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
