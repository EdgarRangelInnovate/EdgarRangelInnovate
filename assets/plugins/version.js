const versionInfoPlugin = function(hook) {
  hook.doneEach(function() {
    setTimeout(() => {
      fetch('/version-info.json')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const projectVersionSpan = document.getElementById('project-version');
          projectVersionSpan.textContent = 'N/A';

          if (data.version && projectVersionSpan) {
            projectVersionSpan.textContent = data.version;
          }
        })
        .catch(error => {
          console.error('Error fetching version info:', error);
          const projectVersionSpan = document.getElementById('project-version');
          if (projectVersionSpan) projectVersionSpan.textContent = 'Error';
        });
    }, 0);
  });
};

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [].concat(
  versionInfoPlugin,
  window.$docsify.plugins || []
);