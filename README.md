This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy en Vercel

Este proyecto está desplegado en: **https://rommel-recetas.vercel.app**

### Requisitos previos

- Cuenta en [Vercel](https://vercel.com)
- Node.js instalado

### Pasos para desplegar

1. **Instalar Vercel CLI** (si no lo tienes):
```bash
npm install -g vercel
```

2. **Iniciar sesión**:
```bash
vercel login
```
Esto abrirá el navegador para autenticarte.

3. **Deploy de preview** (para probar cambios):
```bash
vercel
```

4. **Deploy a producción**:
```bash
vercel --prod
```

### Configuración del proyecto

El proyecto está vinculado a: `rommelayalas-projects/rommel-recetas`

Para cambiar configuración (dominio, variables de entorno, etc.):
- Dashboard: https://vercel.com/rommelayalas-projects/rommel-recetas/settings

### Despliegue automático

El proyecto está conectado a GitHub. Cada push a la rama principal se despliega automáticamente en producción.
