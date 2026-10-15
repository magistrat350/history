/* Einfacher Offline-Cache: erst Netz, bei Fehler aus dem Cache. */
const CACHE = 'chronika-v3';
const ASSETS = [
  './', 'index.html', 'css/style.css', 'js/app.js', 'icon.svg', 'manifest.webmanifest',
  'js/version.js', 'data/themes.js', 'data/idioms.js', 'data/idioms-2.js', 'data/talk.js', 'data/facts.js', 'data/more.js', 'data/articles-antike.js', 'data/articles-mittelalter.js',
  'data/articles-neuzeit.js', 'data/articles-moderne.js', 'data/world.js', 'data/countries-europa.js',
  'data/countries-asien.js', 'data/countries-afrika.js', 'data/countries-amerika-ozeanien.js'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});
