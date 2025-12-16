# Guía de Deployment - Ordefy Waitlist (Actualizada)

## ✅ Cambios Implementados

### 1. Favicon Optimizado
- ✅ Creado `public/favicon.ico` (formato ICO real con iconos 16x16 y 32x32)
- ✅ Creado `public/favicon.svg` (versión vectorial)
- ✅ Configurado en `index.html` con soporte multi-formato
- Diseño: Logo "O" en verde lima (#BAEA59) sobre fondo negro

### 2. SEO Completo
**Meta tags en `index.html`:**
- ✅ Título optimizado: "Ordefy - Plataforma de E-commerce para Paraguay | Acceso Anticipado"
- ✅ Descripción extendida con keywords
- ✅ Keywords: ecommerce paraguay, tienda online paraguay, etc.
- ✅ Open Graph completo (Facebook)
- ✅ Twitter Cards
- ✅ Geo tags (región PY)
- ✅ Canonical URL
- ✅ robots meta tag: "index, follow"

**Archivos SEO:**
- ✅ `public/robots.txt` - Permite crawling y referencia sitemap
- ✅ `public/sitemap.xml` - Sitemap con 3 URLs principales

### 3. Seguridad: Webhook Oculto
**Antes:**
```javascript
// ❌ Webhook expuesto en el cliente
fetch('https://n8n.thebrightidea.ai/webhook/waitlist', {...})
```

**Ahora:**
```javascript
// ✅ Webhook oculto en serverless function
fetch('/api/submit-waitlist', {...})
```

**Implementación:**
- ✅ Creado `api/submit-waitlist.js` - Vercel Serverless Function
- ✅ URL del webhook n8n ahora solo existe en el servidor
- ✅ CORS configurado automáticamente
- ✅ Validación de datos en el servidor
- ✅ Manejo de errores mejorado

### 4. Configuración Vite
- ✅ Removido `lovable-tagger` (dependency innecesaria)
- ✅ Configuración simplificada
- ✅ Build optimizado

## 📦 Estructura de Archivos

```
Ordefy-Waitlist/
├── api/
│   └── submit-waitlist.js          # Serverless API route (oculta webhook)
├── public/
│   ├── favicon.ico                 # Favicon ICO real (5.3KB)
│   ├── favicon.svg                 # Favicon vectorial
│   ├── robots.txt                  # SEO: permite crawling
│   └── sitemap.xml                 # SEO: mapa del sitio
├── src/
│   ├── pages/
│   │   ├── Whitelist.tsx          # Ahora usa /api/submit-waitlist
│   │   └── WaitlistSuccess.tsx
│   ├── components/ui/
│   ├── hooks/
│   └── main.tsx
├── index.html                      # SEO optimizado
├── vite.config.ts                  # Limpio, sin lovable-tagger
├── vercel.json                     # Config para Vercel
└── CLAUDE.md                       # Documentación actualizada
```

## 🚀 Deployment en Vercel

### Opción 1: Deploy desde Git (Recomendado)

1. **Inicializar Git (si no existe)**
   ```bash
   git init
   git add .
   git commit -m "feat: SEO optimization and webhook security"
   ```

2. **Crear repositorio en GitHub**
   ```bash
   # Crear repo en github.com, luego:
   git remote add origin https://github.com/tu-usuario/ordefy-waitlist.git
   git branch -M main
   git push -u origin main
   ```

3. **Importar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click "New Project"
   - Importa desde GitHub
   - Vercel detectará automáticamente la configuración
   - Click "Deploy"

### Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy a producción
vercel --prod
```

## ⚙️ Configuración Post-Deployment

### 1. Actualizar URLs en SEO
Edita `index.html` y `public/sitemap.xml` con tu dominio real:
```
https://ordefy.com/ → https://tu-dominio.vercel.app/
```

### 2. Verificar Webhook
El webhook está en `api/submit-waitlist.js` línea 31. Si necesitas cambiarlo:
```javascript
const webhookUrl = 'https://n8n.thebrightidea.ai/webhook/waitlist';
```

### 3. Verificar CORS en n8n
Asegúrate de que tu webhook n8n tenga estos headers:
```json
{
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
}
```

## 🧪 Testing

### Local
```bash
npm run dev
# Abre http://localhost:8080
```

### Build de Producción
```bash
npm run build
npm run preview
```

### Testing de API Route (una vez deployado)
```bash
curl -X POST https://tu-dominio.vercel.app/api/submit-waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "businessName": "Test Business",
    "website": "test.com",
    "city": "Asunción",
    "monthlyRevenue": "$5000",
    "monthlyOrders": "100",
    "mainProducts": "Test products",
    "phone": "+595 xxx xxx",
    "timestamp": "2025-11-06T00:00:00.000Z"
  }'
```

## 📊 Verificación SEO

### Google Search Console
1. Agrega tu sitio: [search.google.com/search-console](https://search.google.com/search-console)
2. Verifica propiedad del dominio
3. Envía el sitemap: `https://tu-dominio.com/sitemap.xml`

### Testing SEO
- **Meta tags**: [metatags.io](https://metatags.io/)
- **Open Graph**: [opengraph.xyz](https://www.opengraph.xyz/)
- **Lighthouse**: Chrome DevTools → Lighthouse tab

### Verificar Favicon
- Visita tu sitio en múltiples navegadores
- Verifica que el favicon se muestra correctamente
- Comprueba en tabs y bookmarks

## 🔒 Seguridad

### Webhook Oculto
- ✅ URL del webhook NO aparece en el bundle del cliente
- ✅ Imposible extraer la URL desde el código JavaScript deployado
- ✅ Solo el servidor conoce la URL del webhook
- ✅ Validación adicional en el servidor

### Headers de Seguridad
Considera agregar estos headers en `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## 📈 Monitoreo

### Vercel Analytics
- Automático en deployments de Vercel
- Ver en dashboard de Vercel

### Logs de API
```bash
vercel logs [deployment-url]
```

## 🐛 Troubleshooting

### Favicon no se muestra
- Clear cache del navegador
- Verificar que `/favicon.ico` responde 200
- Esperar propagación de CDN (puede tomar minutos)

### API route no funciona
- Verificar que la carpeta `/api` se deployó
- Check logs: `vercel logs`
- Verificar CORS en n8n webhook

### SEO no indexa
- Verificar `robots.txt` permite crawling
- Esperar 1-2 semanas para indexación inicial
- Enviar sitemap en Google Search Console

## 📝 Mantenimiento

### Actualizar Sitemap
Edita `public/sitemap.xml` cuando agregues nuevas páginas.

### Cambiar Webhook
Edita `api/submit-waitlist.js` línea 31 y redeploya.

### Actualizar Meta Tags
Edita `index.html` para cambios en SEO.

## 🎯 Checklist Pre-Deploy

- [ ] Build funciona: `npm run build`
- [ ] Favicon se ve en preview
- [ ] Meta tags completos
- [ ] API route funciona localmente
- [ ] Git commit con todos los cambios
- [ ] Webhook n8n tiene CORS configurado
- [ ] URLs actualizadas (sitemap, index.html)

## 🚀 Deploy!

```bash
vercel --prod
```

¡Listo para producción! 🎉
