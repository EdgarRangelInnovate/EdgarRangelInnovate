
window.$docsify = {
  name: 'Master Edgar Rangel, Vida y obra',
  // repo: 'EdgarRangelInnovate/EdgarRangelInnovate',
  coverpage: true,
  relativePath: true,
  onlyCover: true,
  loadSidebar: true,
  autoCollapse: true,
  loadNavbar: true,
  maxLevel: 6,
  subMaxLevel: 6,
  mergeNavbar: true,
  logo: './assets/img/app.png',
  nativeEmoji: true,
  pagination: {
    crossChapter: true,
    crossChapterText: true,
  },
  alias: {
    '/manifiesto': '/skills/essential/critical-thinking/articles/existential-adventure.md',
    '/hobbies/creativity/articles/existential-adventure.md': '/skills/essential/critical-thinking/articles/existential-adventure.md',
  },
  // gtag: 'G-EXDNT7EDBM',
  // https://github.com/zhengxiangqi/docsify-scroll-to-top
  scrollToTop: {
    auto: true,
    text: '↑',
    right: 15,
    bottom: 15,
    offset: 500,
  },
  // https://docsify-darklight-theme.boopathikumar.me/
  darklightTheme: {
    siteFont: 'PT Sans | Source Sans Pro',
    defaultTheme: 'light | dark',
    formatUpdated: '{YYYY}-{MM}-{DD}',
    codeFontFamily: 'Roboto Mono, Monaco, courier, monospace',
    dark: {
      toogleBackground: '#E9C46A',              // Mostaza suave para contraste
      background: '#1B2A41',                    // Azul profundo para fondo
      textColor: '#F4F4F4',                     // Texto claro sobre fondo oscuro
      codeBackgroundColor: '#264653',           // Azul pizarra para bloques de código
      borderColor: '#2A3C4A',                   // Borde sutil en azul grisáceo
      blockQuoteColor: '#A89EB3',               // Lavanda grisácea para citas
      accent: '#D88C74',                        // Terracota suavizado
      highlightColor: '#D88C74',               // Para resaltar sin saturar
      codeTextColor: '#D88C74',                // Código con calidez controlada
      coverBackground: 'linear-gradient(to left bottom, #E9C46A 0%, #264653 100%)',
      toogleImage: 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)'
    },
    light: {
      accent: '#E76F51',                        // Terracota como color de acción
      toogleBackground: '#264653',              // Azul pizarra para contraste
      background: '#FFFFFF',                    // Fondo claro
      textColor: '#264653',                     // Texto en azul pizarra
      codeTextColor: '#E76F51',                 // Código en terracota
      codeBackgroundColor: '#F8F8F8',           // Fondo claro para bloques de código
      borderColor: 'rgba(0, 0, 0, 0.07)',       // Borde sutil
      blockQuoteColor: '#A89EB3',               // Lavanda grisácea para citas
      highlightColor: '#E76F51',                // Terracota para resaltar
      sidebarSublink: '#A89EB3',                // Subenlaces en lavanda
      codeTypeColor: '#264653',                 // Tipos de código en azul pizarra
      coverBackground: 'linear-gradient(to left bottom, #E9C46A 0%, #A8C9D8 100%)',
      toogleImage: 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/moon.svg)'
    }
  },
  search: {
    // maxAge: 86400000, // Tiempo de vida de la caché de búsqueda en milisegundos (1 día)
    placeholder: 'Buscar...', // Texto del placeholder en la barra de búsqueda
    // noData: 'No se encontraron resultados para "${_}"', // Texto cuando no hay resultados
    // pathNamespaces: ['/en', '/zh-cn'], // Si tuvieras multi-idioma (comentar si no es el caso)
    // Cobertura de la búsqueda: 'auto' indexa todas las páginas,
    // o puedes especificar un array de rutas para indexar solo ciertas páginas.
    // Para empezar, 'auto' es lo más fácil.
    // depth: 2, // Profundidad de los títulos (h1, h2, etc.) a indexar
    // hideOtherSidebarContent: false, // Ocultar otro contenido del sidebar al buscar
    // Recomendado: Agrega esto para que los resultados aparezcan más rápido
    // El plugin buscará en el archivo `_sidebar.md` y `_navbar.md` también.
    // Esto es muy útil.
    paths: 'auto',
    // depth: 6, // Indexa hasta H6
  },
  markdown: {
    sanitize: false,
    // renderer: {
    //      code: function (code, lang) {
    //           if (lang === 'drawio') {
    //                if (window.drawioConverter) {
    //                     console.log('drawio 转化中');
    //                     return window.drawioConverter(code);
    //                } else {
    //                     return `<div class='drawio-code'>${code}</div>`;
    //                }
    //           } else {
    //                return this.origin.code.apply(this, arguments);
    //           }
    //      },
    // },
  },
  // vueComponents: {
  //      'contador-button': {
  //           template: `
  //             <button @click="count += 1">
  //                  Me has clicado {{ count }} veces
  //                </button>
  //             `,
  //           data() {
  //                return {
  //                     count: 0,
  //                };
  //           },
  //      },
  // },
  mermaidConfig: {
    startOnLoad: true,
    querySelector: '.mermaid',
  },
};
