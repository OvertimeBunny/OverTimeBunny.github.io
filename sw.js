/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/08/Hype-V搭建云崽/index.html","dd6b661886b0d41fde570712c3951502"],["/2024/05/08/MYSY搭建云崽-Windows/index.html","854533f4029c10de9356c027a253fac9"],["/2024/05/08/WSL搭建云崽/index.html","e673317c019280eda3a0171aec595b11"],["/2024/05/08/常见问题汇总/index.html","07b6d34e16f4dafe7435b1726aa03e2b"],["/2024/05/09/使用Termux搭建云崽/index.html","3d940d7d091688a69cc195916e18e427"],["/2024/05/10/QQBot的搭建和使用/index.html","835bf438b775be6a5281780cbf639f68"],["/2024/05/10/使用Linux搭建云崽/index.html","af694006d0cc971322d54d3b2da72415"],["/2024/05/11/利用域名搭建免费的DDNS动态域名解析/index.html","7a44ee2c1ffa04e689f227c2a2c68abe"],["/2024/05/11/好物推荐/index.html","c66a3daa8024c1716b1f6661b40e1ca0"],["/2024/05/17/利用QQ模块远程签名/index.html","f785be4224e7e3cb94ba84adfb3642e1"],["/2024/06/18/Qsgin自建签名API搭建教程/index.html","7fcc6c2981326346354fb9f28ba5977a"],["/2024/06/18/公共签名大全/index.html","d2900dea380e9af39baf410d7f2b2425"],["/archives/2024/05/index.html","0ecf3f9eaddbf5d67f02a5342045c205"],["/archives/2024/06/index.html","95fa5208d72694cc25aed154bbada756"],["/archives/2024/index.html","d67fa53daf7fd8c030a85b339dd66c09"],["/archives/2024/page/2/index.html","274a6178b192637fbcea4b03ba196c8c"],["/archives/index.html","378afa270d2583e116c3b370e184185f"],["/archives/page/2/index.html","0a60667b687eef1b266f1d01422d2f3d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","ce8cb1c4716310b6a72d354284c4952b"],["/categories/QQBot/index.html","a2fca89b8ad2cfa3a83c266ca1c25046"],["/categories/Termux/index.html","1020dc600e54310978c8e160f11f046a"],["/categories/Termux/安卓/index.html","cf1607e7841280a6b44509b337ea06b0"],["/categories/Windows/Hype-v/index.html","713bc7260370fb2406f43a4cf59fa016"],["/categories/Windows/WSL/index.html","4bdfbcc1b9487bc04111fdf2a0c558f1"],["/categories/Windows/index.html","b7fe25d78ef608ae5e251a6e3a939d54"],["/categories/index.html","1b140783f421d060c1c255ad9725c0e8"],["/categories/qsign/index.html","94ef9edd02b5c9d5c139f22570080baa"],["/categories/qsign/安卓/index.html","3debd69f731fac1a7d987cf0e2f31365"],["/categories/好物推荐/index.html","cc4aefa8564c7f9bd13fc92931119955"],["/categories/常见问题汇总/index.html","da96a01dcbdeff70c74bd841a65fa1c8"],["/categories/网络工具/index.html","117e7e4ee1f1e7e972a9fe8e5c64a487"],["/css/custom.css","95c8e8e1d65850291de6c5b128ae5655"],["/css/index.css","29023cfb1a848661f22e9978a1648e33"],["/css/sweetalert.css","2f4b989c8f992a2a882858de24c3d5e5"],["/css/universe.css","634bbccd301760e7e1d016c7a5512783"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Hype_v/1.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/10.png","a9331e8e646297d41465aab03ee17bc7"],["/img/Hype_v/11.png","1a392a0ed13b1b2877e0f5e0b858406e"],["/img/Hype_v/12.png","29c996d028406912746b03a26d21650d"],["/img/Hype_v/13.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/14.png","adfa43baca36ba06d4762f7b860ce904"],["/img/Hype_v/15.png","e9fd424632c11cd678fd96d3edb2c360"],["/img/Hype_v/16.png","b0c1c5a7f70e89320fef7e470b090b87"],["/img/Hype_v/17.png","e9424ff4f2e84129afcd5411b7c45aa9"],["/img/Hype_v/18.png","323e9a55562bceab3cd3031aa89dc558"],["/img/Hype_v/19.png","d711fa0db4fa874e299043bb14b6da9b"],["/img/Hype_v/2.png","7f4e1402371b98d375000dad2a50c1fc"],["/img/Hype_v/20.png","ecabc81867d6c4b80982ce489b7a8c16"],["/img/Hype_v/21.png","960974b0bd2ecf9cc643636ef226ffc5"],["/img/Hype_v/22.png","0a1ebd2ef061175c75a33fa2c230c58e"],["/img/Hype_v/23.png","be50a5b31867873e62c9d91cdc8efed3"],["/img/Hype_v/24.png","6382366aba0bad66f723520d1e990b1f"],["/img/Hype_v/25.png","359dc6671049616457921ceccebc149f"],["/img/Hype_v/26.png","fa55435ec4c7bf698bde5832525ba479"],["/img/Hype_v/27.png","662f489c03e2675fa2e12bb6d27ff2ff"],["/img/Hype_v/28.png","ba079cdca695d8ea0a087b7d18748d6e"],["/img/Hype_v/29.png","2af73deb7d5ee4b6caf3c76a55a74d93"],["/img/Hype_v/3.png","92d6a0a4ae3bf04eb9864958b4c36e97"],["/img/Hype_v/30.png","6bc0ea9ef84d1230055963587dd41690"],["/img/Hype_v/31.png","caa9b2d6df2901525a4451b733310c99"],["/img/Hype_v/32.png","3cf9bb6b7c6126132e028f0c0ac1d6e9"],["/img/Hype_v/33.png","e9817137d23e0d0ff091be376a71fa26"],["/img/Hype_v/34.png","dc4d3f2e6c52e6ae77cbddb3591d639a"],["/img/Hype_v/35.png","048ecc315e3c8cd4af27496dc3c0bc8d"],["/img/Hype_v/36.png","62e2533d7f0a8019ee8bae321a9fe569"],["/img/Hype_v/37.png","e567ba9a7ef7285cab978ad12025eff7"],["/img/Hype_v/4.png","7a996253aba7a2f77d1bd6866c0ce677"],["/img/Hype_v/5.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/6.png","b9af1bbabca4998a01cea982965945e6"],["/img/Hype_v/7.png","6d2477e2a639bb1e4160f937719c5b3d"],["/img/Hype_v/8.png","82b3bba3332784ea7f4edf332f509e2c"],["/img/Hype_v/9.png","ec797f743aa3efd0846883173be2f1f6"],["/img/MYSY2/1.png","35e38a5e8cef442ea6e2287877f464a0"],["/img/MYSY2/10.png","fca45078e01e00ddae2540d5b1a8d6a9"],["/img/MYSY2/11.png","a6c6a380d374aebbeed108ae2e30fab6"],["/img/MYSY2/12.png","f90169d65103b04c8aa456ae683d7cdb"],["/img/MYSY2/13.png","1ad8a4e5e17cc39dffc3c004283ca9a5"],["/img/MYSY2/14.png","6104e6d2714a623ddea7d90b4ec878c4"],["/img/MYSY2/15.png","1ad8a4e5e17cc39dffc3c004283ca9a5"],["/img/MYSY2/16.png","f9f20df4569cca687130eb5821d827d3"],["/img/MYSY2/2.png","e751d1bfde31e27b28ec846c5ee95790"],["/img/MYSY2/3.png","8e408690c801df8947291c745d7be2a4"],["/img/MYSY2/4.png","e61108c4e95d039dff2def543772ae62"],["/img/MYSY2/5.png","35e38a5e8cef442ea6e2287877f464a0"],["/img/MYSY2/6.png","554157c367e2fd23c45946a427c050dc"],["/img/MYSY2/7.png","b765725ecba0d3ae2099e242e6860804"],["/img/MYSY2/8.png","54d619c3b88e1cd83d0f3ab3d78a4f51"],["/img/MYSY2/9.png","141b72334dfe7962cdb8359e69ef7abf"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","97b47162478af435b0e63b5c84c16c28"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sweetalert.js","a38c8fcf1f8fb10a3ea6e4b650340de3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","7a59cc544ebf523f4fdfc4d0d0644a32"],["/live2d-widget/README.html","4088b9dcf6d41da17b0767a4d893a930"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","9214bc5446cd3a8a40ba118a23b1c3b9"],["/live2d-widget/demo/demo.html","15cb0820391dc5e57d97c4de5eb99a90"],["/live2d-widget/demo/login.html","36343a243e9051a1b17cd2a78c009cd8"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","85aef69a57f70ca34b1da98da0a854c8"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/music/index.html","a1469cc1e71dcf30430e7eddb8e5d12f"],["/page/2/index.html","9b46804091fc5a8dd6dffd6b37ce5ff9"],["/page/3/index.html","d96b59e6f5e9e19171e80744e40d230d"],["/sw-register.js","083456439c6b9a330d62ee21e1d0e910"],["/tags/index.html","6be4fe3c1fbd367619f538f3dd7a5c33"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
