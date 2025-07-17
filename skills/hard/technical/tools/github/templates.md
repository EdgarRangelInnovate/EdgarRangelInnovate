# 📄 GitHub Templates

GitHub Templates (Plantillas de GitHub) son archivos predefinidos que ayudan a **estandarizar la información y el proceso de contribución** en un repositorio. Al proporcionar estructuras claras para issues, pull requests, discusiones y pautas de contribución, estas plantillas mejoran la comunicación, aseguran que la información clave esté presente y agilizan la gestión de incidencias y revisiones en el proyecto.

---

## Tipos de Plantillas en GitHub

Las plantillas se ubican en la raíz de tu repositorio o, más comúnmente, dentro de la carpeta oculta `.github/`.

### 1. Issue Templates (Plantillas de Incidencias)

- **Ubicación:** Archivos Markdown ubicados en la carpeta `.github/ISSUE_TEMPLATE/`.
- **Propósito:** Guían a los usuarios al crear nuevas incidencias (issues), asegurando que se proporcione toda la información necesaria desde el principio. Son ideales para diferenciar entre reportes de bugs, solicitudes de nuevas funcionalidades, preguntas generales, etc.
- **Uso:** Cuando un usuario hace clic en "New issue" en tu repositorio, GitHub le presentará una lista de las plantillas disponibles para elegir.
- **Cómo se usa:** Cada archivo `.md` (o `.yml` para un control más avanzado) dentro de `.github/ISSUE_TEMPLATE/` define una plantilla específica. Por ejemplo:

    ```markdown
    # .github/ISSUE_TEMPLATE/bug_report.md
    ---
    name: 🐛 Reporte de Bug
    about: Informa sobre un error para ayudarnos a mejorar
    title: "[BUG]: "
    labels: bug, triage
    assignees: ''
    ---

    **Describe el bug**
    Una descripción clara y concisa de lo que es el bug.

    **Pasos para Reproducir**
    1. Ve a '...'
    2. Haz clic en '....'
    3. Baja hasta '....'
    4. Ve el error '....'

    **Comportamiento Esperado**
    Una descripción clara y concisa de lo que esperabas que sucediera.

    **Capturas de Pantalla**
    Si aplica, añade capturas de pantalla para ayudar a explicar tu problema.

    **Entorno (Por favor, completa la siguiente información):**
  - OS: [ej. Windows 10, macOS 12, Ubuntu 20.04]
  - Navegador: [ej. Chrome, Firefox, Safari]
  - Versión: [ej. v1.0.0]

    **Contexto Adicional**
    Añade cualquier otro contexto sobre el problema aquí.
    ```

    También puedes usar archivos `.yml` para crear un formulario de Issue estructurado, que es la forma recomendada para Issues complejos.

### 2. Pull Request Templates (Plantillas de Solicitudes de Extracción)

- **Ubicación:** Un archivo Markdown llamado `PULL_REQUEST_TEMPLATE.md` en la raíz de `.github/` (es decir, `.github/PULL_REQUEST_TEMPLATE.md`), o múltiples archivos en la carpeta `.github/PULL_REQUEST_TEMPLATE/`.
- **Propósito:** Proporciona una estructura para describir los cambios propuestos en un Pull Request (PR), incluyendo pasos para probarlos, contexto, enlaces a issues relacionados y cualquier otra información relevante. Esto agiliza el proceso de revisión de código.
- **Uso:** Cuando un colaborador crea un nuevo Pull Request, el contenido de esta plantilla se precargará automáticamente en la descripción del PR. Si hay múltiples plantillas en la carpeta, GitHub permitirá seleccionar una.
- **Cómo se usa:**

    ```markdown
    # .github/PULL_REQUEST_TEMPLATE.md
    ---
    name: ✨ Característica Nueva / Mejora
    about: Propuesta de una nueva funcionalidad o mejora.
    title: "[FEAT]: "
    labels: enhancement, feature
    assignees: ''
    ---

    ## Descripción

    Describe brevemente los cambios que introduce este Pull Request.

    ## Problema/Contexto Relacionado

    ¿Qué problema resuelve este PR? ¿Qué mejora introduce?
    Cierra #[número_del_issue_relacionado] (ej., "Cierra #123")

    ## Lista de Verificación (Checklist)

  - [ ] He revisado mi propio código.
  - [ ] Mis cambios no introducen nuevas advertencias o errores.
  - [ ] He actualizado la documentación si es necesario.
  - [ ] Las pruebas existentes pasan con mis cambios.
  - [ ] He añadido nuevas pruebas para cubrir la nueva funcionalidad/corrección (si aplica).

    ## Pasos para Probar (para revisores)

    1.  Clona esta rama: `git clone ...`
    2.  Instala dependencias: `npm install`
    3.  Ejecuta la aplicación: `npm run dev`
    4.  Navega a la ruta: `/tu-nueva-ruta`
    5.  Verifica que 'XYZ' funciona como se esperaba.

    ## Capturas de Pantalla (si aplica)

    Añade capturas de pantalla o GIFs de los cambios visuales.
    ```

