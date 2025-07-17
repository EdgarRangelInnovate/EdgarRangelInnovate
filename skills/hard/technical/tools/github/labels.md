# 🏷️ Labels en GitHub (Etiquetas de Tareas y Gestión)

Los "labels" (etiquetas) en GitHub son una herramienta fundamental para categorizar y organizar issues (problemas), pull requests (solicitudes de extracción), y discusiones dentro de la plataforma. A diferencia de los [tags](../git/tag.md) de Git que marcan puntos en el historial del código fuente, los labels de GitHub se usan para la gestión del flujo de trabajo, la organización de tareas y la comunicación del estado.

---

## Usos Comunes de Labels en GitHub

Los labels permiten a los equipos y colaboradores filtrar, ordenar y comprender rápidamente la naturaleza de los elementos en un repositorio. Algunos usos comunes incluyen:

- **Tipo de Trabajo:**
  - `bug`: Un error o comportamiento inesperado.
  - `feature`: Una nueva funcionalidad a desarrollar.
  - `documentation`: Tareas relacionadas con la mejora o creación de documentación.
  - `refactor`: Mejoras internas del código sin cambiar el comportamiento externo.
  - `chore`: Tareas de mantenimiento general (ej., actualizaciones de dependencias).
- **Prioridad:**
  - `priority: high`: Tarea urgente.
  - `priority: medium`: Tarea importante pero no urgente.
  - `priority: low`: Tarea de baja prioridad.
- **Estado del Flujo de Trabajo:**
  - `pending review`: Esperando revisión de código.
  - `in progress`: Actualmente en desarrollo.
  - `blocked`: No se puede avanzar por alguna dependencia externa.
  - `done`: Tarea completada.
- **Componente o Área del Proyecto:**
  - `frontend`: Relacionado con la interfaz de usuario.
  - `backend`: Relacionado con la lógica del servidor.
  - `sidebar`: Relacionado con la barra lateral de navegación.
  - `content-management`: Relacionado con la organización del contenido.
- **Severidad (para bugs):**
  - `critical`: Bloquea el uso principal.
  - `major`: Impacta funcionalidades clave.
  - `minor`: Pequeñas imperfecciones.

---

## Gestión de Labels en GitHub

Los labels se gestionan directamente desde la interfaz de usuario de GitHub para cada repositorio.

### Crear un Nuevo Label

1. Navega a tu repositorio en GitHub.
2. Haz clic en la pestaña **"Issues"** o **"Pull requests"**.
3. Haz clic en el botón **"Labels"**.
4. Haz clic en **"New label"**.
5. Define el **nombre**, **descripción** y **color** del label.
6. Haz clic en **"Create label"**.

### Aplicar Labels a Issues o Pull Requests

1. Abre un Issue o Pull Request.
2. En el sidebar derecho, busca la sección "Labels".
3. Haz clic en el icono de engranaje (⚙️) o en "Labels" para abrir el menú de labels disponibles.
4. Selecciona los labels que deseas aplicar. También puedes deseleccionar para quitarlos.

### Editar o Eliminar Labels Existentes

1. Desde la página de "Labels" (Issues -> Labels).
2. Haz clic en el icono de lápiz (✏️) para editar un label existente.
3. Haz clic en el icono de papelera (🗑️) para eliminar un label.

---

[⏪ Regresar a issues](./issues.md) | [⏫ Subir un nivel](../README.md) | [⏩ Avanzar a milestones](./milestones.md)
