# [AUTOMATE](https://llamalab.com/) DE LLAMALAB

Es un aplicativo de automatización de procesos en teléfonos móviles, que permite realizar emulación de clicks, ingreso de texto, captura de pantalla, entre otras funcionalidades. Permite automatizar procesos en aplicativos móviles, como por ejemplo: WhatsApp, Facebook, Instagram, Twitter, entre otros.

Se aprende esta tecnología realizando automatizaciones con varios enfoques:

## Para el juego de Pokemon Go junto con Pokegenie

En la portada de la aplicación se tiene la siguiente documentación:

- URL: <https://llamalab.com/automate/community/flows/47276>
- Nombre de la app: `📦🐣🐢⛔ Asistente PoGoPoGe`
- Descripción:

```markdown
# 📦🐣🐢⛔ Asistente PoGoPoGe

Te ayuda a realizar las tareas repetitivas del juego Pokémon Go en conjunto con Pokegenie.

Se desarrollan una serie de etiquetas con responsabilidades especificas.

## ¿Cómo funciona?

Al dar inicio al flujo, se abrirán varias notificaciones enfocadas a un área en específico.

Las funcionalidades que requieran una pantalla dual están enfocadas a una pantalla flotante al 50% del tamaño real en la parte superior derecha.

## Funcionalidades

Hay cuatro áreas en especifico desarrolladas para este juego.

### Búsquedas y filtros

Todo lo referente a búsquedas y filtros de Pokémon en la bolsa de Pokémones del juego.

#### Buscar Familia

Busca la familia del primer Pokémon en la bolsa de Pokémones o del Pokémon que se tiene en la vista de detalle.

#### Buscar para desclasificar

Busca Pokémones que no tienen importancia para ser guardados.

#### Búsquedas para renombrar

Busca los Pokémones que no han sido renombrados.

### Re-nombramiento con Pokegenie

Automatiza el re-nombramiento mediante el uso de Pokegenie y donde se debe tener el siguiente formato donde los dos primeros dígitos en super-indice son el IV, los dos segundos dígitos en sub-indice son el nivel del Pokémon, los dos terceros dígitos son el HP del Pokémon seguido del nombre.

#### Renombrar múltiples

Renombra todos los Pokémon que se encuentren en el filtro actual, si no logra obtener el nombre desde Pokegenie, el software se detiene hasta que se completen los datos solicitados, si al momento de renombrar se encuentra que no logra sobre-escribir el nuevo nombre, también se detiene hasta que logre colocar el nombre que se encuentra en el portapapeles.

La funcionalidad se detiene cuando encuentra que el nombre nuevo concuerda con el nombre actual del Pokémon.

#### Desclasificar

### Intercambios

Automatiza el intercambio de Pokémones entre dos cuentas diferentes.

### Ubicaciones

Altera la ubicaciones del jugador en el celular.

## Pre-requisitos

1. Tener instalado y en funcionamiento Pokémon y Pokegenie.
2. Pokémon Go debe estar en inglés
3. El botón flotante de Pokegenie debe estar al costado izquierda al 10% de la pantalla y hacia el centro al 50% de la pantalla
4. Para funcionalidades de pantalla dual, se requiere tener la segunda pantalla al 50% del tamaño en la parte superior derecha.
5. Para funciones de ubicación, se require tener habilitado el celular como equipo de desarrollo y con la aplicación Automate como mock para GPS.

## Owner

- [GitHub](https://ingalejandrorangel.github.io/IngAlejandroRangel/#/)
- [Reddit](https://www.reddit.com/u/EnoughSituation6332/s/JULiP3LwQK)
```

- Versionamiento: [0.0.1](../assets/flows/📦🐣🐢⛔%20Asistente%20PoGoPoGe.flo)

### Arquitectura de llamados

Para este juego se crea una arquitectura de llamados mediante json, los cuales están distribuidos en los siguientes niveles:

#### Menus

Los menús están en un llamado simple de diccionarios de datos donde la llave es el nombre del módulo y el valor es la etiqueta que se muestra en el menú:

1. [menu00.filters&Search](./PoGoPoGe/menu00.filters&Search.json)
2. [menu01.renames](./PoGoPoGe/menu01.renames.json)
3. [menu02.trades](./PoGoPoGe/menu02.trades.json)
4. [menu03.locations](./PoGoPoGe/menu03.locations.json)

#### Módulos

Los módulos tienen un controlador para hacer llamados a los utilitarios por medio de arrays de Utilitarios de la siguiente manera:

1. [module00.familyFilter](./PoGoPoGe/module00.familyFilter.json)
2. [module01.declassifiedFilter](./PoGoPoGe/module01.declassifiedFilter.json)
3. [module10.renamePokegenie](./PoGoPoGe/module02.renamePokegenie.json)
4. [module11.actualCostume](./PoGoPoGe/module11.actualCostume.json)
5. [module12.multiDeclassified](./PoGoPoGe/module12.multiDeclassified.json)
6. [module13.multiNameEvolve](./PoGoPoGe/module13.multiNameEvolve.json)
7. [module14.multiResetName](./PoGoPoGe/module14.multiResetName.json)
8. [module20.simpleTrade](./PoGoPoGe/module20.simpleTrade.json)
9. [module21.dualTrade](./PoGoPoGe/module21.dualTrade.json)
10. [module30.gpsMock](./PoGoPoGe/module30.gpsMock.json)

Los anteriores módulos hacen llamados a los componentes que tienen configurados los utilitarios granulares a utilizar:

1. ["component00.firstPoke"](./PoGoPoGe/component00.firstPoke.json)
2. ["component01.pokeDetail"](./PoGoPoGe/component01.pokeDetail.json)

Los utilitarios son secuencias de bloques preestablecidos que reciben payload de entrada para modificar su comportamiento, los cuales están distribuidos en los siguientes niveles:

1. [util00.click](./PoGoPoGe/util00.click.json)
2. [util01.swipe](./PoGoPoGe/util01.swipe.json)
3. [util02.gboardReplace](./PoGoPoGe/util02.gboardReplace.json)
4. [util03.gboardAppend](./PoGoPoGe/util03.gboardAppend.json)

## Para la gestión de la batería

En la portada de la aplicación se tiene la siguiente documentación:

- URL: <https://llamalab.com/automate/community/flows/46672>
- Nombre de la app: `🔋Estado de la Batería🪫`
- Descripción:

```markdown
# 🔋Estado de la Batería🪫

Notifica auditivamente el estado de la batería.

## Cómo funciona?

Cuando la batería está descargando, se notifica cuando llega al 30%, 20%, 10% y 5%.

Cuando la batería está cargando, notifica cuando se llega al 80%, 90% y 100%.

También identifica cuando se conecta y se desconecta el cargador notificando el nivel actual de la batería, adicionalmente si la batería está completamente cargada hay una notificación constante para recordar el nivel de la batería al 100%.

Al momento de iniciar el flujo, también notifica el estado actual de la batería.

## Pre-requisitos

1. Solo se requiere tener instalado Automate APP como interprete del aplicativo.
2. Dar permisos necesarios de la aplicación para que pueda funcionar correctamente.

## Owner

- [GitHub](https://ingalejandrorangel.github.io/IngAlejandroRangel/#/)
- [Reddit](https://www.reddit.com/u/EnoughSituation6332/s/JULiP3LwQK)
```

- Versionamiento: [1.0.0](../assets/flows/📦🐣🐢⛔%20Asistente%20PoGoPoGe.flo)
