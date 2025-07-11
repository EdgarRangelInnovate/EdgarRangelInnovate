# ✍️ Lenguaje de Marcado Markdown

Markdown es un lenguaje de marcado ligero que te permite formatear texto plano de manera sencilla y legible, para luego ser convertido a HTML. Su filosofía principal es la simplicidad y la legibilidad, tanto en su formato original como después de su renderización. Es ampliamente utilizado para documentación, blogs, y sistemas de gestión de contenido como Docsify, que lo convierte en HTML estático en el navegador.

---

## Principios Básicos de Markdown

Markdown se enfoca en la facilidad de escritura y lectura. Utiliza una sintaxis intuitiva basada en caracteres comunes para aplicar formatos.

### 1. Encabezados (Headers)

Utiliza el símbolo de almohadilla (`#`) para los encabezados. La cantidad de almohadillas indica el nivel del encabezado (del 1 al 6).

```markdown
# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6
```

### 2. Párrafos y Saltos de Línea

Los párrafos se crean separando líneas de texto con una línea en blanco. Para un salto de línea (`<br>`) dentro de un párrafo, puedes usar dos espacios al final de la línea.

```markdown
Este es un párrafo.

Este es otro párrafo.
Un salto de línea dentro del mismo párrafo.
```

### 3. Énfasis (Negrita y Cursiva)

- **Cursiva:** Envuelve el texto entre asteriscos simples (`*`) o guiones bajos simples (`_`).

    ```markdown
    *Texto en cursiva* o _Texto en cursiva_
    ```

- **Negrita:** Envuelve el texto entre asteriscos dobles (`**`) o guiones bajos dobles (`__`).

    ```markdown
    **Texto en negrita** o __Texto en negrita__
    ```

- **Negrita y Cursiva:** Combina ambos.

    ```markdown
    ***Texto en negrita y cursiva***
    ```

### 4. Listas

#### Listas No Ordenadas (Unordered Lists)

Utiliza guiones (`-`), asteriscos (`*`) o signos de más (`+`) para los elementos de la lista. Se recomienda usar **guiones `-`** para consistencia y compatibilidad con herramientas de linting como `markdownlint`.

```markdown
- Primer elemento
- Segundo elemento
  - Sub-elemento 1
  - Sub-elemento 2
```

#### Listas Ordenadas (Ordered Lists)

Utiliza números seguidos de un punto (`.`). Markdown se encargará de la numeración correcta, incluso si no son consecutivos.

```markdown
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
   1. Sub-elemento 1
   2. Sub-elemento 2
```

### 5. Enlaces (Links)

Puedes crear enlaces en línea o enlaces de referencia.

- **Enlace en línea:**

    ```markdown
    [Texto del enlace](URL)
    [Visita Google](https://www.google.com)
    ```

- **Enlace con título:**

    ```markdown
    [Texto del enlace](URL "Título del enlace")
    [Docsify](https://docsify.js.org/#/ "Documentación de Docsify")
    ```

### 6. Imágenes (Images)

La sintaxis es similar a los enlaces, pero precedida por un signo de exclamación `!`.

```markdown
![Texto alternativo](URL_de_la_imagen "Título de la imagen")
![Logo de Docsify](/assets/images/docsify-logo.png "Logo")
```

### 7. Bloques de Código (Code Blocks)

- **Código en línea:** Envuelve el texto con comillas simples invertidas (backticks `` ` ``).

    ```markdown
    `Este es un código en línea`
    ```

- **Bloques de código:** Utiliza tres comillas simples invertidas (o más) al inicio y al final del bloque. Puedes especificar el lenguaje para resaltado de sintaxis.

    ````markdown
    ```javascript
    // Este es un bloque de código JavaScript
    const hola = "mundo";
    console.log(hola);
    ```
    ````

### 8. Citas en Bloque (Blockquotes)

Utiliza el símbolo `>` para citar texto.

```markdown
> Este es un bloque de cita.
> Puede abarcar múltiples líneas.
```

### 9. Líneas Horizontales (Horizontal Rules)

Puedes crear una línea divisoria usando tres o más guiones (`---`), asteriscos (`***`) o guiones bajos (`___`) en una línea separada.

```markdown
---
```

---

## Markdown y HTML Estático (Docsify)

Cuando utilizas Markdown en un sistema como **Docsify**, el motor de Docsify (que se ejecuta en el navegador) lee tus archivos `.md` y los convierte dinámicamente en HTML estático que se muestra en la página. Esto significa:

- **No hay compilación en el servidor:** Tus archivos Markdown se entregan tal cual al navegador.
- **Rendimiento:** La renderización es rápida ya que se hace del lado del cliente.
- **Sencillez:** No necesitas herramientas de construcción complejas para generar HTML pre-compilado.

### Markdown Extendido (GitHub Flavored Markdown - GFM)

Muchos procesadores de Markdown, incluyendo Docsify y GitHub, soportan una versión extendida conocida como **GitHub Flavored Markdown (GFM)**. Esto incluye características adicionales como:

- **Tablas:** Permite crear tablas con sintaxis Markdown.

    ```markdown
    | Encabezado 1 | Encabezado 2 |
    |--------------|--------------|
    | Fila 1 Col 1 | Fila 1 Col 2 |
    | Fila 2 Col 1 | Fila 2 Col 2 |
    ```

- **Listas de Tareas (Task Lists):**

    ```markdown
    - [x] Tarea completada
    - [ ] Tarea pendiente
    ```

- **Tachado:** Envuelve el texto entre dobles tildes (`~~`).

    ```markdown
    ~~Texto tachado~~
    ```

- **Enlaces automáticos de URLs:** Las URLs se convierten automáticamente en enlaces sin necesidad de la sintaxis `[]()`.

---

## Linting de Markdown (`markdownlint`)

Para mantener la **consistencia y calidad** en tus archivos Markdown, se recomienda usar una herramienta de linting como `markdownlint`. Esta herramienta te ayuda a:

- **Hacer cumplir un estilo:** Asegura que todos los colaboradores sigan las mismas convenciones (ej., usar `-` para listas no ordenadas, evitar saltos de línea excesivos).
- **Detectar errores comunes:** Identifica enlaces rotos, imágenes sin texto alternativo, encabezados mal formados, etc.
- **Integración en `pre-commit`:** Puedes configurar `markdownlint` para que se ejecute automáticamente antes de cada commit, garantizando que el código Markdown cumpla con los estándares antes de ser guardado en el repositorio. Para más detalles sobre su configuración, consulta la [documentación de `pre-commit`](../tools/git/pre-commit.md).

---

[⏪ Regresar a svg](./svg/README.md) | [⏫ Subir un nivel](./README.md) | [⏩ Avanzar a 1password](../software/1password/README.md)
