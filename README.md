# Ordefy Waitlist - Deployment Package

Este paquete contiene solo las páginas de la waitlist para deployment independiente en Vercel.

## Contenido

- `/src/pages/` - Páginas de la waitlist
  - `Whitelist.tsx` - Formulario principal de registro (typeform-style)
  - `WaitlistSuccess.tsx` - Página de confirmación con información de hype
  
- `/src/components/ui/` - Componentes UI necesarios
  - `shader-animation.tsx` - Animación de fondo con Three.js
  - Otros componentes UI de shadcn necesarios

- `/src/hooks/` - Hooks necesarios
  - `useLocalStorage.ts` - Hook para manejo de localStorage
  - `use-toast.ts` - Hook para notificaciones

## Estructura de URLs

- `/whitelist` - Formulario de registro
- `/waitlist-success` - Página de confirmación post-registro

## Webhook

Los datos se envían a: `https://n8n.thebrightidea.ai/webhook/waitlist`

### Formato de datos enviados:
```json
{
  "email": "usuario@email.com",
  "businessName": "Mi Tienda",
  "website": "www.mitienda.com",
  "city": "Asunción",
  "monthlyRevenue": "$10,000",
  "monthlyOrders": "150",
  "mainProducts": "Ropa, accesorios",
  "phone": "+595 xxx xxx xxx",
  "timestamp": "2025-10-30T03:19:05.709Z"
}
```

## Deploy en Vercel

1. Copia esta carpeta a un nuevo repositorio
2. Conecta el repositorio a Vercel
3. Vercel detectará automáticamente Vite
4. Deploy automático

## Notas

- La animación shader solo se muestra una vez (se guarda en localStorage)
- Diseño minimalista con fondo negro y acento verde lime (primary)
- Formulario tipo typeform con una pregunta a la vez
- Responsive y optimizado para móvil
