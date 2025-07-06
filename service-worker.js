// Cache files on service worker install
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('hela-chapchap-cache').then((cache) => {
            return cache.addAll([
                '/',
                'index.html',
                'style.css',
                'IMG-20250323-WA0008.png',
                'manifest.json',
                // Include any other files you want cached here
            ]);
        })
    );
});

// Serve cached files on fetch
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return cached file if available or fetch from network
            return cachedResponse || fetch(event.request);
        })
    );
});