# 🚀 Despliegue de Sitios Estáticos con GitHub Pages

GitHub Pages es un servicio de alojamiento de sitios estáticos directamente desde un repositorio de GitHub. Es una solución gratuita y popular para proyectos de documentación, blogs personales, portfolios y sitios web de proyectos de código abierto.

---

## Cómo Funciona GitHub Pages

GitHub Pages funciona sirviendo archivos HTML, CSS y JavaScript directamente desde una rama de tu repositorio (comúnmente `gh-pages` o `main`/`master`) a una URL pública (`<nombredeusuario>.github.io/<nombrerepositorio>` o un dominio personalizado).

Para proyectos como Docsify, que renderizan Markdown a HTML en el navegador (Single Page Application - SPA), GitHub Pages es ideal, ya que no requiere un proceso de compilación del lado del servidor. Simplemente sirve los archivos Markdown, HTML, CSS y JS tal como están en tu repositorio.

---

## Configuración de GitHub Pages

Inicialmente, GitHub Pages ofrece un workflow gestionado por GitHub para un despliegue básico. Sin embargo, para flujos de trabajo personalizados (como inyectar información de versión o ejecutar tests), es necesario cambiar a un workflow de GitHub Actions.

### 1. Configuración Inicial en GitHub

- Ve a la configuración de tu repositorio en GitHub.
- Navega a la pestaña **"Pages"** (ubicada bajo "Code and automation").
- En la sección **"Build and deployment"**:
  - Selecciona **"GitHub Actions"** en el desplegable "Source". Esto desactiva el workflow gestionado de GitHub y te permite definir tu propio proceso de despliegue.
  - Asegúrate de que la **rama de despliegue** sea la correcta (ej., `main`).
  - Cuando se te pida, selecciona la plantilla **"Static HTML"**. Esto generará un archivo con lenguaje [yaml](../../languages/yaml.md) `.yml` básico en `.github/workflows/` que podrás modificar.

### 2. Creación del Workflow de Despliegue con GitHub Actions

Para un sitio Docsify, el workflow de GitHub Actions se encargará de:

- Obtener los archivos de tu repositorio.
- Generar cualquier dato dinámico (como `version-info.json`).
- Desplegar estos archivos en GitHub Pages.

Crea o modifica el archivo de workflow (ej., `.github/workflows/deploy-docsify.yml`) con el siguiente contenido:

```yaml
# Nombre del workflow, aparecerá en la pestaña 'Actions' de tu repo
name: Deploy Docsify Site to GitHub Pages

# Eventos que disparan este workflow
on:
  push:
    branches: ["main"] # Dispara el workflow en cada push a la rama 'main'

  # Permite ejecutar este workflow manualmente desde la pestaña 'Actions'
  workflow_dispatch:

# Permisos requeridos para este workflow
permissions:
  contents: write # Necesario para acciones como checkout, etc.
  pages: write    # Necesario para desplegar en GitHub Pages
  id-token: write # Necesario para autenticación OIDC con GH Pages

# Permite solo un despliegue concurrente, saltando las ejecuciones en cola
# que se encuentran entre la ejecución en curso y la última en cola.
# Sin embargo, NO cancela las ejecuciones en curso, ya que queremos que los despliegues de producción se completen.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # El único job en este workflow, llamado 'deploy'
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    # El tipo de máquina virtual donde se ejecutará el job
    runs-on: ubuntu-latest
    steps:
      # Paso 1: Hacer un checkout del código del repositorio
    - name: Checkout
        uses: actions/checkout@v4
        # fetch-depth: No se necesita fetch-depth: 0 si la fecha de actualización se obtiene del timestamp del build.

      # Paso 2: Configurar Node.js (necesario para leer package.json)
    - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22' # O la versión de Node.js que prefieras

      # Paso 3: Obtener la versión del proyecto desde package.json
    - name: Get project version from package.json
        id: get_version
        run: |
          if [ -f package.json ]; then
            PROJECT_VERSION=$(node -p "require('./package.json').version")
          else
            PROJECT_VERSION="0.0.0" # Fallback si package.json no existe
          fi
          echo "project_version=$PROJECT_VERSION" >> "$GITHUB_OUTPUT"

      # Paso 4: Obtener la fecha del build (timestamp actual del workflow)
      # Esto es más eficiente que obtener la fecha del último commit en historiales grandes.
    - name: Get current build timestamp
        id: get_date
        run: |
          LAST_BUILD_DATE=$(date -u +"%Y-%m-%d") # Formato YYYY-MM-DD en UTC
          echo "last_update=$LAST_BUILD_DATE" >> "$GITHUB_OUTPUT"

      # Paso 5: Generar el archivo version-info.json
      # Este archivo contendrá la versión y la fecha obtenidas por la Action.
    - name: Generate version-info.json
        run: |
          echo "{\"version\": \"${{ steps.get_version.outputs.project_version }}\", \"last_update\": \"${{ steps.get_date.outputs.last_update }}\"}" > version-info.json
          # Opcional: Descomentar la línea de abajo para ver el contenido del JSON en los logs de la Action
          # # cat version-info.json

      # Paso 6: Configurar GitHub Pages
      # Este paso es requerido por actions/deploy-pages
    - name: Setup Pages
        uses: actions/configure-pages@v5

      # Paso 7: Subir el artefacto de la página
      # El artefacto es el contenido de tu sitio Docsify (incluyendo version-info.json)
    - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Sube todo el directorio de trabajo
          path: '.'

      # Paso 8: Desplegar el artefacto en GitHub Pages
    - name: Deploy to GitHub Pages
        id: deployment # Asigna un ID para que el 'environment.url' pueda referenciarlo
        uses: actions/deploy-pages@v4
        # Con actions/deploy-pages@v4, no se necesitan `github_token` ni `publish_dir` aquí,
        # ya que toma el artefacto del paso 'Upload artifact'.
```

---

[⏪ Regresar a milestones](./milestones.md) | [⏫ Subir un nivel](../README.md) | [⏩ Avanzar a Github projects](./projects.md)
