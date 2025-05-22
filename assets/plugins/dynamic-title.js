const dynamicTitlePlugin = function (hook, vm) {
  hook.doneEach(function () {
    setTimeout(() => {
      const baseTitle = 'Master Edgar Rangel';
      let currentPageTitle = 'Inicio';
      const mainContentH1 = document.querySelector('.markdown-section h1');
      if (mainContentH1 && mainContentH1.textContent) {
        currentPageTitle = mainContentH1.textContent.trim();
        // Opcional: Puedes añadir mapeos aquí si tus H1 son abreviaciones
        // if (currentPageTitle.toLowerCase() === 'professional path') {
        //   currentPageTitle = 'Trayectoria Profesional';
        // }
        // etc.
      } else if (vm.route.title && vm.route.title !== 'README') {
        currentPageTitle = vm.route.title.trim();
      }

      let newTitle = baseTitle;
      if (currentPageTitle === 'Inicio' || vm.route.path === '/') {
        newTitle = `${baseTitle} | Inicio`;
      } else if (currentPageTitle && currentPageTitle !== baseTitle) {
        newTitle = `${baseTitle} | ${currentPageTitle}`;
      }

      document.title = newTitle;
    }, 0);
  });
};

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [].concat(
  dynamicTitlePlugin,
  window.$docsify.plugins || []
);