self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker active');
});

self.addEventListener('fetch', (e) => {
  // PWA krever en fetch handler for å kunne installeres
});
