// Lista de URLs de plugins de CDN y tus propios plugins
const pluginUrls = [
  // Plugins de CDN (Docsify Plugins)
  //   'https://cdn.jsdelivr.net/npm/docsify-drawio/viewer.min.js',
  //   'https://cdn.jsdelivr.net/npm/docsify-drawio/drawio.js',
  '//cdn.jsdelivr.net/npm/docsify-copy-code/dist/docsify-copy-code.min.js', // Copy to clipboard
  '//cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/dist/index.min.js', // Tema oscuro y claro switcher
  '//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js', // pagination
  '//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js', // sidebar collapse
  '//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js', // zoom image
  // '//unpkg.com/docsify-scroll-to-top/dist/docsify-scroll-to-top.min.js', // scroll to top
  // '//unpkg.com/docsify/lib/plugins/search.min.js', // text search
  '//cdn.jsdelivr.net/npm/d3@7', // D3.js no es un plugin de Docsify per se, pero es una dependencia para algunos
  '//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js', // Mermaid core
  '//unpkg.com/docsify-mermaid@latest/dist/docsify-mermaid.js', // mermaid conector
  // '//unpkg.com/docsify-mermaid-zoom/dist/docsify-mermaid-zoom.js', // mermaid zoom
  // Tus plugins personalizados (rutas relativas a la raíz del sitio)
  '/assets/plugins/dynamic-title.js', // dynamic titles by each page
  '/assets/plugins/year-update.js', // render actual year
];

function loadScript(url) {
  const script = document.createElement('script');
  script.src = url;
  // Para plugins de Docsify, simplemente adjuntamos el script.
  // Su código de registro (window.$docsify.plugins.push) se ejecutará
  // tan pronto como el script se cargue y se parseé.
  script.onload = () => console.log(`Loaded: ${url}`);
  script.onerror = () => console.error(`Failed to load script: ${url}`);
  document.body.appendChild(script);
}

// Cargar todos los scripts inmediatamente después de que main.js se ejecute.
// Esto sucede justo después de Docsify en index.html.
console.log('main.js: Iniciando carga de plugins.');
pluginUrls.forEach(url => {
  // Manejo especial para módulos ES (.mjs)
  // Aunque ya tienes el import en index.html para mermaid,
  // si tuvieras más módulos cargados aquí, usarías:
  if (url.endsWith('.mjs')) {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = url;
    script.onload = () => console.log(`Loaded module: ${url}`);
    script.onerror = () => console.error(`Failed to load module: ${url}`);
    document.body.appendChild(script);
  } else {
    loadScript(url);
  }
});
console.log('main.js: Carga de plugins iniciada.');
