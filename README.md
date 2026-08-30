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

## Desplegar la versión actual desde GitHub

Este repositorio contiene una aplicación estándar Vite/React. Puede desplegarse directamente desde GitHub en una plataforma que acepte compilaciones de Node.js y sitios estáticos: utiliza `pnpm build` como comando de compilación y `dist/public` como directorio de salida. Los recursos del catálogo usan URL públicas estables fuera del entorno de previsualización, por lo que el despliegue no depende de archivos binarios pesados en el repositorio.

## Flujo compatible con Lovable

La sincronización oficial de Lovable con GitHub es bidireccional, pero comienza dentro de Lovable: al vincular un proyecto, Lovable crea un repositorio nuevo y sincroniza una rama activa. Por esa limitación, **Lovable no permite importar ni vincular directamente un repositorio de GitHub que ya existe**, incluido este.

Si se desea trabajar con el editor y hospedaje de Lovable, primero debe crearse el proyecto en Lovable y conectarlo a GitHub desde **Project settings → Git → GitHub**. Lovable creará su propio repositorio privado y, desde ese momento, los cambios enviados a la rama sincronizada aparecerán en Lovable. Para conservar esta versión como punto de partida, será necesario copiar su código al proyecto de Lovable antes de establecer su sincronización o desplegar directamente este repositorio en un proveedor de hosting compatible.

> La fuente de verdad para la versión publicada por GitHub es la rama `main`. No conviene editar simultáneamente la misma rama desde varios entornos sin revisar primero los cambios, para evitar conflictos.

> El texto de beneficios y los usos tradicionales se presenta como referencia del catálogo fuente. Revísalo antes de utilizarlo en campañas, etiquetado o comunicación comercial.
