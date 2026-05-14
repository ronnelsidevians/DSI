const CACHE_NAME = 'dsi-v2-cache';
// Тут перерахуйте всі ваші файли, які треба зберегти
const urlsToCache = [
  './index.html',
  './manifest.json',
  './data1.json',
  './data2.json',
  './data3.json',
  './data4.json',
  './data5.json',
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
