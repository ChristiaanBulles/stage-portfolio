"use strict";var precacheConfig=[["/stage-portfolio/index.html","28317d8829d1ac599a6380846ec6ee20"],["/stage-portfolio/static/css/main.37ce1311.css","270536a9109c5659a572eabd4e338f32"],["/stage-portfolio/static/js/main.df7ba6e0.js","cb78e7e06814219a071ff8190ea99f8f"],["/stage-portfolio/static/media/Christiaan.1dade39e.jpg","1dade39e0f9932e62f4f9d58cfb4fa60"],["/stage-portfolio/static/media/Image-Aisler1.f514daa5.png","f514daa5a06f0a89a953da0070d35a19"],["/stage-portfolio/static/media/Image-Aisler2.8e2b74ad.png","8e2b74ada02dd2ed360b4533e2e327ae"],["/stage-portfolio/static/media/Image-Aisler3.de903aef.png","de903aef0fe22f5c537018b2d7117e39"],["/stage-portfolio/static/media/Image-Aisler4.7c5c0e0b.png","7c5c0e0b91e6c1087f2339e472e854ca"],["/stage-portfolio/static/media/Image-Aisler5.5bd68934.png","5bd68934d3ea3bc26e2ced7063a4e678"],["/stage-portfolio/static/media/Image-Aisler6.be561ad8.png","be561ad8a6a2c2086465fc13ed168fe6"],["/stage-portfolio/static/media/Image-Aisler7.d2054d69.png","d2054d69a045d7a60c2712d13cf4f430"],["/stage-portfolio/static/media/Image1.572a7425.png","572a74252727d6dbf12279a5612bd8bb"],["/stage-portfolio/static/media/Image1.8290352c.png","8290352c4eba7d772d1fcdc7daa47de8"],["/stage-portfolio/static/media/Image1.a38a7c22.png","a38a7c22f394d9a5ee07ceabf35d19eb"],["/stage-portfolio/static/media/Image1.b5cd66f7.png","b5cd66f795803c4856e9040c7201197f"],["/stage-portfolio/static/media/Image2.1f768bbe.png","1f768bbe96ccf7f4b65705d390e553c3"],["/stage-portfolio/static/media/Image2.aa31eb00.png","aa31eb00b295c57027eb05fa0b26b06d"],["/stage-portfolio/static/media/Image2.c76f33b4.png","c76f33b4566c6bdc76e546395e1a51df"],["/stage-portfolio/static/media/Image2.f2bddf73.png","f2bddf736b563a7906be0a54c579678f"],["/stage-portfolio/static/media/Image3.2587fdad.png","2587fdad6bcb47a43491c0f80ac46d87"],["/stage-portfolio/static/media/Image3.3a486f91.png","3a486f91f32980a7cb7446fe4e6743d2"],["/stage-portfolio/static/media/Image3.c6c70164.png","c6c70164bf9994fb6a08b7b5c37c47c0"],["/stage-portfolio/static/media/Image4.d1b8e022.png","d1b8e0220347bec6c766f703780967cb"],["/stage-portfolio/static/media/Image4.e6b3a28c.png","e6b3a28cf43621b5faa1c3e77c80f40a"],["/stage-portfolio/static/media/Image4.e6f5aee0.png","e6f5aee0af3d078b1e81aa5eccededda"],["/stage-portfolio/static/media/Image5.0941f54f.png","0941f54f07b70a03bb52a2a32758a51a"],["/stage-portfolio/static/media/Image5.24782db5.png","24782db558a79cae00de5a423c4f412a"],["/stage-portfolio/static/media/Image6.c2722eeb.png","c2722eeb727cab6bcf9d388cb5e4826b"],["/stage-portfolio/static/media/Image7.1c9a6d69.png","1c9a6d694640aff40deba5268cc24c6d"],["/stage-portfolio/static/media/Image8.519d5fcc.png","519d5fcc6fe118fec3f2e188e7eeb049"],["/stage-portfolio/static/media/Image9.c621090a.png","c621090ae1105b16d6273e188609e32d"],["/stage-portfolio/static/media/Imagebison1.2afb8b2c.png","2afb8b2cb5f32b5fefdd90be8ecd51b9"],["/stage-portfolio/static/media/Imagebison2.cce21bd9.png","cce21bd954fe43c960ace89f45d04c95"],["/stage-portfolio/static/media/Imagebison3.bb33defe.png","bb33defe41af632e1dcde2fcb9a594aa"],["/stage-portfolio/static/media/Imagebison4.b549fc0e.png","b549fc0e211e38c882771ad5ce58758c"],["/stage-portfolio/static/media/Imagebison5.7f79fd12.png","7f79fd12d3d08e8b0ecdb0898d1ca9a5"],["/stage-portfolio/static/media/Imagebison6.17f42e3e.png","17f42e3e6474a3cfb5fe6ea24e3cb36d"],["/stage-portfolio/static/media/Imagebison7.61ed761e.png","61ed761e2ec3c67bd07e25d4589a5de2"],["/stage-portfolio/static/media/Imagebison8.aee712d8.png","aee712d8d2cb0451f2b05716aa46bd5b"],["/stage-portfolio/static/media/Perfect1.e33b38af.png","e33b38af3f9970aa9e04b249d0ef1182"],["/stage-portfolio/static/media/Perfect3.67922dfe.png","67922dfe1119e8d0655360d1b36678e1"],["/stage-portfolio/static/media/Perfect4.62b8f6e6.png","62b8f6e6f6f13c8f987581379c48c91e"],["/stage-portfolio/static/media/Perfect5.44b67e2e.png","44b67e2e09c0e37d52bbc52a000b4974"],["/stage-portfolio/static/media/Perfect6.8e6ca939.png","8e6ca93967ab36ea45723f41b6821118"],["/stage-portfolio/static/media/Perfect7.0148f857.png","0148f857ec1cc40ac8ccd928d92ee363"],["/stage-portfolio/static/media/Talento1.d771ef1a.png","d771ef1a5bd39bd479bc8b0a7b830763"],["/stage-portfolio/static/media/Talento2.4b0b19fe.png","4b0b19fe03a04f7f0ede4b4b5b91f34e"],["/stage-portfolio/static/media/Talento3.45125896.png","451258960a9e746b873598e746284f6c"],["/stage-portfolio/static/media/Talento4.08f5c41b.png","08f5c41b13e862f97578756f048a9a4c"],["/stage-portfolio/static/media/Talento5.87a4cd12.png","87a4cd1290725f963e20cd6cd31cb124"],["/stage-portfolio/static/media/Talento6.f30f7972.png","f30f7972bec874453b7b1e739d933ebd"],["/stage-portfolio/static/media/Talento8.b352d391.png","b352d39130db252e8f5442690b424041"],["/stage-portfolio/static/media/Talento9.39c0ca11.png","39c0ca115b860d9704a235d13edb93b7"],["/stage-portfolio/static/media/icon__arrow-left.d5dab38b.svg","d5dab38bca73394e1d05edc7c853f724"],["/stage-portfolio/static/media/icon__arrow-right.6092c570.svg","6092c5701863f61f18635782d11a8e31"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var i="/stage-portfolio/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(i,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});