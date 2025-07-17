const yearUpdaterPlugin = function(hook) {
  hook.doneEach(function() {
    setTimeout(() => { 
      const yearSpan = document.getElementById('current-year');
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
    }, 0);
  });
};

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [].concat(
  yearUpdaterPlugin,
  window.$docsify.plugins || []
);
