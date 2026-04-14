# Serigrafia Landing Page

Landing page moderna y responsive para negocio de serigrafía.

## 🎯 Características

- ✅ Landing page estática (sin backend)
- ✅ Responsive design (mobile-first)
- ✅ Galería con lightbox modal
- ✅ Sin librerías extras (solo React + TailwindCSS)
- ✅ Optimizado para SEO
- ✅ Performance rápido (Next.js SSG)

## 🚀 Tech Stack

- **Framework**: Next.js 14+
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Hosting**: Vercel

## 📋 Estructura del Proyecto

```
serigrafia/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Hero, Gallery, About, Contact
│   │   ├── ui/             # Button, Card, Modal
│   │   └── common/         # Container
│   ├── config/             # Site configuration (SOLID - DIP)
│   ├── types/              # TypeScript types
│   ├── hooks/              # Custom React hooks
│   └── utils/              # Constants and utilities
├── public/                 # Static assets
├── tailwind.config.ts      # TailwindCSS config
├── tsconfig.json           # TypeScript config
└── package.json
```

## 🏗️ Principios de Arquitectura

### SOLID Principles

- **S**ingle Responsibility: Cada componente tiene una responsabilidad clara
- **O**pen/Closed: Componentes extensibles sin modificar
- **L**iskov Substitution: Interfaz consistente y predecible
- **I**nterface Segregation: Props específicas, no "god props"
- **D**ependency Inversion: Configuración centralizada en `site.config.ts`

### Clean Code

- Nombres claros y descriptivos
- Componentes pequeños y testables
- Sin lógica duplicada (DRY)
- Fácil de mantener y escalar

## 🔧 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor
npm start
```

## 📝 Configuración

Edita `src/config/site.config.ts` para:

- Cambiar datos de la empresa
- Agregar nuevos proyectos al portfolio
- Actualizar redes sociales
- Modificar servicios

## 🖼️ Agregar Imágenes

1. Copia imágenes a `public/images/portfolio/`
2. Actualiza `site.config.ts` con las nuevas rutas
3. Las imágenes se optimizan automáticamente con Next.js

## 📱 Responsivo

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## 🚀 Deploy en Vercel

```bash
# Conectar repositorio a Vercel
# Deploy automático en cada push a main
```

## 📄 Licencia

Proyecto privado - Todos los derechos reservados.
