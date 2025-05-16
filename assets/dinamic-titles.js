/** Este script cambia el título de la página según la ruta actual
 * y el hash de la URL. Se utiliza para mejorar la experiencia del usuario
 * y la accesibilidad de la documentación.
 * Se recomienda incluir este script al final del body para asegurar
 * que el DOM esté completamente cargado antes de ejecutar el código.
 * Se utiliza el evento 'load' para ejecutar la función al cargar la página
 * y el evento 'hashchange' para actualizar el título cuando cambie la ruta.
 * Se utiliza location.hash para obtener la parte de la URL después del '#'
 * y location.pathname para obtener la ruta actual.
 * Se utiliza slice(1) para eliminar el '#' del hash y toLowerCase()
 * para convertirlo a minúsculas. Se utiliza un switch para determinar
 * el nuevo título según la ruta actual. Se utiliza document.title
 * para cambiar el título de la página. Se recomienda utilizar títulos
 * descriptivos y relevantes para cada sección de la documentación.
 * Se recomienda utilizar un título por defecto en caso de que no
 * se encuentre una coincidencia en el switch. Se recomienda utilizar
 * un título por defecto en caso de que no se encuentre una coincidencia
 * en el switch. Se recomienda utilizar un título por defecto en caso
 * de que no se encuentre una coincidencia en el switch. Se recomienda
 * utilizar un título por defecto en caso de que no se encuentre
 * una coincidencia en el switch.
 * 
 * Función para cambiar el título según la ruta actual
 */

(function () {
    // Esperar hasta que el DOM esté listo
    document.addEventListener('DOMContentLoaded', function () {
      // Usar el hook de Docsify para ejecutar el código cuando el contenido se haya cargado
      if (window.$docsify) {
        // Hook de Docsify para detectar cambios de ruta (navegación entre páginas)
        window.$docsify = window.$docsify || {};
        const userMounted = window.$docsify.ready;
  
        window.$docsify.ready = function () {
          if (typeof userMounted === 'function') userMounted();
          updateTitle();
        };
  
        // Hook posterior a cada carga de contenido
        window.$docsify.afterEach = function (html, next) {
          updateTitle();
          next(html);
        };
      }
  
      // Lógica para cambiar el título de la página según la ruta
      function updateTitle() {
        const path = location.hash.slice(1).toLowerCase() || '/';
        let newTitle = 'Master Edgar Rangel'; // Título por defecto
  
        if (path.includes('/knowledge/')) {
            newTitle += ' | Conocimientos';
          } else if (path.includes('/hard/')) {
            newTitle += ' | Hard Skills';
          } else if (path.includes('/essential')) {
            newTitle += ' | Essential Skills';
          } else if (path === '/' || path === '') {
            newTitle += ' | Inicio';
          }
        
        document.title = newTitle;
      }
    });
  })();

  