const lastUpdatePlugin = function(hook) {
  hook.doneEach(function() {
    setTimeout(() => {
      fetch('/assets/last-update.json')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const lastUpdateSpan = document.getElementById('last-update');
          lastUpdateSpan.textContent = 'N/A';

          if (lastUpdateSpan && data.last_update) {
            lastUpdateSpan.textContent = data.last_update;
          }
        })
        .catch(error => {
          console.error('Error fetching version info:', error);
          const lastUpdateSpan = document.getElementById('last-update');
          if (lastUpdateSpan) lastUpdateSpan.textContent = 'Error';
        });
    }, 0);
  });
};

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [].concat(
  lastUpdatePlugin,
  window.$docsify.plugins || []
);