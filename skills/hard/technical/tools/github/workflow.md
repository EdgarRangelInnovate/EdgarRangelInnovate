# 🔄 Workflows en GitHub

Los **Workflows** en GitHub son procesos automatizados configurables que se ejecutan en respuesta a eventos específicos en tu repositorio, como pushes, aperturas de Pull Requests, o programaciones. Forman la base de las **GitHub Actions**, permitiendo automatizar tareas de desarrollo, integración continua (CI), despliegue continuo (CD), pruebas y mucho más.

---

## Componentes Clave de un Workflow

Un workflow se define en un archivo [YAML](../../languages/yaml.md) (`.yml`) dentro del directorio `.github/workflows/` de tu repositorio y consta de los siguientes elementos principales:

- **`name`**: El nombre del workflow, que aparecerá en la interfaz de GitHub Actions.
- **`on`**: Define los **eventos que disparan el workflow** (ej., `push`, `pull_request`, `workflow_dispatch`).
- **`jobs`**: Una o más tareas que se ejecutan en paralelo o secuencialmente. Cada `job` se ejecuta en un ambiente virtual (runner) independiente.
- **`steps`**: Una secuencia de comandos y acciones que se ejecutan dentro de un `job`. Los `steps` pueden ser:
  - **Acciones (Actions)**: Scripts reutilizables creados por la comunidad o por GitHub (ej., `actions/checkout@v4`).
  - **Comandos de shell**: Comandos ejecutables directamente en la máquina virtual (ej., `run: npm install`).

---

## Tipos de Workflows Comunes en GitHub

Los workflows se diseñan para automatizar diferentes aspectos del ciclo de vida del desarrollo. A continuación, se describen los tipos más comunes:

### 1. Workflow de Integración Continua (CI)

Un workflow de CI se enfoca en **construir y probar tu código automáticamente** cada vez que se realiza un cambio. Su objetivo principal es detectar errores de integración temprano, garantizando que los nuevos cambios no rompan la funcionalidad existente.

- **Eventos Típicos:** `push` a ramas principales (ej., `main`, `develop`), `pull_request`.
- **Tareas Comunes:**
  - **Checkout del código:** Obtener la última versión del repositorio.
  - **Configuración del entorno:** Instalar dependencias (ej., Node.js, Python, Java).
  - **Instalación de dependencias:** Descargar librerías y paquetes.
  - **Compilación del código:** Construir el proyecto si es necesario (ej., TypeScript a JavaScript, C# a DLL).
  - **Ejecución de pruebas:** Correr pruebas unitarias, de integración, end-to-end.
  - **Análisis de código estático/Linting:** Verificar el estilo y posibles errores de código.
- **Ejemplo de Uso:** Asegurar que cada `push` o `PR` pase todas las pruebas antes de fusionar.

### 2. Workflow de Despliegue Continuo (CD)

Un workflow de CD automatiza el **despliegue del código** a un entorno de staging o producción, una vez que ha pasado las etapas de CI.

- **Eventos Típicos:** `push` a ramas de despliegue (ej., `main` después de pasar CI), `release` (creación de una nueva versión).
- **Tareas Comunes:**
  - **Construcción de artefactos:** Si no se hizo en CI, se compila la aplicación para su despliegue.
  - **Preparación del entorno:** Configurar variables de entorno, credenciales.
  - **Despliegue:** Subir el código a servidores, plataformas cloud (AWS, Azure, GCP), o servicios de alojamiento (ej., GitHub Pages, Netlify, Vercel).
  - **Notificaciones:** Enviar alertas sobre el éxito o fracaso del despliegue.
- **Ejemplo de Uso:** Desplegar automáticamente la aplicación web a GitHub Pages cada vez que se fusiona un cambio en la rama `main`.

### 3. Workflow de Publicación de Releases

Este tipo de workflow se activa cuando se crea un nuevo "Release" en GitHub. Es ideal para automatizar tareas asociadas con el **lanzamiento oficial de una nueva versión de tu software**.

- **Eventos Típicos:** `release: created` (cuando se publica un nuevo release).
- **Tareas Comunes:**
  - **Construir artefactos de producción:** Crear binarios o paquetes finales.
  - **Publicar en registries:** Subir paquetes a npm, PyPI, Maven Central, etc.
  - **Generar notas de la versión:** Automatizar la creación de changelogs.
  - **Adjuntar archivos al Release:** Subir los artefactos de compilación directamente al Release de GitHub.
- **Ejemplo de Uso:** Publicar automáticamente un paquete npm y adjuntar binarios a un release de GitHub.

### 4. Workflow Programado (Scheduled Workflow)

Permite ejecutar workflows automáticamente a intervalos de tiempo definidos, utilizando la sintaxis cron.

- **Eventos Típicos:** `schedule` (ej., `cron: '0 0 * * *'` para ejecutar diariamente a medianoche).
- **Tareas Comunes:**
  - **Limpieza de caché/dependencias:** Eliminar archivos temporales o dependencias antiguas.
  - **Generación de informes:** Crear reportes de estado o de actividad.
  - **Sincronización de datos:** Actualizar bases de datos o archivos externos.
  - **Chequeos de salud:** Monitorear el estado de servicios externos.
- **Ejemplo de Uso:** Ejecutar un script de limpieza de caché todas las noches.

### 5. Workflow Manual (Manual Trigger)

Permite que un workflow se ejecute manualmente a través de la interfaz de GitHub. Es útil para operaciones que requieren intervención humana o se ejecutan bajo demanda.

- **Eventos Típicos:** `workflow_dispatch`.
- **Tareas Comunes:**
  - **Despliegues bajo demanda:** Permite a los usuarios con permisos ejecutar un despliegue sin un push.
  - **Regeneración de datos:** Forzar la reconstrucción de caches o la reindexación de datos.
  - **Tareas administrativas:** Ejecutar scripts de mantenimiento o diagnóstico.
- **Ejemplo de Uso:** Un botón en la pestaña "Actions" para iniciar un despliegue de emergencia.

### 6. Workflow de Flujo de Trabajo Reutilizable (Reusable Workflow)

Permite definir un workflow que puede ser llamado por otros workflows dentro del mismo repositorio o en otros repositorios de la misma organización. Esto promueve la modularidad y la reutilización de lógica compleja.

- **Eventos Típicos:** `workflow_call`.
- **Tareas Comunes:**
  - Establecer un estándar de CI para múltiples proyectos.
  - Centralizar la lógica de despliegue compleja.
  - Compartir configuraciones de seguridad o de entorno entre workflows.
- **Ejemplo de Uso:** Un workflow `ci.yml` que define todos los pasos de CI y es llamado por cada proyecto que necesite ejecutar CI.

---

[⏪ Regresar a templates](./templates.md) | [⏫ Subir un nivel](../README.md) | [⏩ Avanzar a npm](../npm/README.md)
