# Galería y administración

Estado actual: la galería pública consume `assets/data/gallery.json`. El archivo está vacío de forma intencional porque todavía no existen fotografías reales verificadas y autorizadas para publicar.

No se incluyó una pantalla de carga simulada. Un administrador real necesita autenticación, almacenamiento persistente y validaciones del lado del servidor; ninguna de esas garantías puede obtenerse sólo con HTML y JavaScript estático.

## Arquitectura recomendada

Para mantener el despliegue estático en Vercel, la opción propuesta es:

- Supabase Auth para una cuenta administrativa con MFA.
- Supabase Storage para originales y variantes optimizadas.
- PostgreSQL para metadatos: descripción, fecha, tipo de intervención, texto alternativo, orden y estado de publicación.
- Una función de servidor en Vercel para crear cargas firmadas y validar tipo MIME, tamaño y dimensiones.
- La web pública consulta sólo registros con `status = 'published'`.

## Variables pendientes

```text
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=   # sólo en servidor; nunca en el navegador
ADMIN_EMAIL=
```

## Controles mínimos

1. Limitar el acceso administrativo por usuario autenticado y rol.
2. Activar Row Level Security; el rol público sólo puede leer trabajos publicados.
3. Aceptar JPEG, PNG, WebP o AVIF, con máximo de 12 MB y dimensiones mínimas definidas.
4. Eliminar metadatos EXIF antes de publicar.
5. Generar miniatura y versión grande; conservar el original fuera del acceso público directo.
6. Exigir descripción, texto alternativo, fecha, tipo de trabajo y autorización de uso.
7. Registrar alta, edición, publicación y eliminación.
8. Usar borrado lógico y una política de retención antes de purgar archivos.

## Contrato público de datos

```json
[
  {
    "image": "https://cdn.example/trabajo.webp",
    "alt": "Descripción objetiva de la fotografía",
    "type": "Reparación",
    "description": "Piquete estabilizado en parabrisas delantero",
    "date": "2026-10"
  }
]
```

Cuando se confirmen proveedor, credenciales y fotografías, se debe reemplazar el adaptador JSON por el endpoint de sólo lectura. Hasta entonces la experiencia pública muestra un estado vacío honesto.
