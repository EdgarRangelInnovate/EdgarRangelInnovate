# 🏷️ Tags en Git (Etiquetas de Versión)

Los "tags" en Git son marcadores permanentes en el historial de tu repositorio que apuntan a un commit específico. Se utilizan comúnmente para marcar puntos importantes, como las versiones de lanzamiento (releases). A diferencia de las ramas, los tags no cambian ni se mueven, proporcionando un punto fijo al que se puede regresar fácilmente.

---

## Tipos de Tags en Git

- **Tags Ligeros (Lightweight Tags):** Son como una rama que no cambia, un simple puntero a un commit. Son útiles para marcas temporales o privadas. No contienen información adicional más allá del commit al que apuntan.

    ```bash
    git tag v1.0.0-lw
    ```

- **Tags Anotados (Annotated Tags):** Son objetos completos en la base de datos de Git. Contienen un checksum, el nombre del tagueador, el email, la fecha y un mensaje de tagueo. Son la forma recomendada de usar tags para los releases públicos de software, ya que capturan metadatos importantes del lanzamiento.

    ```bash
    git tag -a v1.0.0 -m "Release v1.0.0 - Lanzamiento inicial del proyecto"
    ```

### Operaciones Comunes con Tags

- **Listar Tags:**

    ```bash
    git tag                # Lista todos los tags locales
    git tag -l "v1.0.*"    # Lista tags locales que coincidan con un patrón (ej., todas las versiones 1.0.x)
    ```

- **Ver Información de un Tag Anotado:** Para ver los detalles (autor, fecha, mensaje) de un tag anotado:

    ```bash
    git show v1.0.0
    ```

- **Crear un Tag en un Commit Anterior:** Puedes crear un tag para un commit específico proporcionando su hash:

    ```bash
    git tag -a v0.9.0 9fceb02 # Ejemplo: crear tag v0.9.0 en el commit con hash 9fceb02
    ```

- **Empujar Tags al Repositorio Remoto:** Los tags no se empujan automáticamente con `git push`. Debes hacerlo explícitamente:

    ```bash
    git push origin v1.0.0     # Empujar un tag específico al remoto
    git push origin --tags     # Empujar todos los tags locales nuevos al remoto
    ```

- **Eliminar Tags (Local y Remoto):**

    ```bash
    git tag -d v1.0.0                         # Eliminar tag localmente
    git push origin :refs/tags/v1.0.0         # Eliminar tag del repositorio remoto (sintaxis antigua)
    # O la forma más moderna de eliminar un tag remoto:
    git push origin --delete v1.0.0
    ```

### Importancia de los Tags para el Versionado

En el contexto de Versionado Semántico ([SemVer](../github/semver.md)), los tags de Git son ideales para marcar cada versión (`v1.0.0`, `v1.1.0`, `v2.0.0`) de tu proyecto. Esto permite a cualquiera clonar el repositorio y hacer `checkout` a una versión específica en cualquier momento, replicando el estado exacto del código en ese punto de lanzamiento. Son el registro inmutable de tus lanzamientos.

---

[⏪ Regresar a pre-commit](./pre-commit.md) | [⏫ Subir un nivel](../README.md) | [⏩ Avanzar a Github](../github/README.md)
