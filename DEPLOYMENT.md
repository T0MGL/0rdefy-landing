# Guía de Deployment - Ordefy Waitlist

## Opción 1: Vercel (Recomendado)

### Método A: Desde GitHub

1. **Crear un nuevo repositorio en GitHub**
   ```bash
   cd waitlist-deploy
   git init
   git add .
   git commit -m "Initial waitlist deployment"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/ordefy-waitlist.git
   git push -u origin main
   ```

2. **Conectar a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa el repositorio de GitHub
   - Vercel detectará automáticamente Vite
   - Haz clic en "Deploy"

3. **Configurar dominio personalizado (opcional)**
   - En el dashboard del proyecto en Vercel
   - Ve a "Settings" → "Domains"
   - Agrega tu dominio personalizado

### Método B: Desde CLI de Vercel

1. **Instalar Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd waitlist-deploy
   vercel
   ```

3. **Deploy a producción**
   ```bash
   vercel --prod
   ```

## Opción 2: Netlify

1. **Desde la CLI**
   ```bash
   npm i -g netlify-cli
   cd waitlist-deploy
   netlify deploy --prod
   ```

2. **Configuración necesaria**
   - El archivo `vercel.json` también funciona con Netlify
   - Netlify detectará automáticamente Vite

## Opción 3: Build Manual + Hosting Estático

1. **Build local**
   ```bash
   cd waitlist-deploy
   npm install
   npm run build
   ```

2. **Upload**
   - Los archivos compilados estarán en `dist/`
   - Sube todo el contenido de `dist/` a tu hosting
   - Configura rewrites para SPA (Single Page Application)

## Variables de Entorno

No hay variables de entorno requeridas. El webhook está hardcoded:
```
https://n8n.thebrightidea.ai/webhook/waitlist
```

Si necesitas cambiarlo, edita `src/pages/Whitelist.tsx` línea 95.

## CORS Configuration

Asegúrate de que tu webhook n8n tenga configurado:
```json
{
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
}
```

## URLs del Sitio

Una vez deployado, las rutas serán:
- `https://tu-dominio.com/` → Landing de registro
- `https://tu-dominio.com/whitelist` → Landing de registro
- `https://tu-dominio.com/waitlist-success` → Página de confirmación

## Testing Local

```bash
cd waitlist-deploy
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173`

## Estructura Final

```
waitlist-deploy/
├── src/
│   ├── pages/
│   │   ├── Whitelist.tsx          # Formulario principal
│   │   └── WaitlistSuccess.tsx    # Página de confirmación
│   ├── components/ui/
│   │   ├── shader-animation.tsx   # Animación Three.js
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── hooks/
│   ├── lib/
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Troubleshooting

### Rutas no funcionan después del deploy
- Verifica que `vercel.json` esté presente
- Asegúrate de que el hosting soporte SPA rewrites

### Estilos no se cargan
- Verifica que `index.css` esté importado en `main.tsx`
- Revisa que `tailwind.config.ts` apunte a los archivos correctos

### Animación shader no funciona
- Three.js requiere WebGL - verifica soporte del navegador
- La animación se muestra solo la primera vez (localStorage)

## Soporte

Para problemas con el webhook, contacta al equipo de backend.
Para problemas con el deployment, revisa los logs en Vercel/Netlify.
