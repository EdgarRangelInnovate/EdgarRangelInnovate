# GIT

<!-- TODO: NX Y TURBOREPO que son y para que sirven https://github.com/EdgarRangelInnovate/EdgarRangelInnovate/issues/82-->

Git es un sistema de control de versiones distribuido, creado por Linus Torvalds. Su objetivo es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos.

## INSTALACIÓN

Para instalar Git en un sistema operativo Linux, se puede usar el gestor de paquetes del sistema operativo. En el caso de Ubuntu, se puede usar el siguiente comando:

```bash
sudo apt install git
```

## CONFIGURACIÓN

Para configurar Git, se debe usar el comando `git config`.

```bash
git config --global user.name "John Doe"
git config --global user.email
```

## COMANDOS

Para ver la lista de comandos disponibles, se puede usar el comando `git help`.

```bash
git help
```

Para clonar un repositorio, se puede usar el comando `git clone`.

```bash
git clone <url>
```

Para hacer checkout de un archivo en particular de un commit, se puede usar el comando `git checkout`.

```bash
git checkout <commit> <archivo>
```

Para hacer commit de un archivo en particular, se puede usar el comando `git add`.

```bash
git add <archivo>
```

Para hacer commit de un archivo en particular, se puede usar el comando `git commit`.

```bash
git commit -m "<mensaje>"
```

Para hacer push de un archivo en particular, se puede usar el comando `git push`.

```bash
git push
```

Para hacer pull de un archivo en particular, se puede usar el comando `git pull`.

```bash
git pull
```

## Notas

### La importancia de versionar el archivo `package-lock.json`

Si bien es cierto que los agentes de compilación de los pipelines borran y recrean el archivo `package-lock.json` en tiempo de ejecución, **versionarlo sigue siendo crucial por varias razones**:

**1. Rastreo de dependencias:**

- El archivo `package-lock.json` registra las versiones exactas de todas las dependencias del proyecto.
- Al versionarlo, se crea un registro histórico de las dependencias utilizadas en cada versión del proyecto.
- Esto facilita la **identificación de las dependencias que introdujeron errores o cambios en el comportamiento del proyecto**.
- Permite realizar **retrocesos a versiones anteriores** si se presenta algún problema con las dependencias actualizadas.

**2. Reproducibilidad:**

- El archivo `package-lock.json` asegura que todos los colaboradores del proyecto, independientemente de su entorno de desarrollo, instalen las mismas versiones de las dependencias.
- Esto **garantiza la reproducibilidad de los builds y las pruebas**, evitando errores o inconsistencias por diferencias en las dependencias.

**3. Seguridad:**

- Permite **fijar las versiones de las dependencias y evitar la instalación accidental de versiones con vulnerabilidades de seguridad**.
- Al actualizar las dependencias, se puede controlar qué versiones se instalan y mantener un registro de las actualizaciones realizadas.

**4. Gestión de cambios:**

- Facilita la gestión de cambios en las dependencias del proyecto.
- Permite **comparar las versiones del archivo `package-lock.json` para identificar qué dependencias se han modificado**.
- Ayuda a **revisar y aprobar los cambios en las dependencias** antes de que se implementen en el proyecto.

**5. Integración con herramientas:**

- Diversas herramientas de desarrollo y DevOps, como CI/CD, تست، y análisis de código, **requieren el archivo `package-lock.json` para funcionar correctamente**.
- Versionar el archivo facilita la integración del proyecto con estas herramientas.

**Soluciones para la eliminación del archivo por los pipelines:**

- **Almacenar el archivo `package-lock.json` en un repositorio independiente.**
- **Utilizar un script para generar el archivo `package-lock.json` a partir de una versión versionada.**
- **Configurar el pipeline para que no elimine el archivo `package-lock.json`.**

**En resumen, si bien el archivo `package-lock.json` se recrea en tiempo de ejecución, versionarlo sigue siendo una práctica recomendada para garantizar la trazabilidad, la reproducibilidad, la seguridad, la gestión de cambios y la integración con herramientas en el desarrollo de software.**

### Commits con proposito

Se puede revisar una semántica refinada por la práctica en el siguiente [documento](./commits.md)
