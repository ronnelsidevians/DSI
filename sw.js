const CACHE_NAME = 'dsi-v4-cache';
// Тут перерахуйте всі ваші файли, які треба зберегти
const urlsToCache = [
  './index.html',
  './manifest.json',
  './DSI_alarms.json',
  './DSI_algorithm.json',
  './DSI_sm_templates.json',
  './DSI_synonyms.json',
  './DSI_system.json',
  './icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
