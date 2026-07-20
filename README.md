# FJ Club de Chile

Sitio web del club de propietarios de Toyota FJ Cruiser en Chile.
Next.js 15 (App Router) + Tailwind CSS v4 + Resend (formulario de contacto).

## Estructura de contenido (para editar sin tocar el diseño)

- `src/data/salidas.ts` — próximas salidas/eventos.
- `src/data/miembros.ts` — directorio de socios (⚠️ hoy tiene datos de EJEMPLO, reemplázalos por socios reales antes de publicar).
- `src/data/galeria.ts` — pie de foto/video de la galería.
- Las fotos son **placeholders con textura** (no hay fotos reales todavía). Para poner fotos reales:
  1. Agrega los archivos a `public/galeria/` (o súbelos a un servicio como Vercel Blob / Cloudinary).
  2. Reemplaza `<PlaceholderPhoto caption="..." />` por `<Image src="/galeria/tu-foto.jpg" ... />` en las páginas correspondientes.

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # completa RESEND_API_KEY y CONTACT_EMAIL_TO
npm run dev
```

Abre http://localhost:3000

## Formulario de contacto (Resend)

1. Crea una cuenta gratis en https://resend.com
2. Verifica el dominio `fjclubchile.cl` en Resend (registros DNS que te va a pedir).
3. Genera una API key y ponla en `RESEND_API_KEY`.
4. Cambia el remitente en `src/app/api/contacto/route.ts`:
   ```ts
   from: "FJ Club Chile <contacto@fjclubchile.cl>", // una vez verificado el dominio
   ```
   Mientras no verifiques el dominio, deja `onboarding@resend.dev` (funciona pero se ve menos profesional).

## Despliegue (mismo flujo que vciso.cl)

1. Sube este proyecto a un repo de GitHub nuevo (ej. `bgalvezchile/fjclub-web`).
2. Entra a https://vercel.com → **Add New Project** → importa el repo.
3. En **Environment Variables** agrega `RESEND_API_KEY` y `CONTACT_EMAIL_TO`.
4. Deploy.
5. En **Settings → Domains** agrega `fjclubchile.cl` (o el dominio que hayan reservado) y sigue las instrucciones de DNS que da Vercel para apuntar el dominio comprado en NIC.cl.

## Pendientes antes de publicar

- [ ] Reemplazar fotos placeholder por fotos reales del club.
- [ ] Reemplazar los socios de ejemplo en `miembros.ts` por socios reales (con su autorización).
- [ ] Confirmar fechas/lugares reales en `salidas.ts`.
- [ ] Verificar dominio en Resend y actualizar el remitente del email.
- [ ] Revisar textos de Instagram/email en `src/components/Footer.tsx`.
