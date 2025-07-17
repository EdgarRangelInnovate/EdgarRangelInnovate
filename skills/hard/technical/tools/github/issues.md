# 🐞 GitHub Issues

GitHub Issues es una **herramienta de seguimiento de problemas y gestión de tareas** integrada directamente en los repositorios de GitHub. Permite a los equipos y colaboradores rastrear bugs, proponer nuevas características, gestionar proyectos y discutir ideas de manera organizada. Es fundamental para la comunicación y la colaboración en el ciclo de vida del desarrollo de software.

---

## Propósito y Funcionalidades Clave

GitHub Issues sirve como el centro de control para el trabajo colaborativo en un repositorio, ofreciendo funcionalidades para:

- **Reportar Bugs:** Documentar y seguir errores encontrados en el código o en la funcionalidad.
- **Proponer Nuevas Características (Features):** Registrar ideas y peticiones para nuevas adiciones al proyecto.
- **Gestionar Tareas:** Desglosar el trabajo en unidades manejables y asignarlas a los miembros del equipo.
- **Seguimiento del Progreso:** Monitorear el estado de las tareas y problemas, desde su creación hasta su resolución.
- **Discusión y Colaboración:** Permitir conversaciones y toma de decisiones en torno a elementos de trabajo específicos.
- **Organización del Proyecto:** Utilizar herramientas como *Labels*, *Assignees*, *Milestones* y *Projects* para estructurar el trabajo.

---

## Componentes Principales de un Issue

Cada Issue en GitHub típicamente incluye los siguientes componentes:

- **Título:** Un resumen conciso del problema o la característica.
- **Descripción:** Un espacio detallado para explicar el contexto, los pasos para reproducir un bug, las expectativas para una característica, etc. Soporta Markdown para un formato rico.
- **Comentarios:** Un hilo de discusión donde los colaboradores pueden hacer preguntas, proporcionar actualizaciones, solicitar aclaraciones y debatir soluciones.
- **Labels (Etiquetas):**  Marcadores personalizables para categorizar Issues por tipo (ej., `bug`, `feature`, `documentation`), prioridad (`high-priority`), estado (`in progress`), o componente (`frontend`). Para más detalles, consulta la [documentación de Labels en GitHub](./labels.md).
- **Assignees (Asignados):** Uno o más miembros del equipo responsables de trabajar en el Issue.
- **[Milestones](./milestones.md) (Hitos):** Agrupaciones de Issues y Pull Requests relacionados con un objetivo o fase específica del proyecto (ej., "v1.0 Release", "Q3 2024 Features").
- **Projects (Proyectos):** Tableros de Kanban o de seguimiento de proyectos que permiten organizar Issues y Pull Requests en columnas o vistas personalizadas para visualizar el flujo de trabajo.
- **Linked Pull Requests (Pull Requests Enlazados):** Conexiones automáticas o manuales a Pull Requests que están trabajando en la solución para ese Issue. GitHub puede cerrar automáticamente un Issue cuando se fusiona un PR que lo menciona.

---

## Flujo de Trabajo Típico con Issues

El uso de Issues sigue un flujo de trabajo común:

1. **Creación:** Un usuario o colaborador identifica un bug o propone una mejora y crea un nuevo Issue, proporcionando un título y una descripción clara.
2. **Asignación y Categorización:** Un mantenedor o el equipo asigna el Issue a la persona adecuada, y se le añaden los `Labels` (ej., `bug`, `enhancement`) y `Milestones` correspondientes.
3. **Discusión y Refinamiento:** Los colaboradores pueden comentar en el Issue para aclarar detalles, discutir posibles soluciones o llegar a un consenso sobre el alcance.
4. **Desarrollo:** El desarrollador asignado trabaja en el código para resolver el Issue. A menudo, se crea una nueva rama y un Pull Request que enlaza al Issue.
5. **Revisión y Pruebas:** El Pull Request es revisado por otros miembros del equipo y se realizan pruebas.
6. **Cierre:** Una vez que el código es fusionado (merge) y el problema está resuelto o la característica implementada, el Issue se cierra. GitHub puede cerrar Issues automáticamente si se mencionan en el mensaje de commit o en el PR (ej., "Fixes #123", "Closes #456").

---

[⏪ Regresar a actions](./actions.md) | [⏫ Subir un nivel](../README.md) | [⏩ Avanzar a labels](./labels.md)
