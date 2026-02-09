self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker active');
  e.waitUntil(self.clients.claim());
});

// LYTT ETTER PUSH-MELDINGER
self.addEventListener('push', (e) => {
  if (!e.data) return;

  const data = e.data.json();
  const title = data.title || 'BookBil Jæren';
  const options = {
    body: data.body || 'Ny beskjed',
    icon: 'https://cdn-icons-png.flaticon.com/512/7840/7840958.png', // App-ikon
    badge: 'https://cdn-icons-png.flaticon.com/512/7840/7840958.png', // Lite ikon for statusbar (Android)
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/' // Hvor skal vi når brukeren trykker?
    },
    actions: [
      { action: 'open', title: 'Åpne app' }
    ]
  };

  e.waitUntil(self.registration.showNotification(title, options));
});

// HÅNDTER KLIKK PÅ VARSEL
self.addEventListener('notificationclick', (e) => {
  e.notification.close();

  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Hvis appen allerede er åpen, fokuser på den
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url && 'focus' in client) {
          return client.focus();
        }
      }
      // Hvis ikke, åpne ny fane
      if (clients.openWindow) {
        return clients.openWindow(e.notification.data.url);
      }
    })
  );
});
