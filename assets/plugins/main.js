// assets/plugins/load-all-plugins.js

// Lista de URLs de plugins de CDN y tus propios plugins
const pluginUrls = [
  // Plugins de CDN (Docsify Plugins)
  '//cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/dist/index.min.js',
  '//unpkg.com/docsify/lib/plugins/search.min.js',
  '//cdn.jsdelivr.net/npm/docsify-copy-code/dist/docsify-copy-code.min.js',
  '//cdn.jsdelivr.net/npm/d3@7', // D3.js no es un plugin de Docsify per se, pero es una dependencia para algunos
  '//unpkg.com/docsify-mermaid@latest/dist/docsify-mermaid.js',
  '//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js', // Mermaid core
  '//unpkg.com/docsify-mermaid@2.0.0/dist/docsify-mermaid.js', // Asumo que este es diferente al anterior
  '//unpkg.com/docsify-mermaid-zoom/dist/docsify-mermaid-zoom.js',
  'https://cdn.jsdelivr.net/npm/docsify-drawio/viewer.min.js',
  'https://cdn.jsdelivr.net/npm/docsify-drawio/drawio.js',
  '//unpkg.com/docsify-scroll-to-top/dist/docsify-scroll-to-top.min.js',
  '//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js',
  '//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js',
  // Tus plugins personalizados (rutas relativas a la raíz del sitio)
  '/assets/plugins/year-updater.js',
  '/assets/plugins/dynamic-title.js',
];

// Función para cargar scripts dinámicamente
function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => resolve(url);
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
    document.body.appendChild(script);
  });
}

// Carga todos los plugins en secuencia
// Puedes usar Promise.all si el orden no importa, pero para plugins Docsify
// el orden a veces sí importa (ej. core plugin antes de su theme o add-ons).
// Una forma simple es encadenar promesas o usar async/await.
async function loadAllPlugins() {
  for (const url of pluginUrls) {
    try {
      if (url.endsWith('.mjs')) { // Para módulos ES como mermaid.esm.min.mjs
        const script = document.createElement('script');
        script.type = 'module';
        script.src = url;
        document.body.appendChild(script);
        // Modules load asynchronously, might need to wait for a specific global to be ready
        // if subsequent scripts depend on it. For now, basic load.
      } else {
        await loadScript(url);
      }
      // console.log(`Loaded: ${url}`);
    } catch (error) {
      console.error(error.message);
    }
  }

  // Lógica para Mermaid que usa 'import' directamente en tu index.html
  // Si 'mermaid' es cargado como un módulo ES (.mjs), la configuración debe ir después de su carga.
  // Es mejor si esta lógica se traslada dentro de un plugin específico para Mermaid,
  // pero si la mantienes global, asegúrate de que se ejecute después de la carga de mermaid.
  // Aquí la incluimos si necesitas una configuración global después de todo.
  if (typeof mermaid !== 'undefined' && typeof window.mermaidConfigInitialized === 'undefined') {
      import("https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs").then((mod) => {
          var config = {
            suppressErrors: true,
            flowchart: {
              useMaxWidth: false,
            },
          };
          mod.default.initialize(config);
          window.mermaid = mod.default; // Assign to window for older plugins
          window.mermaidConfigInitialized = true; // Flag to prevent re-initialization
      }).catch(error => console.error("Failed to load mermaid module:", error));
  }
}

// Iniciar la carga de plugins después de que Docsify principal esté cargado
// usando el hook ready o doneEach (aunque aquí lo hacemos justo después de cargar el main Docsify script en index.html)
// Una alternativa es que este script se cargue *después* del script principal de Docsify
// y se ejecute inmediatamente, o en DOMContentLoaded.

// Para asegurar que `window.$docsify` está definido y Docsify es cargado antes
// de que este script intente configurar plugins, este script DEBE cargarse DESPUÉS
// de <script src="assets/config.js"></script> y <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
// en tu index.html.

// Esto asegura que window.$docsify.plugins tenga todo lo que necesitas.
// Los plugins se ejecutan cuando Docsify los invoca.