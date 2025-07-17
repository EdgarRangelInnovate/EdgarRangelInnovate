# GIT

Git es un sistema de control de versiones distribuido, creado por Linus Torvalds. Su objetivo es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos. Es una herramienta indispensable para la colaboración y el seguimiento de la evolución de cualquier proyecto de software.

---

## INSTALACIÓN

Para instalar Git en un sistema operativo Linux, puedes usar el gestor de paquetes del sistema operativo. En el caso de Ubuntu, puedes usar el siguiente comando:

```bash
sudo apt install git
```

---

## CONFIGURACIÓN

Para configurar Git con tu información de usuario global, debes usar el comando `git config`.

```bash
git config --global user.name "Edgar Rangel"
git config --global user.email "Edgar.Rangel.Moreno.Innovate@gmail.com"
```

### Ubicación de los archivos de configuración en WSL

- **Configuración global (usuario):**
  - El archivo se encuentra en:  
    `~/.gitconfig`  
    (Ruta completa: `/home/tu_usuario/.gitconfig`)
  - Aquí se almacenan las configuraciones que aplican a todos los repositorios del usuario en WSL.

- **Configuración específica de cada proyecto (repositorio):**
  - El archivo se encuentra dentro de la carpeta del repositorio, en:  
    `.git/config`  
    (Ruta completa: `/ruta/a/tu/proyecto/.git/config`)
  - Aquí se almacenan configuraciones particulares para ese repositorio, como la URL remota, ramas de seguimiento, etc.

Puedes editar estos archivos directamente con Visual Studio Code usando:

```bash
code ~/.gitconfig
code .git/config
```

o con cualquier editor de texto de tu preferencia.

---

## COMANDOS Y FLUJOS DE TRABAJO

Git ofrece una amplia gama de comandos para gestionar tu repositorio y colaborar eficientemente. Aquí se describen los conceptos clave:

- **Fundamentos:** Iniciación de repositorios (`git init`), registro de cambios, gestión de ramas (`git branch`, `git checkout`), y fusión de código (`git merge`, `git rebase`).
- **Operaciones Comunes:** Clonar repositorios (`git clone`), añadir (`git add`), borrar, mover archivos e inspeccionar el historial (`git log`).
- **Resolución de Conflictos:** Estrategias para manejar eficientemente los conflictos que surgen al fusionar cambios concurrentes.
- **Flujos de Trabajo:** Experiencia con diferentes modelos de ramificación como GitFlow o GitHub Flow, adaptándose al contexto del equipo.

Para comandos específicos y flujos de trabajo detallados, consulta la siguiente documentación:

- **[Gestión de Commits](./commits.md):** Guía detallada sobre la creación de commits con propósito y su semántica.
- **[Hooks de Git (`pre-commit`)](./pre-commit.md):** Información sobre cómo automatizar tareas y validaciones antes de confirmar cambios, utilizando hooks.
- **[Tags en Git](./tags.md):** Documentación sobre la creación y gestión de etiquetas de versión en tu historial de Git.

---

## NOTAS

### La importancia de versionar el archivo `package-lock.json`

Si bien es cierto que los agentes de compilación de los pipelines pueden borrar y recrear el archivo `package-lock.json` en tiempo de ejecución, **versionarlo sigue siendo crucial por varias razones**:

- **Rastreo de dependencias:**
  - El archivo `package-lock.json` registra las versiones exactas de todas las dependencias del proyecto.
  - Al versionarlo, se crea un registro histórico de las dependencias utilizadas en cada versión del proyecto.
  - Esto facilita la **identificación de las dependencias que introdujeron errores o cambios en el comportamiento del proyecto**.
  - Permite realizar **retrocesos a versiones anteriores** si se presenta algún problema con las dependencias actualizadas.
- **Reproducibilidad:**
  - El archivo `package-lock.json` asegura que todos los colaboradores del proyecto, independientemente de su entorno de desarrollo, instalen las mismas versiones de las dependencias.
  - Esto **garantiza la reproducibilidad de los builds y las pruebas**, evitando errores o inconsistencias por diferencias en las dependencias.
- **Seguridad:**
  - Permite **fijar las versiones de las dependencias y evitar la instalación accidental de versiones con vulnerabilidades de seguridad**.
  - Al actualizar las dependencias, se puede controlar qué versiones se instalan y mantener un registro de las actualizaciones realizadas.
- **Gestión de cambios:**
  - Facilita la gestión de cambios en las dependencias del proyecto.
  - Permite **comparar las versiones del archivo `package-lock.json` para identificar qué dependencias se han modificado**.
  - Ayuda a **revisar y aprobar los cambios en las dependencias** antes de que se implementen en el proyecto.
- **Integración con herramientas:**
  - Diversas herramientas de desarrollo y DevOps, como CI/CD, pruebas y análisis de código, **requieren el archivo `package-lock.json` para funcionar correctamente**.
  - Versionar el archivo facilita la integración del proyecto con estas herramientas.

**Soluciones para la eliminación del archivo por los pipelines:**

- **Almacenar el archivo `package-lock.json` en un repositorio independiente.**
- **Utilizar un script para generar el archivo `package-lock.json` a partir de una versión versionada.**
- **Configurar el pipeline para que no elimine el archivo `package-lock.json`.**

En resumen, si bien el archivo `package-lock.json` se recrea en tiempo de ejecución, versionarlo sigue siendo una práctica recomendada para garantizar la trazabilidad, la reproducibilidad, la seguridad, la gestión de cambios y la integración con herramientas en el desarrollo de software.

---

## SCRIPT DE LIMPIEZA DEL PROYECTO

En ocasiones es útil limpiar el proyecto eliminando las dependencias instaladas y el archivo de bloqueo (`package-lock.json`). Esto puede ayudar a resolver problemas de dependencias o preparar el entorno para una instalación limpia.

Puedes hacerlo manualmente con los siguientes comandos:

```bash
rm -rf node_modules package-lock.json
```

O puedes agregar un script en el archivo `package.json` para automatizar este proceso:

```json
// package.json
"scripts": {
  // ...otros scripts...
  "clean": "rm -rf node_modules package-lock.json"
}
```

Luego, ejecuta el script con:

```bash
npm run clean
```

> **Nota:** Después de limpiar, puedes reinstalar las dependencias con:
>
> ```bash
> npm install
> ```

Esta práctica es útil para solucionar conflictos de dependencias o cuando se presentan errores inesperados al instalar paquetes.

---

[⏪ Regresar a software](../../software/README.md) | [⏫ Subir un nivel](../README.md) | [⏩ Avanzar a Github](../github/README.md)
