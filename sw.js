// Minimal service worker - just needs to exist and control the page for
// Chrome to consider this a fully installable PWA. It doesn't need to
// actually cache anything since the POS itself lives in Google Sheets
// and needs a live connection anyway.
self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  // Pass-through - no offline caching, POS requires live connection.
});
