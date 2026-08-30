# XUUMIEL · Catálogo 2026

Landing promocional interactiva para el catálogo XUUMIEL / Mieles de Quintana Roo México. El proyecto usa React, TypeScript, Vite y Tailwind CSS, con las fichas de producto, precios y referencias visuales tomadas del catálogo 2026 proporcionado.

## Ejecución local

El proyecto requiere Node.js 22 y `pnpm` 10. Desde la raíz del repositorio, instala dependencias con `pnpm install` y ejecuta `pnpm dev`. El sitio estará disponible en la URL local que muestre Vite.

| Acción | Comando |
| --- | --- |
| Instalar dependencias | `pnpm install` |
| Iniciar entorno local | `pnpm dev` |
| Revisar tipos | `pnpm check` |
| Crear versión de producción | `pnpm build` |

## Importar y desplegar con Lovable

En Lovable, selecciona la opción para **importar un repositorio de GitHub** y elige este proyecto. La plataforma reconocerá la aplicación Vite/React. Para el despliegue, utiliza `pnpm build` como comando de compilación y `dist/public` como directorio de salida.

Los recursos del catálogo tienen dos rutas coordinadas: la previsualización actual utiliza las rutas administradas por Manus, mientras que al abrirse fuera de ese entorno se cargan desde URL públicas estables. De este modo, Lovable puede compilar la página importada sin necesitar archivos binarios pesados dentro del repositorio.

## Sincronización de cambios

La fuente de verdad para los cambios es la rama `main` de GitHub. Cuando se realicen ajustes desde este entorno, se confirmarán y subirán a esa rama. Lovable deberá permanecer conectado al mismo repositorio y configurado para actualizar su proyecto a partir de `main`; cuando Lovable introduzca modificaciones, conviene sincronizarlas o trabajarlas en una rama antes de continuar ajustes desde aquí, para evitar sobrescribir trabajo ajeno.

> El texto de beneficios y los usos tradicionales se presenta como referencia del catálogo fuente. Revísalo antes de utilizarlo en campañas, etiquetado o comunicación comercial.
