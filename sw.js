// @ts-check
/* eslint-env serviceworker */

const CACHE = 'cash-app-v5';
const ASSETS = ['./', './index.html'];

self.addEventListener('install', /** @param {ExtendableEvent} e */ e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => /** @type {ServiceWorkerGlobalScope} */ (/** @type {unknown} */ (self)).skipWaiting())
  );
});

self.addEventListener('activate', /** @param {ExtendableEvent} e */ e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => /** @type {ServiceWorkerGlobalScope} */ (/** @type {unknown} */ (self)).clients.claim())
  );
});

// Stale-while-revalidate: serve cache instantly, refresh in background.
self.addEventListener('fetch', /** @param {FetchEvent} e */ e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const networkFetch = fetch(e.request)
        .then(res => {
          if (res && res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