### 3. Discussion Templates (Plantillas de Discusión)

- **Ubicación:** Archivos Markdown ubicados en la carpeta `.github/DISCUSSION_TEMPLATE/`.
- **Propósito:** Si las discusiones están habilitadas en tu repositorio, estas plantillas estandarizan la creación de nuevos temas de discusión, asegurando que los usuarios proporcionen la información relevante para un debate productivo. Son útiles para ideas, preguntas, anuncios, etc.
- **Uso:** Similar a los Issues, al iniciar una nueva discusión, se presentarán estas plantillas.
- **Cómo se usa:**

    ```markdown
    # .github/DISCUSSION_TEMPLATE/idea.md
    ---
    name: 💡 Idea o Propuesta
    about: Comparte una nueva idea o propuesta para el proyecto.
    title: "[IDEA]: "
    labels: idea
    ---

    ## Contexto de la Idea

    Describe el problema que tu idea intenta resolver o la oportunidad que presenta.

    ## Propuesta Detallada

    Explica tu idea con el mayor detalle posible. ¿Cómo funcionaría? ¿Qué beneficios aportaría?

    ## Alternativas Consideradas

    ¿Has pensado en otras formas de abordar esto? ¿Por qué esta es la mejor opción?

    ## Preguntas para la Comunidad

    ¿Qué tipo de retroalimentación buscas?
    ```

### 4. Contributing Guidelines (Pautas de Contribución)

- **Ubicación:** Un archivo llamado `CONTRIBUTING.md` en la raíz del repositorio o en la carpeta `.github/`.
- **Propósito:** Explica detalladamente cómo los colaboradores deben contribuir al proyecto. Esto incluye normas de estilo de código, el proceso para reportar bugs, solicitar características, enviar Pull Requests, cómo configurar el entorno de desarrollo y cómo usar las plantillas de Issues/PRs. Es un documento esencial para la comunidad.
- **Uso:** GitHub mostrará un enlace a este archivo cuando alguien intente crear un Issue o Pull Request, animando a los contribuidores a leer las pautas primero.
- **Cómo se usa:**

    ```markdown
    # CONTRIBUTING.md
    # Cómo Contribuir a [Nombre del Repositorio]

    ¡Nos encanta recibir contribuciones de la comunidad! Para asegurarnos de que el proceso sea lo más fluido y eficiente posible para todos, por favor, sigue estas pautas.

    ## Reportar Bugs

    Si encuentras un bug, por favor, **no abras un Issue inmediatamente**. Primero, verifica si ya existe un Issue similar. Si no es así, utiliza nuestra [Plantilla de Reporte de Bug](#).
    ...

    ## Proponer Nuevas Características

    Para proponer una nueva característica o mejora, utiliza nuestra [Plantilla de Solicitud de Característica](#).
    ...

    ## Proceso de Pull Request

    1.  Haz un "fork" del repositorio.
    2.  Crea una nueva rama (`git checkout -b feature/mi-nueva-caracteristica`).
    3.  Realiza tus cambios y asegúrate de que el código cumpla con nuestras [normas de estilo](#codigo-de-estilo).
    4.  Añade pruebas si es necesario.
    5.  Haz un commit con un mensaje descriptivo siguiendo nuestra [Convención de Commits](#convencion-de-commits).
    6.  Abre un Pull Request y completa nuestra [Plantilla de Pull Request](#).
    ...
    ```

### 5. Other Templates (Otras Plantillas)

Además de las anteriores, GitHub reconoce otras plantillas importantes para la gestión de proyectos y la comunidad:

- **Solicitudes de Soporte (`SUPPORT.md`):**
  - **Ubicación:** `SUPPORT.md` en la raíz o en `.github/`.
  - **Propósito:** Proporciona a los usuarios información sobre cómo obtener soporte para el proyecto, incluyendo dónde buscar ayuda, cómo reportar problemas no relacionados con el código o dónde encontrar recursos.
- **Código de Conducta (`CODE_OF_CONDUCT.md`):**
  - **Ubicación:** `CODE_OF_CONDUCT.md` en la raíz o en `.github/`.
  - **Propósito:** Establece las expectativas de comportamiento para los participantes del proyecto, promoviendo un ambiente inclusivo y respetuoso. Es crucial para el bienestar de la comunidad.
- **Licencia (`LICENSE` o `LICENSE.md`):**
  - **Ubicación:** `LICENSE` o `LICENSE.md` en la raíz.
  - **Propósito:** Aunque no es una "plantilla" de texto como las anteriores, definir una licencia de código abierto es fundamental para indicar cómo otros pueden usar, modificar y distribuir tu software.

---

[⏪ Regresar a SemVer](./semver.md) | [⏫ Subir un nivel](../README.md) | [⏩ Avanzar a Workflows](./workflow.md)
