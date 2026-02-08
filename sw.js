importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

// OneSignal håndterer mye av logikken selv via importen over.
// Vi legger til standard PWA-livssyklus for å sikre at oppdateringer trer i kraft raskt.

self.addEventListener('install', (event) => {
    // Tvinger den nye service workeren til å bli aktiv umiddelbart
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Lar service workeren ta kontroll over alle åpne klienter (faner/app-vinduer) med en gang
    event.waitUntil(self.clients.claim());
    console.log('Service Worker Active (BookBil)');
});

// En enkel fetch-lytter er nødvendig for at PWA skal installeres på enkelte Android-versjoner,
// men vi trenger ikke cache noe spesifikt da dette er en online-first app.
self.addEventListener('fetch', (event) => {
    // Pass-through: gjør ingenting, bare lar nettverket virke som normalt.
});
