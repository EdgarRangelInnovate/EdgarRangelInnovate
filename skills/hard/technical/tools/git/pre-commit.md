# ⚙️ Hooks de Git y `pre-commit`

Los hooks de Git son scripts personalizados que Git ejecuta automáticamente antes o después de eventos como `commit`, `push`, y `receive`. Son una herramienta poderosa para automatizar tareas, hacer cumplir estándares de código o realizar verificaciones. El hook `pre-commit` es particularmente útil porque se ejecuta justo antes de que se cree un nuevo commit, permitiendo validaciones o modificaciones de archivos.

---

## Implementación de Hooks con Husky

Para gestionar los hooks de Git de manera sencilla y compatible con proyectos de Node.js, se recomienda usar la librería `Husky`. Husky permite definir scripts de hook directamente en `package.json`, haciendo que sean versionados y fáciles de configurar para todos los colaboradores.

### 1. Instalación de Husky

En la raíz de tu proyecto, instala Husky como una dependencia de desarrollo:

```bash
npm install husky --save-dev
```

### 2. Inicialización de Husky

Después de la instalación, inicializa Husky. Esto creará una carpeta `.husky/` en tu proyecto, donde se almacenarán los scripts de tus hooks.

```bash
npx husky init
```

Para asegurar que los hooks se instalen correctamente en nuevas clonaciones del repositorio, es buena práctica añadir un script `postinstall` a tu `package.json`:

```json
// package.json
"scripts": {
  "postinstall": "husky install",
  // ... otros scripts
},
```

### 3. Creación de Hooks `pre-commit`

Para añadir un hook `pre-commit` que ejecute uno o varios scripts, utiliza el siguiente comando. Los comandos se añaden secuencialmente en el archivo del hook.

```bash
npx husky add .husky/pre-commit "npm run lint:markdown"
npx husky add .husky/pre-commit "npm run update:version-date"
# Puedes añadir más comandos, cada uno en una nueva línea en el archivo .husky/pre-commit
```

Esto configurará Husky para ejecutar los scripts `npm run lint:markdown` y `npm run update:version-date` antes de cada `git commit`.

### 4. Definición de Scripts en `package.json`

Asegúrate de que los comandos que los hooks `pre-commit` ejecutan estén definidos en la sección `"scripts"` de tu `package.json`.

```json
// package.json
"scripts": {
  // ... otros scripts
  "lint:markdown": "markdownlint --config .markdownlint.jsonc '**/*.md'", // Nuevo script para linting
  "update:version-date": "node scripts/update-version-date.js"
},
```

### 5. Creación del Script de Node.js del Hook (Ejemplo `update-version-date.js`)

Crea el archivo del script de Node.js (ej., `scripts/update-version-date.js`) que contiene la lógica que quieres ejecutar.

```javascript
// scripts/update-version-date.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const versionInfoPath = path.resolve(__dirname, '../version-info.json');

try {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const projectVersion = packageJson.version;
  const lastUpdateDate = new Date().toISOString().slice(0, 10); // Formato YYYY-MM-DD

  const versionInfo = {
    version: projectVersion,
    last_update: lastUpdateDate
  };

  fs.writeFileSync(versionInfoPath, JSON.stringify(versionInfo, null, 2) + '\n');
  console.log(`[pre-commit] Updated version-info.json to v${projectVersion} (Date: ${lastUpdateDate})`);

  execSync(`git add ${versionInfoPath}`);
  console.log(`[pre-commit] Added ${path.basename(versionInfoPath)} to git stage.`);

} catch (error) {
  console.error('[pre-commit] Error updating version-info.json:', error);
  // Opcional: process.exit(1); si quieres que el commit falle ante un error
}
```

---

## Ejemplo: Configurar `markdownlint` en `pre-commit`

Para revisar la correcta sintaxis del lenguaje de programación [Markdown](../../languages/markdown.md), se puede configurar `markdownlint` y ejecutarlo antes de cada commit, sigue estos pasos:

### 1. Instalar `markdownlint-cli2`

```bash
npm install markdownlint-cli2 --save-dev
```

### 2. Crear un archivo de configuración para `markdownlint`

Crea un archivo `.markdownlint.jsonc` en la raíz de tu proyecto. Este archivo contendrá las reglas que `markdownlint` aplicará.

```jsonc
// .markdownlint.jsonc
{
  "default": true, // Habilita todas las reglas por defecto

  // Deshabilita reglas específicas si no se ajustan a tus necesidades
  "MD013": { "line_length": 80, "heading_line_length": 80, "code_block_line_length": 80 }, // Longitud de línea (ajusta según preferencia)
  "MD033": { "allowed_elements": ["span", "hr"] }, // Permite elementos HTML específicos (ej., para los <span> de Docsify)
  "MD007": { "indent": 4 }, // Indentación de listas (usa 2 o 4 espacios)

  // Deshabilitar reglas de ejemplo:
  // "MD001": false, // Headers should be consistent
  // "MD003": false, // Header style

  // Configuración para listas no numeradas: exije guiones en lugar de asteriscos
  "MD004": { "style": "dash" } // Exige guiones (-) para listas no ordenadas
}
```

**Importante:** Asegúrate de que la regla `MD004` tenga `"style": "dash"` para que `markdownlint` exija guiones en lugar de asteriscos. También, considera `MD033` para permitir HTML si tienes SPANs o HRs en tus `.md`.

### 3. Añadir el script de linting a `package.json`

Abre tu `package.json` y añade un script para ejecutar `markdownlint`.

```json
// package.json
"scripts": {
  "lint:markdown": "markdownlint-cli2 --config .markdownlint.jsonc '**/*.md'",
  // ... otros scripts
},
```

Este script le dice a `markdownlint-cli2` que use tu archivo de configuración y que revise todos los archivos `.md` en cualquier subdirectorio.

### 4. Añadir el script `lint:markdown` al hook `pre-commit`

Si ya creaste el hook en el Paso 3 de la sección "Implementación de Hooks con Husky", puedes editar el archivo `.husky/pre-commit` directamente para añadir la línea:

```bash
# .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint:markdown
npm run update:version-date # Si ya lo tenías, asegúrate de que esté en una nueva línea
```

Ahora, cada vez que intentes hacer un `git commit`, `markdownlint` se ejecutará. Si encuentra algún error (basado en tu `.markdownlint.jsonc`), el commit fallará hasta que corrijas los problemas.

---

## Hooks Versionados y Colaboración

La carpeta `.husky/` y los scripts de Node.js que definas (ej., `scripts/update-version-date.js`) **sí se versionan con Git** porque están dentro del repositorio. Esto significa que cuando alguien clona el repositorio o hace un `pull`, obtendrá la configuración de los hooks.

Para que los hooks de Husky se "activen" en la máquina local de un colaborador después de clonar o hacer `pull`, deben ejecutar `npm install` (que disparará el `postinstall` y `husky install`). Si un colaborador no ejecuta `npm install`, los hooks no se ejecutarán.

---

[⏪ Regresar a commits](./commits.md) | [⏫ Subir un nivel](../README.md) | [⏩ Avanzar a tag](./tag.md)
