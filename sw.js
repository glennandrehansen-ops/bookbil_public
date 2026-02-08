importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
    console.log('Service Worker Active (v2)');
});

// Lytt etter test-beskjed fra appen (Debug)
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'TEST_NOTIFICATION') {
        const title = 'Testvarsel';
        const options = {
            body: 'Dette er en test direkte fra telefonen din. Hvis du ser dette, fungerer varsler!',
            icon: 'https://img.icons8.com/color/512/police-car.png',
            badge: 'https://img.icons8.com/color/512/police-car.png'
        };
        event.waitUntil(self.registration.showNotification(title, options));
    }
});

// En enkel fetch-lytter for å tilfredsstille PWA-krav på Android
self.addEventListener('fetch', (event) => {
    // Pass-through
});
