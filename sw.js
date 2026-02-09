importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
  self.skipWaiting(); // Tving ny versjon til å aktiveres med en gang
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Active');
  return self.clients.claim(); // Ta kontroll over siden umiddelbart
});

self.addEventListener('fetch', (e) => {
  // PWA krever en fetch handler, men vi lar den være tom foreløpig
  // for å la nettleseren håndtere nettverkstrafikk som normalt.
  // OneSignal sin importScripts ovenfor håndterer push-events.
});
