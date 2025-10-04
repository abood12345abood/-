self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated');
});

self.addEventListener('fetch', (e) => {
  // هذا اختياري، يخلي الموقع يعمل أوفلاين
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
