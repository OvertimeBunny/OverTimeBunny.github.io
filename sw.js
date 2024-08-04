/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/08/Hype-V搭建云崽/index.html","0077c33fae821562b47060f762934fcf"],["/2024/05/08/MYSY搭建云崽-Windows/index.html","6e4578be1acfa21c9ede6d3655cb3b57"],["/2024/05/08/WSL搭建云崽/index.html","12d2796888f2c02a3d58c3bb1067a724"],["/2024/05/08/常见问题汇总/index.html","378c457f6926de62090736befe22cf35"],["/2024/05/09/使用Termux搭建云崽/index.html","479c1ebc1cd81a3b162c355115a1593b"],["/2024/05/10/QQBot的搭建和使用/index.html","3d20d28acc161a226c9af1f81a640b15"],["/2024/05/10/使用Linux搭建云崽/index.html","255671472a7ae0e9a4b4e164f1a41d20"],["/2024/05/11/利用域名搭建免费的DDNS动态域名解析/index.html","3af5136b16b4b8f91c503f8b05e4ef4b"],["/2024/05/11/好物推荐/index.html","cd2895f117fa7dd2024bedb2469855b4"],["/2024/05/17/利用QQ模块远程签名/index.html","d8b6bee19dd028a8b7eb551d576533da"],["/2024/06/18/Qsgin自建签名API搭建教程/index.html","75072cf8600182e77decf67e8a948fcb"],["/2024/06/18/公共签名大全/index.html","d99f0679da738d1e3c120a10d228aaff"],["/2024/08/04/90系列签名搭建教程/index.html","bda965af7396826cdfb82e91b337b00b"],["/archives/2024/05/index.html","50269bef2f52f4abf2f62f7507a106b1"],["/archives/2024/06/index.html","de91c25ab076501e9aabe0c1bdf4b5c1"],["/archives/2024/08/index.html","5c6aece67bd2967a4da03fc9725743f5"],["/archives/2024/index.html","3ba1d9832c0e91d4d56bfafad656206e"],["/archives/2024/page/2/index.html","7d5b2abd553bb5fa02cb5ea2cf47e46d"],["/archives/index.html","42dd604954b4940b55c29f0991bfa418"],["/archives/page/2/index.html","d578271d444bf26e7dc529315ed83145"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Linux/index.html","f8ce3871cbdbffaaf431e1b494311f59"],["/categories/QQBot/index.html","9ed103c7501d568b19ab51e23d91584a"],["/categories/Termux/index.html","edf57ae9b79851565b3879bc5974a58d"],["/categories/Termux/安卓/index.html","4a6ac7527070a29087ac91df51027b2e"],["/categories/Windows/Hype-v/index.html","d9fabe7d46533bed4b2b03a85f85de4c"],["/categories/Windows/WSL/index.html","4a3169fb78e948593d9df2268223c175"],["/categories/Windows/index.html","4c7c4b8ab52f2693b51d817f202844b5"],["/categories/index.html","e9601f7ff24d45bfb74e3df56f19714a"],["/categories/qsign/index.html","4dd109fb1bb58ed628865f6798e6ac4c"],["/categories/qsign/安卓/index.html","9f9ea0a0c72e6e977d9f559c0e9be15c"],["/categories/好物推荐/index.html","1ca4d7a0880a5ae237b5d51d1ef8c682"],["/categories/常见问题汇总/index.html","3dda85b7076ca2310cd371475f65e931"],["/categories/网络工具/index.html","0cc86630c5e5b419a6f84b8228b8db1b"],["/css/custom.css","95c8e8e1d65850291de6c5b128ae5655"],["/css/index.css","29023cfb1a848661f22e9978a1648e33"],["/css/sweetalert.css","2f4b989c8f992a2a882858de24c3d5e5"],["/css/universe.css","634bbccd301760e7e1d016c7a5512783"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/90/1.png","d74b19d9e59f3de19fb49528eabe0ec1"],["/img/90/2.png","750831aa5ced1136cb248dd2036f9554"],["/img/90/3.png","e0ff155d8ba4c6f06f673cb97dfb4a5e"],["/img/90/4.png","a3799ce123606d81a98e927f859d7cf7"],["/img/Hype_v/1.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/10.png","a9331e8e646297d41465aab03ee17bc7"],["/img/Hype_v/11.png","1a392a0ed13b1b2877e0f5e0b858406e"],["/img/Hype_v/12.png","29c996d028406912746b03a26d21650d"],["/img/Hype_v/13.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/14.png","adfa43baca36ba06d4762f7b860ce904"],["/img/Hype_v/15.png","e9fd424632c11cd678fd96d3edb2c360"],["/img/Hype_v/16.png","b0c1c5a7f70e89320fef7e470b090b87"],["/img/Hype_v/17.png","e9424ff4f2e84129afcd5411b7c45aa9"],["/img/Hype_v/18.png","323e9a55562bceab3cd3031aa89dc558"],["/img/Hype_v/19.png","d711fa0db4fa874e299043bb14b6da9b"],["/img/Hype_v/2.png","7f4e1402371b98d375000dad2a50c1fc"],["/img/Hype_v/20.png","ecabc81867d6c4b80982ce489b7a8c16"],["/img/Hype_v/21.png","960974b0bd2ecf9cc643636ef226ffc5"],["/img/Hype_v/22.png","0a1ebd2ef061175c75a33fa2c230c58e"],["/img/Hype_v/23.png","be50a5b31867873e62c9d91cdc8efed3"],["/img/Hype_v/24.png","6382366aba0bad66f723520d1e990b1f"],["/img/Hype_v/25.png","359dc6671049616457921ceccebc149f"],["/img/Hype_v/26.png","fa55435ec4c7bf698bde5832525ba479"],["/img/Hype_v/27.png","662f489c03e2675fa2e12bb6d27ff2ff"],["/img/Hype_v/28.png","ba079cdca695d8ea0a087b7d18748d6e"],["/img/Hype_v/29.png","2af73deb7d5ee4b6caf3c76a55a74d93"],["/img/Hype_v/3.png","92d6a0a4ae3bf04eb9864958b4c36e97"],["/img/Hype_v/30.png","6bc0ea9ef84d1230055963587dd41690"],["/img/Hype_v/31.png","caa9b2d6df2901525a4451b733310c99"],["/img/Hype_v/32.png","3cf9bb6b7c6126132e028f0c0ac1d6e9"],["/img/Hype_v/33.png","e9817137d23e0d0ff091be376a71fa26"],["/img/Hype_v/34.png","dc4d3f2e6c52e6ae77cbddb3591d639a"],["/img/Hype_v/35.png","048ecc315e3c8cd4af27496dc3c0bc8d"],["/img/Hype_v/36.png","62e2533d7f0a8019ee8bae321a9fe569"],["/img/Hype_v/37.png","e567ba9a7ef7285cab978ad12025eff7"],["/img/Hype_v/4.png","7a996253aba7a2f77d1bd6866c0ce677"],["/img/Hype_v/5.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/6.png","b9af1bbabca4998a01cea982965945e6"],["/img/Hype_v/7.png","6d2477e2a639bb1e4160f937719c5b3d"],["/img/Hype_v/8.png","82b3bba3332784ea7f4edf332f509e2c"],["/img/Hype_v/9.png","ec797f743aa3efd0846883173be2f1f6"],["/img/MYSY2/1.png","35e38a5e8cef442ea6e2287877f464a0"],["/img/MYSY2/10.png","141b72334dfe7962cdb8359e69ef7abf"],["/img/MYSY2/11.png","fca45078e01e00ddae2540d5b1a8d6a9"],["/img/MYSY2/12.png","a6c6a380d374aebbeed108ae2e30fab6"],["/img/MYSY2/13.png","f90169d65103b04c8aa456ae683d7cdb"],["/img/MYSY2/14.png","1ad8a4e5e17cc39dffc3c004283ca9a5"],["/img/MYSY2/15.png","6104e6d2714a623ddea7d90b4ec878c4"],["/img/MYSY2/16.png","1ad8a4e5e17cc39dffc3c004283ca9a5"],["/img/MYSY2/17.png","f9f20df4569cca687130eb5821d827d3"],["/img/MYSY2/18.png","b5c437e2306274893e42f13ae30251b2"],["/img/MYSY2/2.png","e751d1bfde31e27b28ec846c5ee95790"],["/img/MYSY2/3.png","8e408690c801df8947291c745d7be2a4"],["/img/MYSY2/4.png","e61108c4e95d039dff2def543772ae62"],["/img/MYSY2/5.png","35e38a5e8cef442ea6e2287877f464a0"],["/img/MYSY2/6.png","554157c367e2fd23c45946a427c050dc"],["/img/MYSY2/7.png","eecf90ba14b04d01719e0b7776ffa752"],["/img/MYSY2/8.png","b765725ecba0d3ae2099e242e6860804"],["/img/MYSY2/9.png","54d619c3b88e1cd83d0f3ab3d78a4f51"],["/img/QQBot/1.png","22329673cd781b57bb3de8a15c584bbf"],["/img/QQBot/10.png","eccfb2cc7c67e529be40d7ef9ec53f73"],["/img/QQBot/2.png","5c0d3edf4a53d5921eb99bbc64759a24"],["/img/QQBot/3.png","14a4d03f103b6e943b8fc3c2706646eb"],["/img/QQBot/4.png","b1360f0e34579065166ebc5f6d635af5"],["/img/QQBot/5.png","822ee1dcc1ae2e2bfb75cd0a57ee16f1"],["/img/QQBot/6.png","b29b7d487b9e345f96fdbebe9f75016f"],["/img/QQBot/7.png","32b1d6d32638ca9664cd69c0dde2688f"],["/img/QQBot/8.png","fe5ea53c52f2fb89b894354990bcd340"],["/img/QQBot/9.png","7952b8b9ae1109fbe8f8dcdcb70d08a0"],["/img/Qsgin/1.png","b87851d9beef5b2b03124078d4653189"],["/img/Qsgin/2.png","9635edfff6a2e2301db839abcd131c5b"],["/img/Qsgin/3.png","36b8b27956fee7e58b9edc2354fa7286"],["/img/WSL/1.png","3225843d24bf15e7a82932ef96382715"],["/img/WSL/10.png","434ce91d000db2758e6c6dcc6e284d7d"],["/img/WSL/11.png","dd028c03d44a92e6400da506053b65bf"],["/img/WSL/12.png","1cb0346c73b83a776c2d5232ecb9158a"],["/img/WSL/13.png","1e707bfd0eccade50dbf4d4dadd377d9"],["/img/WSL/14.png","e183852744f4918cc5c5b631dc9634d4"],["/img/WSL/15.png","f16855180b47409b9aa4e062de0e0e1f"],["/img/WSL/16.png","a36c71a41e788fcda6ed6d6a95818391"],["/img/WSL/17.png","f464bc4d9d18f61d234e556c968b8683"],["/img/WSL/18.png","6d2f9bd36572b57767b769dbe22e3267"],["/img/WSL/19.png","fa3861dc7f40f1aca7fe7d4ef13415c6"],["/img/WSL/2.png","ae744d0981c1477e20a8f3bbc7260c1b"],["/img/WSL/20.png","2ce6a25659c8b4007c05ff253647bafb"],["/img/WSL/21.png","71f930aac1d2db7df516d307c9057273"],["/img/WSL/22.png","a0e3894e20d7c7614ce54923d0800862"],["/img/WSL/23.png","f4b1cc4712fa89014cb10d52263bdc2f"],["/img/WSL/24.png","fffb45350eff59d588e67bc046b53c89"],["/img/WSL/25.png","3225843d24bf15e7a82932ef96382715"],["/img/WSL/26.png","78adb7ce1d46503e2842a6852619d224"],["/img/WSL/27.png","cd655080a0b3c14762c290593d0d228e"],["/img/WSL/28.png","aad3cd2acb8b080cf5d2349b3d2a8348"],["/img/WSL/3.png","e1c0555d05dbba86e0a6c64b12c2480d"],["/img/WSL/4.png","aa911e2aa92f15544dc6549341b25084"],["/img/WSL/5.png","b1539452ecd00c85a010d324c0ce5339"],["/img/WSL/6.png","35ffd46c76a1cb747ca2e9e73041a7eb"],["/img/WSL/7.png","35ffd46c76a1cb747ca2e9e73041a7eb"],["/img/WSL/8.png","e15f7bcdcdab132387b641fa46424ba6"],["/img/WSL/9.png","3acbd7127a7a9431fa30670235e8cd7e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d7d22f05bf87f130c3cefae35b0c4965"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sweetalert.js","a38c8fcf1f8fb10a3ea6e4b650340de3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","43b7f62550afe0b01a70b92dc3f0029a"],["/live2d-widget/README.html","069c54c01a1b0b07c4212e88f018e95a"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","9214bc5446cd3a8a40ba118a23b1c3b9"],["/live2d-widget/demo/demo.html","0682eda74ea64ca781b0be8e32888b6c"],["/live2d-widget/demo/login.html","d550ed1e4fa09cd0fc7377af5cce91f0"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","85aef69a57f70ca34b1da98da0a854c8"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/music/index.html","643f661992ff7b4866c842ecf546d756"],["/page/2/index.html","d2f793ba8260e5398d8b1cb41512107f"],["/page/3/index.html","e59a288954603b50d24a53b4751d7a7a"],["/sw-register.js","4e5086cfb83f2c58517bb1ceede8fea6"],["/tags/index.html","9564adf74612450e9f794683c3ad8e80"]];
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
