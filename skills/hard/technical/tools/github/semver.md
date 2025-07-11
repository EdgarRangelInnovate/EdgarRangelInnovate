# 🏷️ Versionado Semántico (SemVer) y Control de Versiones del Proyecto

Mantener un control de versiones claro y consistente es fundamental para la evolución de cualquier proyecto, incluido este Sistema de Conocimiento Personal. El Versionado Semántico (SemVer) proporciona una convención universalmente entendida para numerar las versiones de software, lo que facilita la comprensión de la naturaleza de los cambios en cada actualización.

---

## ¿Qué es el Versionado Semántico (SemVer)?

SemVer es un esquema de versionado que utiliza un formato de tres números: `MAYOR.MENOR.PARCHE` (ej., `1.0.0`), donde cada número indica un tipo específico de cambio:

- **`MAYOR` (Major):** Se incrementa cuando hay cambios incompatibles en la API. Esto significa que si alguien (o alguna parte de tu sistema) dependía de algo en la versión anterior, podría romperse en esta nueva versión. Para un sitio de documentación, un cambio MAYOR podría ser una reestructuración fundamental de la URL de una sección importante, o una eliminación masiva de contenido relevante.
  - *Ejemplo:* `1.0.0` a `2.0.0`

- **`MENOR` (Minor):** Se incrementa cuando se añaden nuevas funcionalidades de forma compatible con versiones anteriores. Esto significa que los usuarios existentes pueden actualizar sin que su funcionalidad se rompa. Para un sitio de documentación, un cambio MENOR es la adición de una nueva sección completa (ej., un nuevo área de Hard Skills), o la expansión significativa de un tema existente con nuevos archivos.
  - *Ejemplo:* `1.0.0` a `1.1.0`

- **`PARCHE` (Patch):** Se incrementa cuando se realizan correcciones de errores compatibles con versiones anteriores. Para un sitio de documentación, un cambio PARCHE podría ser una corrección de un error tipográfico, una mejora menor en la redacción, la adición de un pequeño párrafo explicativo, o la corrección de un enlace roto.
  - *Ejemplo:* `1.0.0` a `1.0.1`

Además, se pueden usar **etiquetas opcionales** para pre-lanzamientos (ej., `-alpha`, `-beta`, `-rc`) o metadatos de construcción (ej., `+build123`).

---

## Proceso de Versionado y Publicación

Cada vez que se realizan cambios significativos en el contenido y se prepara una nueva publicación del sitio, se seguirá el siguiente proceso para aplicar SemVer:

### Paso 1: Realizar los Cambios en el Código (Contenido)

- Desarrollar y probar todas las adiciones, modificaciones o correcciones de contenido en la rama de trabajo (ej., `dev`, `feature-X`).
- Asegurarse de que todos los enlaces internos estén actualizados y funcionando.

### Paso 2: Determinar el Tipo de Incremento de Versión

Antes de fusionar los cambios a la rama principal (`main` o `master`) y publicar, evaluar la naturaleza de los cambios:

- **`PARCHE`:** Si solo se corrigieron errores, typos, enlaces rotos, o se hicieron ajustes menores de redacción que no añaden contenido nuevo sustancial.
- **`MENOR`:** Si se añadió una sección completamente nueva, se expandió significativamente un tema existente con sub-páginas, o se introdujo un nuevo "capítulo" de conocimiento.
- **`MAYOR`:** Si se reestructuró fundamentalmente la URL de una sección principal, se eliminó una sección completa y previamente referenciada, o se realizaron cambios que podrían requerir que los usuarios "reaprendan" la navegación de partes importantes. (Esto es menos común para sitios de documentación, pero posible si la arquitectura cambia drásticamente).

### Paso 3: Actualizar la Versión en `package.json`

La versión principal del proyecto se mantiene en el archivo `package.json`.

