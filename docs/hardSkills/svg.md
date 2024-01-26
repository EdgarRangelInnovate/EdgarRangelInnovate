# LANGUAGE SVG

SVG ([Scalable Vector Graphics](https://es.wikipedia.org/wiki/Gr%C3%A1ficos_vectoriales_escalables)) es un formato vectorial poco conocido pero muy útil para su uso online por su flexibilidad y por la capacidad de ofrecer gráficos con calidad.

Este lenguaje está basado en [HTML](../../hardSkills/html/README.md) y [XML](./hardSkills/xml.md), por lo que es muy fácil de aprender. SVG es un lenguaje de marcado, por lo que se puede editar con cualquier editor de texto. No es necesario instalar ningún programa adicional.

## ¿Por qué usar SVG?

SVG es un lenguaje de marcado, por lo que es muy fácil de editar con cualquier editor de texto. No es necesario instalar ningún programa adicional.

Al ser vectorial, SVG ofrece gráficos con calidad y sin perder calidad al aumentar el tamaño.

SVG es compatible con todos los navegadores modernos.

SVG permite modificar el tamaño y el color de los gráficos sin perder calidad y sin necesidad de generar nuevos archivos.

Los modificadores de estilos [CSS](./hardSkills/css.md) se pueden aplicar a los gráficos SVG.

Comandos y funciones [JavaScript](./hardSkills/javascrip.md) se pueden aplicar a los gráficos SVG.

Atributos padre pueden ser aplicados a los elementos SVG desde el código [HTML](./hardSkills/html.md).

## NOTAS

En ésta página solo se encuentra notas y ejemplos de los cursos realizados en SVG. Uno de los cursos gratuitos es el que se encuentra en [w3schools](https://www.w3schools.com/graphics/svg_intro.asp).

## Unidades de medida

SVG admite las siguientes unidades de medida:

- px: píxeles
- %: porcentaje
- em: ems
- ex: exs
- pt: puntos
- pc: picas
- cm: centímetros
- mm: milímetros
- in: pulgadas

## ETIQUETAS

### SVG

La etiqueta `<svg>` define un contenedor para gráficos SVG.

| Atributo              | Descripción                                                                          | Ejemplo                                                           |
| --------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `baseProfile`         | Define el perfil de SVG.                                                             |
| `class`               | Define una o más clases para el gráfico SVG.                                         | `class="mySVG"`                                                   |
| `contentScriptType`   | Define el tipo de script.                                                            | `contentScriptType="text/ecmascript"`                             |
| `contentStyleType`    | Define el tipo de estilo.                                                            | `contentStyleType="text/css"`                                     |
| `dir`                 | Define la dirección del gráfico SVG.                                                 | `dir="ltr"`                                                       |
| `height`              | Define el alto del gráfico SVG.                                                      | `height="100%"`                                                   |
| `id`                  | Define un identificador único para el gráfico SVG.                                   | `id="mySVG"`                                                      |
| `lang`                | Define el lenguaje del gráfico SVG.                                                  | `lang="en"`                                                       |
| `onabort`             | Define una función a ejecutar cuando se aborta el gráfico SVG.                       |
| `onactivate`          | Define una función a ejecutar cuando se activa el gráfico SVG.                       |
| `onclick`             | Define una función a ejecutar cuando se hace clic en el gráfico SVG.                 |
| `onerror`             | Define una función a ejecutar cuando se produce un error en el gráfico SVG.          |
| `onfocusin`           | Define una función a ejecutar cuando se recibe el foco en el gráfico SVG.            |
| `onfocusout`          | Define una función a ejecutar cuando se pierde el foco en el gráfico SVG.            |
| `onkeydown`           | Define una función a ejecutar cuando se pulsa una tecla en el gráfico SVG.           |
| `onkeypress`          | Define una función a ejecutar cuando se pulsa una tecla en el gráfico SVG.           |
| `onkeyup`             | Define una función a ejecutar cuando se suelta una tecla en el gráfico SVG.          |
| `onload`              | Define una función a ejecutar cuando se carga el gráfico SVG.                        |
| `onmousedown`         | Define una función a ejecutar cuando se pulsa un botón del ratón en el gráfico SVG.  |
| `onmousemove`         | Define una función a ejecutar cuando se mueve el ratón sobre el gráfico SVG.         |
| `onmouseout`          | Define una función a ejecutar cuando se sale del gráfico SVG con el ratón.           |
| `onmouseover`         | Define una función a ejecutar cuando se pasa el ratón por encima del gráfico SVG.    |
| `onmouseup`           | Define una función a ejecutar cuando se suelta un botón del ratón en el gráfico SVG. |
| `onresize`            | Define una función a ejecutar cuando se redimensiona el gráfico SVG.                 |
| `onscroll`            | Define una función a ejecutar cuando se desplaza el gráfico SVG.                     |
| `onunload`            | Define una función a ejecutar cuando se descarga el gráfico SVG.                     |
| `onunload`            | Define una función a ejecutar cuando se descarga el gráfico SVG.                     |
| `onzoom`              | Define una función a ejecutar cuando se hace zoom en el gráfico SVG.                 |
| `preserveAspectRatio` | Define cómo se ajusta el gráfico SVG al área visible.                                | `preserveAspectRatio="xMinYMin meet"`                             |
| `style`               | Define estilos en línea para el gráfico SVG.                                         | `style="fill:blue;stroke:pink;stroke-width:5;fill-rule:evenodd;"` |
| `tabindex`            | Define la secuencia de tabulación del gráfico SVG.                                   | `tabindex="0"`                                                    |
| `title`               | Define un título para el gráfico SVG.                                                | `title="My first SVG"`                                            |
| `transform`           | Define una transformación del gráfico SVG.                                           | `transform="rotate(30 50 50)"`                                    |
| `version`             | Define la versión de SVG.                                                            | `version="1.1"`                                                   |
| `viewBox`             | Define el área visible del gráfico SVG.                                              | `viewBox="0 0 100 100"`                                           |
| `width`               | Define el ancho del gráfico SVG.                                                     | `width="100%"`                                                    |
| `x`                   | Define la posición horizontal del gráfico SVG.                                       | `x="0"`                                                           |
| `xml:lang`            | Define el lenguaje del gráfico SVG.                                                  | `xml:lang="en"`                                                   |
| `xml:space`           | Define si se preservan los espacios en blanco del gráfico SVG.                       | `xml:space="preserve"`                                            |
| `xmlns:xlink`         | Define el espacio de nombres xlink.                                                  | `xmlns:xlink="http://www.w3.org/1999/xlink"`                      |
| `xmlns`               | Define el espacio de nombres SVG.                                                    | `xmlns="http://www.w3.org/2000/svg"`                              |
| `y`                   | Define la posición vertical del gráfico SVG.                                         | `y="0"`                                                           |
| `zoomAndPan`          | Define si se puede hacer zoom y pan.                                                 | `zoomAndPan="magnify"`                                            |
