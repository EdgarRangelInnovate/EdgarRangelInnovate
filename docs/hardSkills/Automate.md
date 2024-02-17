# [AUTOMATE](https://llamalab.com/) DE LLAMALAB

Es un aplicativo de automatización de procesos en teléfonos móviles, que permite realizar emulación de clicks, ingreso de texto, captura de pantalla, entre otras funcionalidades. Permite automatizar procesos en aplicativos móviles, como por ejemplo: WhatsApp, Facebook, Instagram, Twitter, entre otros.

Se aprende esta tecnología realizando automatizaciones con varios enfoques:

## Para el juego de Pokemon Go junto con Pokegenie

En la portada de la aplicación se tiene la siguiente documentación:

- URL: <https://llamalab.com/automate/community/flows/47276>
- Nombre de la app: `📦🐣🐢⛔ Asistente PoGoPoGe`
- Versionamiento: [0.0.1](../assets/flows/📦🐣🐢⛔%20Asistente%20PoGoPoGe.flo)

[Descripción](../assets/hardSkills/PoGoPoGe/markdown/AsistentePoGoPoGe.md ":include :type=iframe :height=100% :width=300px :scrolling=auto")

[Publicación](https://llamalab.com/automate/community/flows/47276 ":include :type=iframe :height=100% :width=300px :scrolling=auto")

### Arquitectura

[Arquitectura](../assets/hardSkills/PoGoPoGe/pdf/📦🐣🐢⛔%20Asistente%20PoGoPoGe.pdf ":include :type=iframe :height=100% :width=300px :scrolling=auto")

Para este juego se crea una arquitectura de llamados mediante json, los cuales están distribuidos en callers para módulos y para componentes:

#### Menus

Los menús están en un llamado simple de diccionarios de datos donde la llave es el nombre del módulo y el valor es la etiqueta que se muestra en el menú:

1. [menu.filters&Search](../assets/hardSkills/PoGoPoGe/json/menu.filters&Search.json)
2. [menu.renames](../assets/hardSkills/PoGoPoGe/json/menu.renames.json)
3. [menu.trades](../assets/hardSkills/PoGoPoGe/json/menu.trades.json)
4. [menu.locations](../assets/hardSkills/PoGoPoGe/json/menu.locations.json)

#### Configuraciones

Los siguientes son json de configuraciones:

1. [config.general](../assets/hardSkills/PoGoPoGe/json/config.general.json)

#### Procesos

Estos json son los llamados hacia los componentes;

1. ["module.familyFilter"](..assets/hardSkills/PoGoPoGe/json/module.familyFilter.json)
2. ["module.familyFilter variables"](..assets/hardSkills/PoGoPoGe/json/module.familyFilterVariables.json)
3. ["module.renamePokegenie controller"](..assets/hardSkills/PoGoPoGe/json/module.renamePokegenieController.json)
4. ["module.renamePokegenie"](..assets/hardSkills/PoGoPoGe/json/module.renamePokegenie.json)
5. ["module.renamePokegenie Variables"](..assets/hardSkills/PoGoPoGe/json/module.renamePokegenieVariables.json)
6. ["module.renamePokegenie true"](..assets/hardSkills/PoGoPoGe/json/module.renamePokegenieTrue.json)
7. ["module.renamePokegenie false"](..assets/hardSkills/PoGoPoGe/json/module.renamePokegenieFalse.json)

## Para la gestión de la batería

En la portada de la aplicación se tiene la siguiente documentación:

- URL: <https://llamalab.com/automate/community/flows/46672>
- Nombre de la app: `🔋Estado de la Batería🪫`
- Versionamiento: [1.0.0](../assets/flows/📦🐣🐢⛔%20Asistente%20PoGoPoGe.flo)

[Descripción](../assets/hardSkills/Battery/markdown/EstadoDeLaBatería.md ":include :type=iframe :height=100% :width=300px :scrolling=auto")

[Publicación](https://llamalab.com/automate/community/flows/46672 ":include :type=iframe :height=100% :width=300px :scrolling=auto")

### Arquitectura

[Arquitectura](../assets/hardSkills/Battery/pdf/🔋Estado%20de%20la%20Batería🪫.pdf ":include :type=iframe :height=100% :width=300px :scrolling=auto")

Para esta aplicación se crea una arquitectura con menos de 30 bloques para que sea gratuita.
