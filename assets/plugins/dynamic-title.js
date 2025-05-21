const dynamicTitlePlugin = function(hook, vm) {
  hook.doneEach(function() {
    const currentPageTitle = vm.route.title || 'Inicio';

    const baseTitle = 'Master Edgar Rangel';

    let newTitle = baseTitle;
    if (currentPageTitle && currentPageTitle !== 'README' && currentPageTitle.toLowerCase() !== 'home') {
      newTitle += ` | ${currentPageTitle}`;
    }

    document.title = newTitle;

    // console.log(`Título de la página actualizado a: ${newTitle}`); // Para depuración
  });
};

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [].concat(
  dynamicTitlePlugin,
  window.$docsify.plugins || []
);