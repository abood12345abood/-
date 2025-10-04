if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('SW.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(err => console.log('SW Error:', err));
  });
}