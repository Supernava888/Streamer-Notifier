const CACHE_NAME = 'streamer-cache';

self.addEventListener('install', (event) => {
  // Open a cache for streamer data during installation
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache initial streamer data here if needed
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Intercept network requests for streamer data
  if (event.request.url.includes('Streamer-Notifier/dist/background.js')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((fetchResponse) => {
          // Cache the fetched streamer data for future use
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
          });
          return fetchResponse;
        });
      })
    );
  }
});