1. **Editar `package.json`:** Abre tu archivo `package.json` en la raíz del proyecto.
2. **Actualizar `version`:** Modifica el campo `"version"` (ej., de `"1.0.0"` a `"1.0.1"` o `"1.1.0"`) según el tipo de cambio determinado en el Paso 2.

### Paso 4: Automatización de la Versión y Fecha de Actualización

Para asegurar que la versión del proyecto y la fecha de la última actualización se reflejen correctamente en el sitio, se utilizan dos mecanismos que generan y actualizan el archivo `version-info.json` en la raíz del proyecto:

- **Hook `pre-commit` (para desarrollo local y redundancia):**
    Este hook se ejecuta automáticamente antes de cada `git commit`, asegurando que la información de versión y fecha actual (del sistema local) se actualice en `version-info.json`. Esto proporciona una redundancia y asegura que la información esté disponible localmente incluso sin un despliegue completo. Para la implementación y configuración detallada de este hook, consulta la [documentación de `pre-commit`][link-pre-commit].

- **[GitHub Actions][link-gh-actions] (para el despliegue automatizado):**
    [GitHub Actions][link-gh-actions] es el método principal y robusto para asegurar que la versión de `package.json` y la fecha de la última actualización (del build del [workflow][link-gh-workflow]) sean precisas en el sitio publicado. El [workflow][link-gh-workflow] de despliegue generará `version-info.json` con los datos del repositorio remoto y lo incluirá en el sitio desplegado. Para la configuración de [GitHub Actions][link-gh-actions] para el despliegue en GitHub Pages, consulta la [documentación de GitHub Pages][link-gh-pages].

### Paso 5: Crear un [Tag][link-tag] (Etiqueta) en Git (Opcional, pero recomendado)

Crear un tag en Git asociado a cada publicación es una buena práctica para tener un historial de versiones robusto en tu repositorio, incluso si [GitHub Actions][link-gh-actions] ya gestiona la versión interna del sitio. Para los detalles sobre la creación y gestión de tags en Git y labels en GitHub, consulta la [documentación de Labels y Tags][link-gh-labels].

### Paso 6: Publicar el Sitio (Deploy)

Una vez que la versión esté actualizada en `package.json` y los mecanismos de automatización estén en su lugar, el sitio se desplegará automáticamente. Para los detalles sobre el proceso de despliegue en GitHub Pages, consulta la [documentación de GitHub Pages][link-gh-pages].

---

## Visualización de la Versión y Fecha en el Sidebar (Docsify)

Para mostrar la versión actual del proyecto y la fecha de última actualización al final del sidebar, se inyectarán dinámicamente los valores desde el archivo `version-info.json` generado por los mecanismos de automatización.

1. Asegúrate de tener `loadSidebar: true` en tu `config.js`.
2. Edita tu `_sidebar.md` (el global en la raíz): Al final del archivo, añade los marcadores de posición con los IDs:

    ```markdown
    <hr>

    ## License © <span id="current-year"></span> Master Engineer Edgar Rangel. All rights reserved.
    V-<span id="project-version"></span>
    D-<span id="last-update"></span>
    ```

3. Asegúrate de que tus archivos JavaScript (`last-update.js` y `version.js`) estén cargados en `./assets/plugins/main.js`. El plugin `version.js` se encargará de leer el `version.json` y actualizar los `<span>` correspondientes.

```javascript
const pluginUrls = [
  ...,
  '/assets/plugins/version.js', // render actual version
  '/assets/plugins/last-update.js', // render last update
];
```

---

[⏪ Regresar a Github projects](./projects.md) | [⏫ Subir un nivel](../README.md) | [⏩ Avanzar a templates](./templates.md)

[link-gh-actions]: ./actions.md
[link-gh-labels]: ./labels.md
[link-gh-pages]: ./pages.md
[link-pre-commit]: ../git/pre-commit.md
[link-tag]: ../git/tag.md
[link-gh-workflow]: ./workflow.md
