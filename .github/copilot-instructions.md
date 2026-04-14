# Copilot Project Instructions

Este proyecto es una landing page para un negocio de serigrafía.

## Principios de Desarrollo

### Arquitectura

- **Next.js 14 SSG**: Landing estática, sin backend
- **TypeScript**: Type-safe
- **TailwindCSS**: Utility-first CSS
- **SOLID Principles**: Código mantenible

### Estructura

```
Componentes → Reutilizables y responsabilidad única
Config      → Centralizada en site.config.ts
Types       → TypeScript types separados
Hooks       → Custom React hooks
```

### Reglas de Código

1. Cada componente tiene UNA responsabilidad
2. Props específicas (no "god props")
3. Configuración centralizada
4. Sin lógica de negocio en componentes UI
5. Nombres claros y descriptivos

## Workflow

### Agregar Nuevo Proyecto a Galería

1. Agrega imagen a `public/images/portfolio/`
2. Actualiza `src/config/site.config.ts` → `portfolio` array
3. La galería se actualiza automáticamente

### Cambiar Datos de la Empresa

1. Edita `src/config/site.config.ts`
2. Todas las secciones se actualizan automáticamente

### Crear Nuevo Componente

1. Responsabilidad única
2. Props tipadas (TypeScript)
3. Reutilizable
4. Ejemplo:

```typescript
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export function MyComponent({ title, onClick }: MyComponentProps) {
  return <div onClick={onClick}>{title}</div>;
}
```

## Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Production build
npm start        # Start server
npm run lint     # Lint code
```

## Deploy

- Vercel: Automático con cada push
- Build estático: `npm run build`
- Zero backend needed

## Performance

- Next.js SSG = HTML estático
- Images optimadas automáticamente
- TailwindCSS purged CSS
- Lighthouse: 90+
