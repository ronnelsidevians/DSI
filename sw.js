const CACHE_NAME = 'dsi-v1-cache'; // Змінюйте цифру щоразу, коли щось міняєте в коді!

const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  // Ваші JSON файли (назви мають бути точними!)
  './DSI_alarms.json',
  './DSI_algorithm.json',
  './DSI_sm_templates.json',
  './DSI_synonyms.json',
  './DSI_system.json',
  // ЗОВНІШНІ БІБЛІОТЕКИ (без них офлайн не буде графіків)
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2.0.1/dist/chartjs-plugin-zoom.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

// Встановлення: зберігаємо все в пам'ять телефону
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Кешування активовано');
      return cache.addAll(urlsToCache);
    })
  );
});

// Робота офлайн: беремо файли з кешу, а не з мережі
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
