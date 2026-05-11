# Guía de Despliegue — Calacas Prints
## Hostinger Business Node.js + Sanity CMS

---

## Antes de subir el sitio

### 1. Configurar Sanity CMS

1. Ve a [sanity.io/manage](https://sanity.io/manage) e inicia sesión
2. Busca el proyecto **"calacas-prints"** (Project ID: `k6geulcb`)
3. En la sección **API → Tokens**, crea un token con permisos **Editor**
4. Guarda ese token, lo necesitas para el paso siguiente

### 2. Cargar el contenido inicial a Sanity

En tu computadora, dentro de la carpeta del proyecto:

```bash
# Crea el archivo de variables de entorno
cp .env.example .env.local

# Edita .env.local y pega tu token de Sanity:
# SANITY_API_TOKEN=skXXXXXXXXXXX...

# Carga el contenido inicial (servicios, portafolio, configuración)
node scripts/seed-sanity.mjs
```

Después de esto, todo el contenido estará en Sanity y podrás editarlo desde el panel.

### 3. Actualizar redes sociales

En Sanity Studio (`/studio`), ve a **Configuración del Negocio** y actualiza:
- Instagram URL
- Facebook URL
- Twitter/X URL

---

## Subir a Hostinger

### Paso 1 — Preparar el proyecto

En tu computadora, dentro de la carpeta del proyecto:

```bash
# Instalar dependencias (por si acaso)
npm install

# Construir el proyecto para producción
npm run build
```

El build genera una carpeta `.next/` con el sitio compilado.

### Paso 2 — Subir archivos a Hostinger

Sube los siguientes archivos/carpetas al servidor via **SFTP** (usa FileZilla o el administrador de archivos de Hostinger):

```
✅ .next/          (carpeta del build — OBLIGATORIA)
✅ public/         (imágenes, favicon, robots.txt, sitemap.xml)
✅ package.json
✅ next.config.js
✅ ecosystem.config.js
❌ node_modules/   (NO subir — se instalan en el servidor)
❌ .env.local      (NO subir — se configura en el servidor)
❌ src/            (NO necesario en producción)
```

### Paso 3 — Instalar dependencias en Hostinger

Conéctate por SSH a tu servidor Hostinger y ejecuta:

```bash
# Ir a la carpeta del proyecto
cd ~/public_html   # o la ruta donde subiste los archivos

# Instalar dependencias de producción
npm install --omit=dev
```

### Paso 4 — Configurar variables de entorno en Hostinger

En el panel de Hostinger:
1. Ve a **Hosting → tu dominio → Node.js**
2. Busca la sección **Environment Variables**
3. Agrega estas variables:

| Variable | Valor |
|----------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `k6geulcb` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` |
| `NODE_ENV` | `production` |

> **Nota:** El `SANITY_API_TOKEN` NO es necesario en el servidor, solo se usó para el seed inicial.

### Paso 5 — Iniciar la aplicación con PM2

```bash
# Iniciar la app
pm2 start ecosystem.config.js --env production

# Guardar la configuración para que arranque automáticamente
pm2 save

# Verificar que está corriendo
pm2 status
```

### Paso 6 — Configurar el dominio en Hostinger

1. En el panel de Hostinger ve a **Node.js → Application URL**
2. Asegúrate de que el dominio `calacasprints.com` apunta a la aplicación Node.js
3. Activa el **SSL gratuito** (Let's Encrypt) desde **SSL → Force HTTPS**

---

## Actualizar el sitio (después del lanzamiento)

Cada vez que quieras actualizar el código:

```bash
# En tu computadora
npm run build

# Subir la carpeta .next/ nueva al servidor (SFTP)
# Luego en el servidor por SSH:
pm2 restart calacas-prints
```

Para cambiar textos, imágenes o servicios, el cliente puede hacerlo directamente desde:

**`https://calacasprints.com/studio`**

---

## Panel de administración Sanity

**URL:** `https://calacasprints.com/studio`

Desde ahí el cliente puede editar sin tocar código:
- Información del negocio (teléfono, email, dirección, horarios)
- Servicios (agregar, editar, ordenar)
- Portafolio de productos (agregar fotos, categorías)
- Redes sociales
- Estadísticas del Hero (ej: "10K+ Prints Made")

---

## Soporte

Si algo falla, revisar logs con:
```bash
pm2 logs calacas-prints
```
