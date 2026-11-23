// Minha Semana 1.1 — rede primeiro e fallback offline.
const CACHE = 'minha-semana-app-v1.1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil((async () => {
  const keys = await caches.keys();
  await Promise.all(keys.filter(k => k.startsWith('minha-semana-') && k !== CACHE).map(k => caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    try {
      const response = await fetch(req);
      if (response.ok) { const cache = await caches.open(CACHE); await cache.put(req, response.clone()); }
      return response;
    } catch (err) {
      const saved = await caches.match(req);
      if (saved) return saved;
      if (req.mode === 'navigate') {
        const fallback = await caches.match('./index.html');
        if (fallback) return fallback;
      }
      throw err;
    }
  })());
});
