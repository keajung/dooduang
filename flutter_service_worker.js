'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "456fdb238211ab490746ff899f70e136",
"assets/assets/images/bg/home.jpg": "bcde3fd6641202e344a53d89065ad41c",
"assets/assets/images/bg/home2.jpg": "ac4abf1b66b73c29f43f23ed2c4ec31c",
"assets/assets/images/box2.gif": "1104fd25112cdde9217ef52310bd13df",
"assets/assets/images/calendar.png": "67a699d605b87d9ae1e1d894c4782ed1",
"assets/assets/images/card.png": "a0e4d42e59d34272a4aea80c1dfecbfb",
"assets/assets/images/carddeck.png": "cba8ccaa982e68a9aff6b06d5762238d",
"assets/assets/images/cards/card22/1.png": "14cfadee117edf6d8f5f9c12ae06d12d",
"assets/assets/images/cards/card22/10.png": "e3c510bcae0596e491098375de94ee35",
"assets/assets/images/cards/card22/11.png": "fd16cf43b66183e3cd999c90371226e6",
"assets/assets/images/cards/card22/12.png": "c64fc46f9a5ed8c0de5ecab972124c94",
"assets/assets/images/cards/card22/13.png": "42e4a89b0f6396ea867f6c5b0c9af16f",
"assets/assets/images/cards/card22/14.png": "de59c4c6b1752c7a1d9e79b98f62940a",
"assets/assets/images/cards/card22/15.png": "a9357f479d8e70cbed860a413d7fb8cf",
"assets/assets/images/cards/card22/16.png": "337eacbd3d4a66e585291aa4000ffbed",
"assets/assets/images/cards/card22/17.png": "f6df2ec5a7ea54b415ef8bf03478f5c4",
"assets/assets/images/cards/card22/18.png": "c90940ab9ab5ff78347df2ae0b062329",
"assets/assets/images/cards/card22/19.png": "096d23bb57bb55f277a05db6f59d4755",
"assets/assets/images/cards/card22/2.png": "676072fb227cda119fb245bccd1b1ea1",
"assets/assets/images/cards/card22/20.png": "4379e95e654cd26eedf282f1fa10badd",
"assets/assets/images/cards/card22/21.png": "bb2843f527ede0bb08bd35265b9afbfb",
"assets/assets/images/cards/card22/22.png": "d5319349939faf6d54b2e3ebb255ef66",
"assets/assets/images/cards/card22/3.png": "6cac716144d93f74f794447ef3ec76b2",
"assets/assets/images/cards/card22/4.png": "20a81c2d609ff2734cee516d61f02f2c",
"assets/assets/images/cards/card22/5.png": "48de84f566e166dab5ba2df64bfd4dd9",
"assets/assets/images/cards/card22/6.png": "afdf79f7735ccfba351c0c008ea1b274",
"assets/assets/images/cards/card22/7.png": "4a07ca55cd67440587e0b1486cad6b7e",
"assets/assets/images/cards/card22/8.png": "82456bfc94002565cad20f2be4507386",
"assets/assets/images/cards/card22/9.png": "6a15a774d770e11a0a60ecd6f838626b",
"assets/assets/images/cards/cardCoin/1.png": "0be9ab73d44b3e6c66b82b8364efb607",
"assets/assets/images/cards/cardCoin/10.png": "f2e81dd2bd6385a3d9cbe765d556aa69",
"assets/assets/images/cards/cardCoin/11.png": "aeecc7af98e3f15cedb93b15387464c5",
"assets/assets/images/cards/cardCoin/12.png": "f15bdb8ba28ad909393dcf11a2ff5209",
"assets/assets/images/cards/cardCoin/13.png": "7d1ec325254d935c41850fff31335baa",
"assets/assets/images/cards/cardCoin/14.png": "0f184843ac9bfe8be2bd09c5e60a6973",
"assets/assets/images/cards/cardCoin/2.png": "147c92e39fab2679ad1876a8da966700",
"assets/assets/images/cards/cardCoin/3.png": "257618da0c5212fb9dac45575e6978ad",
"assets/assets/images/cards/cardCoin/4.png": "9a639a0795a9bf3a4b624931a3e7d36f",
"assets/assets/images/cards/cardCoin/5.png": "ff81aa6161e8c2f7fdc9d1a418d56079",
"assets/assets/images/cards/cardCoin/6.png": "831ec40629fb8787869482b8ab846e6c",
"assets/assets/images/cards/cardCoin/7.png": "be9e492c0a189074b0482f6eadc51cee",
"assets/assets/images/cards/cardCoin/8.png": "b32ad492b5a0e22522b04001e2dd38a1",
"assets/assets/images/cards/cardCoin/9.png": "9d87069cf11d4e16c165cf1217b072c6",
"assets/assets/images/cards/cardCup/1.png": "ebb91d21ca9c4d0f05493b8e35a561e1",
"assets/assets/images/cards/cardCup/10.png": "95191581146613de92c04242be288a73",
"assets/assets/images/cards/cardCup/11.png": "e16dbfe58e2a36ba9a2bc677041c635e",
"assets/assets/images/cards/cardCup/12.png": "7c3d79b0c099079d23735b7c5c84ee09",
"assets/assets/images/cards/cardCup/13.png": "fbf7e49117a9f6f81c9e6fec6720468e",
"assets/assets/images/cards/cardCup/14.png": "4f218c1d8ead1b6664d6502d6a59a9f6",
"assets/assets/images/cards/cardCup/2.png": "e2773691df86ba2a51cf69c03eb867a9",
"assets/assets/images/cards/cardCup/3.png": "75b3892675fa884c443a373c78ab61e3",
"assets/assets/images/cards/cardCup/4.png": "0873aa7fc9d713eacf8b8f4928207ddd",
"assets/assets/images/cards/cardCup/5.png": "4a61ac1d1420b04a82ab1529bc641bea",
"assets/assets/images/cards/cardCup/6.png": "d3cf78a94afca624978b7a7693f4db3c",
"assets/assets/images/cards/cardCup/7.png": "73f30cc26a79df30d6dfbca652fefbb6",
"assets/assets/images/cards/cardCup/8.png": "979c512042989013e4f2559a6641120d",
"assets/assets/images/cards/cardCup/9.png": "8ae00df7ed1950770f0dc76fea3ca39f",
"assets/assets/images/cards/cardSword/1.png": "8d14e86b8f7dcf960bab7400c8862fcc",
"assets/assets/images/cards/cardSword/10.png": "6707d4b2a8863dde659002c25260d05c",
"assets/assets/images/cards/cardSword/11.png": "25c97404d33e10c546886550f95cac05",
"assets/assets/images/cards/cardSword/12.png": "e21f0fac2fa8546a3ab601acb9eeae02",
"assets/assets/images/cards/cardSword/13.png": "be27f723f1a8ec58e9a08070aded9ea1",
"assets/assets/images/cards/cardSword/14.png": "13e999e115131ea6fa6a70503778580d",
"assets/assets/images/cards/cardSword/2.png": "beedca944a399086aa300c63ed423365",
"assets/assets/images/cards/cardSword/3.png": "0158f8742df17b52187d614284c121e2",
"assets/assets/images/cards/cardSword/4.png": "40437e9974de185415f824ec6d329043",
"assets/assets/images/cards/cardSword/5.png": "1b7eae70486387117c865106fef3b8c4",
"assets/assets/images/cards/cardSword/6.png": "2155ca85d98b74a6189b8425ab7909c0",
"assets/assets/images/cards/cardSword/7.png": "75032e071779ca8e91189597badd9058",
"assets/assets/images/cards/cardSword/8.png": "15564311c08cad6b6feea3c09043fe7b",
"assets/assets/images/cards/cardSword/9.png": "ec78948d450a19c117a95426c552eb9c",
"assets/assets/images/cards/cardWood/1.png": "ce99512c014bca51ce6e4ce5a7d361be",
"assets/assets/images/cards/cardWood/10.png": "9c752a065182558cdba8971e878f84b5",
"assets/assets/images/cards/cardWood/11.png": "410ba8418ac93e568c37f31aedea765c",
"assets/assets/images/cards/cardWood/12.png": "1a3858ba9b470590032c304f66ca73c6",
"assets/assets/images/cards/cardWood/13.png": "19df2b97e45ca1bd0fbc70ed177c8b4d",
"assets/assets/images/cards/cardWood/14.png": "f3da5212e3928ab51b354c1c8a844211",
"assets/assets/images/cards/cardWood/2.png": "f5b6e765ef3237afe5a79ae59c51980d",
"assets/assets/images/cards/cardWood/3.png": "fd4a0fc39fe5c17db637b91fa1a23038",
"assets/assets/images/cards/cardWood/4.png": "584b345e48766df247e1384d2e78c39d",
"assets/assets/images/cards/cardWood/5.png": "2d75833f63fce4869dc31929246925a6",
"assets/assets/images/cards/cardWood/6.png": "5e629da981319d2df3abb6cc343fe3f6",
"assets/assets/images/cards/cardWood/7.png": "8e8b1aec9071a62c30d89a57cf8c6046",
"assets/assets/images/cards/cardWood/8.png": "21a030412fdb405d2b3d6015ebf47b40",
"assets/assets/images/cards/cardWood/9.png": "1849243d2b2a95233d6aac41ebe75556",
"assets/assets/images/fivecard.png": "3c3f26a4a01a312031c9f1e947c9d693",
"assets/assets/images/icon/book.png": "2bbad4c6a34be86d9b9ff8be9fe9c92b",
"assets/assets/images/icon/logo.png": "d46ead07de338ec5433a1123ecb27f04",
"assets/assets/images/icon/magic-wand.png": "618b48a2a1125bfdd5168f329a580d6a",
"assets/assets/images/icon/scroll%2520(1).png": "8746197fa6fe85eff200e5d8311dbfc3",
"assets/assets/images/siemse.png": "47ea956593ecd98cc83a1bac6e3a1cc4",
"assets/assets/images/ss3.png": "a1354fc60ff4cf12baaa7659ded53846",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "569256377baac6b62af10e9869bb9bf8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fba3315e9024bd1d1063742b1a0ffb15",
"/": "fba3315e9024bd1d1063742b1a0ffb15",
"main.dart.js": "b86cebad8c21969198cd7a2ef1688055",
"manifest.json": "34d60a83ae929f39054f2ceeb6d9fc85",
"version.json": "1d188648d780692ac1de8dff01bb090b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
