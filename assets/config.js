
window.$docsify = {
  name: 'Master Edgar Rangel, Vida y obra',
  // repo: 'EdgarRangelInnovate/EdgarRangelInnovate',
  basePath: '/',
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
      accent: '#42b983',
      toogleBackground: '#ffffff',
      background: '#091a28',
      textColor: '#f7e2cb',
      codeTextColor: '#ffffff',
      codeBackgroundColor: '#0e2233',
      borderColor: '#0d2538',
      blockQuoteColor: '#858585',
      highlightColor: '#d22778',
      sidebarSublink: '#b4b4b4',
      codeTypeColor: '#ffffff',
      coverBackground: 'linear-gradient(to left bottom, hsl(48.97,95.77%,25%) 0%,hsl(194.55,100%,25%) 100%)',
      toogleImage: 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)'
    },
    light: {
      accent: '#42b983',
      toogleBackground: '#091a28',
      background: '#ffffff',
      textColor: '#34495e',
      codeTextColor: '#525252',
      codeBackgroundColor: '#f8f8f8',
      borderColor: 'rgba(0, 0, 0, 0.07)',
      blockQuoteColor: '#858585',
      highlightColor: '#d22778',
      sidebarSublink: '#b4b4b4',
      codeTypeColor: '#091a28',
      coverBackground: 'linear-gradient(to left bottom, hsl(194.55,100%,46.08%) 0%,hsl(48.97,95.77%,72.16%) 100%)',
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
