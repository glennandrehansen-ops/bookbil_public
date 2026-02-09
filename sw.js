importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

// Vi beholder standard PWA-livssyklus, men lar OneSignal styre push-hendelsene.

self.addEventListener('install', (event) => {
    // Tvinger den nye service workeren til å bli aktiv umiddelbart
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Lar service workeren ta kontroll over alle åpne klienter med en gang
    event.waitUntil(self.clients.claim());
    console.log('Service Worker Active (BookBil + OneSignal)');
});

// En enkel fetch-lytter er nødvendig for at PWA skal installeres korrekt
self.addEventListener('fetch', (event) => {
    // Vi gjør ingenting her, lar nettverket fungere som normalt (Network Only strategy)
});
