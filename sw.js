/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2024/05/index.html","56664ad91712b59886cccd560c3ad780"],["/archives/2024/06/index.html","5a0873609872cf2569dba01fd77cbfb2"],["/archives/2024/08/index.html","023534ce9233b54f06f1751531014887"],["/archives/2024/index.html","5c0dd996a991a0f84572ef35f7e56591"],["/archives/2024/page/2/index.html","3cccbbec830c7bf52271b1b43037c3a5"],["/archives/index.html","639aa6e2815b9315758b89fc80bd82cb"],["/archives/page/2/index.html","6f1be92a241e1284a15e36319f642dc1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","099f072a118ca511891d459dcd002a56"],["/categories/Linux/index.html","aa47e850ccbb9e2ac2a592c2f7bfc8e0"],["/categories/QQBot/index.html","1c5e70989e1e88d507280b1d5fd0ef02"],["/categories/Termux/index.html","ece0dc50e4a1f84aecece178b2ffc327"],["/categories/Termux/安卓/index.html","9727b0ee416a320ee608df563e70ae30"],["/categories/Windows/Hype-v/index.html","3e154b625c29238d923f137858eb2c07"],["/categories/Windows/WSL/index.html","58226c3df861ffe96d5454d9b5207a4e"],["/categories/Windows/index.html","120e5db3fb1b87fdca3d404d0de8c3a7"],["/categories/index.html","0b087de63beba195c5e8ddfe2866309d"],["/categories/qsign/index.html","45b9a98bc51860af2d76c7914da0a5bb"],["/categories/qsign/安卓/index.html","bf701fcb409a0354dd4bbff27735117d"],["/categories/博客告知/index.html","7a3368dd5f8072c6d5e9e77aebfb47ad"],["/categories/好物推荐/index.html","739f010337b86fbac1a2594e319bb708"],["/categories/常见问题汇总/index.html","0ca933f2c69c52a2e8d1934d41139be0"],["/categories/网络工具/index.html","ca332af4d903309959bfd196511d91a5"],["/css/custom.css","95c8e8e1d65850291de6c5b128ae5655"],["/css/index.css","8d1529e70f764864269a7f6eb04180eb"],["/css/sweetalert.css","2f4b989c8f992a2a882858de24c3d5e5"],["/css/universe.css","634bbccd301760e7e1d016c7a5512783"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.png","7f116412e8974795fe5834584170a6d2"],["/img/2.png","88b993d001366dcc9241e371f6d775d7"],["/img/3.png","ece5df091b8ea5491dfa9d0079ab427a"],["/img/4.png","c8077ca0c18c948bf225801b054f4cfd"],["/img/404.jpg","d919ce81021d462eb496b29f62394de0"],["/img/90/1.png","d74b19d9e59f3de19fb49528eabe0ec1"],["/img/90/2.png","750831aa5ced1136cb248dd2036f9554"],["/img/90/3.png","e0ff155d8ba4c6f06f673cb97dfb4a5e"],["/img/90/4.png","a3799ce123606d81a98e927f859d7cf7"],["/img/FAQ/1.png","c8af9716c16a15d96c4dd44cc67d3bd4"],["/img/FAQ/2.png","a4b3c8a7db66d765eaf27eb7d4499112"],["/img/FAQ/3.png","e29ba78eff342d24db071f770044a10a"],["/img/FAQ/4.png","31dc43869bc27b2bf792145de81fc433"],["/img/FAQ/5.png","a814212565eff4c90cfcb5d97e7886dd"],["/img/Goods/1.png","52bd65894fb1f12e66ffab9273959fc0"],["/img/Goods/10.png","48a2b4729cae09a74f07cbad8bd3e6f8"],["/img/Goods/2.png","f97fbeee6938a8116f5472b2c8eb560b"],["/img/Goods/3.png","daee30f8ad352871f738dc9188184267"],["/img/Goods/4.png","adfdffbd97b5c717e9b8826f66aa4631"],["/img/Goods/5.png","0b83261820e327a01568e5e7354cb381"],["/img/Goods/6.png","013295b45e1115fafbb2c521059cf035"],["/img/Goods/7.png","4d584b53082e20d8a0c73f9b59bf533a"],["/img/Goods/8.png","0f39c81b23f904107515d51da1d74987"],["/img/Goods/9.png","4ab682db1c569ecbf16ef911da51d256"],["/img/Hexo/1.png","554313e276cf0cc5534de4fdfba62e5f"],["/img/Hexo/2.png","6a361465a2d2ddbaad1d74e77a30ae32"],["/img/Hexo/3.png","757eb844c8c675a096d2bf2423c65f1f"],["/img/Hexo/4.png","f65532360a9b9917b586497022005b29"],["/img/Hype_v/1.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/10.png","a9331e8e646297d41465aab03ee17bc7"],["/img/Hype_v/11.png","1a392a0ed13b1b2877e0f5e0b858406e"],["/img/Hype_v/12.png","29c996d028406912746b03a26d21650d"],["/img/Hype_v/13.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/14.png","adfa43baca36ba06d4762f7b860ce904"],["/img/Hype_v/15.png","e9fd424632c11cd678fd96d3edb2c360"],["/img/Hype_v/16.png","b0c1c5a7f70e89320fef7e470b090b87"],["/img/Hype_v/17.png","e9424ff4f2e84129afcd5411b7c45aa9"],["/img/Hype_v/18.png","323e9a55562bceab3cd3031aa89dc558"],["/img/Hype_v/19.png","d711fa0db4fa874e299043bb14b6da9b"],["/img/Hype_v/2.png","7f4e1402371b98d375000dad2a50c1fc"],["/img/Hype_v/20.png","ecabc81867d6c4b80982ce489b7a8c16"],["/img/Hype_v/21.png","960974b0bd2ecf9cc643636ef226ffc5"],["/img/Hype_v/22.png","0a1ebd2ef061175c75a33fa2c230c58e"],["/img/Hype_v/23.png","be50a5b31867873e62c9d91cdc8efed3"],["/img/Hype_v/24.png","6382366aba0bad66f723520d1e990b1f"],["/img/Hype_v/25.png","359dc6671049616457921ceccebc149f"],["/img/Hype_v/26.png","fa55435ec4c7bf698bde5832525ba479"],["/img/Hype_v/27.png","662f489c03e2675fa2e12bb6d27ff2ff"],["/img/Hype_v/28.png","ba079cdca695d8ea0a087b7d18748d6e"],["/img/Hype_v/29.png","2af73deb7d5ee4b6caf3c76a55a74d93"],["/img/Hype_v/3.png","92d6a0a4ae3bf04eb9864958b4c36e97"],["/img/Hype_v/30.png","6bc0ea9ef84d1230055963587dd41690"],["/img/Hype_v/31.png","caa9b2d6df2901525a4451b733310c99"],["/img/Hype_v/32.png","3cf9bb6b7c6126132e028f0c0ac1d6e9"],["/img/Hype_v/33.png","e9817137d23e0d0ff091be376a71fa26"],["/img/Hype_v/34.png","dc4d3f2e6c52e6ae77cbddb3591d639a"],["/img/Hype_v/35.png","048ecc315e3c8cd4af27496dc3c0bc8d"],["/img/Hype_v/36.png","62e2533d7f0a8019ee8bae321a9fe569"],["/img/Hype_v/37.png","e567ba9a7ef7285cab978ad12025eff7"],["/img/Hype_v/38.png","f9f20df4569cca687130eb5821d827d3"],["/img/Hype_v/4.png","7a996253aba7a2f77d1bd6866c0ce677"],["/img/Hype_v/5.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/6.png","b9af1bbabca4998a01cea982965945e6"],["/img/Hype_v/7.png","6d2477e2a639bb1e4160f937719c5b3d"],["/img/Hype_v/8.png","82b3bba3332784ea7f4edf332f509e2c"],["/img/Hype_v/9.png","ec797f743aa3efd0846883173be2f1f6"],["/img/Linux/1.png","43c118cc93a905cf0c6a9845df0c0d32"],["/img/Linux/10.png","a38e51042da42fa9d20c1d2e067fa9e5"],["/img/Linux/11.png","e55ff6cdaa4aed479a457112f75a08e2"],["/img/Linux/12.png","bd53a70c1c3dad5c185f47d2162dea0a"],["/img/Linux/13.png","27c65f4718886610f989605a066afed6"],["/img/Linux/14.png","a56ef671e526a4b0d2400b9d47f68491"],["/img/Linux/15.png","a9b0dfd8be21e154e32912a6464a3bf2"],["/img/Linux/16.png","cd9d7bb71e42431803b8ae4432a9100b"],["/img/Linux/17.png","f9f20df4569cca687130eb5821d827d3"],["/img/Linux/18.png","b5c437e2306274893e42f13ae30251b2"],["/img/Linux/2.png","c7abcf53ca469fa319e8e35441c4687a"],["/img/Linux/3.png","21a88dbf9955ab2823f64f22a98660d4"],["/img/Linux/4.png","1e45458eddfb6a66b3df0a5dc3016158"],["/img/Linux/5.png","a60838562da2747eef6238d5ce46b760"],["/img/Linux/6.png","6ea13280e6dc805fafab4135943c4210"],["/img/Linux/7.png","908fa1c927f3905eff21a20ec9cdcd2f"],["/img/Linux/8.png","2755b03f9af64971dc911e59c8c1ee9c"],["/img/Linux/9.png","e791b4c92c9fa81284deee55e3158bee"],["/img/MYSY2/1.png","35e38a5e8cef442ea6e2287877f464a0"],["/img/MYSY2/10.png","141b72334dfe7962cdb8359e69ef7abf"],["/img/MYSY2/11.png","fca45078e01e00ddae2540d5b1a8d6a9"],["/img/MYSY2/12.png","a6c6a380d374aebbeed108ae2e30fab6"],["/img/MYSY2/13.png","f90169d65103b04c8aa456ae683d7cdb"],["/img/MYSY2/14.png","1ad8a4e5e17cc39dffc3c004283ca9a5"],["/img/MYSY2/15.png","6104e6d2714a623ddea7d90b4ec878c4"],["/img/MYSY2/16.png","1ad8a4e5e17cc39dffc3c004283ca9a5"],["/img/MYSY2/17.png","f9f20df4569cca687130eb5821d827d3"],["/img/MYSY2/18.png","b5c437e2306274893e42f13ae30251b2"],["/img/MYSY2/2.png","e751d1bfde31e27b28ec846c5ee95790"],["/img/MYSY2/3.png","8e408690c801df8947291c745d7be2a4"],["/img/MYSY2/4.png","e61108c4e95d039dff2def543772ae62"],["/img/MYSY2/5.png","35e38a5e8cef442ea6e2287877f464a0"],["/img/MYSY2/6.png","554157c367e2fd23c45946a427c050dc"],["/img/MYSY2/7.png","eecf90ba14b04d01719e0b7776ffa752"],["/img/MYSY2/8.png","b765725ecba0d3ae2099e242e6860804"],["/img/MYSY2/9.png","54d619c3b88e1cd83d0f3ab3d78a4f51"],["/img/QQBot/1.png","22329673cd781b57bb3de8a15c584bbf"],["/img/QQBot/10.png","eccfb2cc7c67e529be40d7ef9ec53f73"],["/img/QQBot/2.png","5c0d3edf4a53d5921eb99bbc64759a24"],["/img/QQBot/3.png","14a4d03f103b6e943b8fc3c2706646eb"],["/img/QQBot/4.png","b1360f0e34579065166ebc5f6d635af5"],["/img/QQBot/5.png","822ee1dcc1ae2e2bfb75cd0a57ee16f1"],["/img/QQBot/6.png","b29b7d487b9e345f96fdbebe9f75016f"],["/img/QQBot/7.png","32b1d6d32638ca9664cd69c0dde2688f"],["/img/QQBot/8.png","fe5ea53c52f2fb89b894354990bcd340"],["/img/QQBot/9.png","7952b8b9ae1109fbe8f8dcdcb70d08a0"],["/img/Qsgin/1.png","b87851d9beef5b2b03124078d4653189"],["/img/Qsgin/2.png","9635edfff6a2e2301db839abcd131c5b"],["/img/Qsgin/3.png","36b8b27956fee7e58b9edc2354fa7286"],["/img/Shizuku/1.png","8c5f2a8ea87e636afd0274ecc8c668ab"],["/img/Shizuku/10.png","5154ab9ec94fcf6c99d183ae2dfc411c"],["/img/Shizuku/2.png","69a9f1e1f37f1d08994bf51beb35d362"],["/img/Shizuku/3.png","c9f2746daab8eedc800e87322d3e1cb4"],["/img/Shizuku/4.png","c9f2746daab8eedc800e87322d3e1cb4"],["/img/Shizuku/5.png","9e78c58f6e97683f28daaa29b040f6e8"],["/img/Shizuku/6.png","0242442351827e14e9243cdd02a145a6"],["/img/Shizuku/7.png","a970885609839a87bc148258c38219fd"],["/img/Shizuku/8.png","0d91413b39a2f740698fe6bc1f17f8a6"],["/img/Shizuku/9.png","8c5f2a8ea87e636afd0274ecc8c668ab"],["/img/Termux/1.png","bff7d338f7606bbfa6d200a5e57fe4dc"],["/img/Termux/2.png","bff7d338f7606bbfa6d200a5e57fe4dc"],["/img/Termux/3.png","4945eff1fc436fbe8bcbbbbf8ef6c6f9"],["/img/Termux/4.png","c8e191f9dbd85d66e8e738b4cfedea2c"],["/img/Termux/5.png","97382f1fa7449b2add1de43dc8a1d346"],["/img/Termux/6.png","532a1e3317e85de4b5d322c6c9b38cec"],["/img/Termux/7.png","94248599fc6f736b126a8dee1d71240b"],["/img/Termux/8.png","4ab682db1c569ecbf16ef911da51d256"],["/img/Termux/9.png","0f39c81b23f904107515d51da1d74987"],["/img/WSL/1.png","3225843d24bf15e7a82932ef96382715"],["/img/WSL/10.png","434ce91d000db2758e6c6dcc6e284d7d"],["/img/WSL/11.png","dd028c03d44a92e6400da506053b65bf"],["/img/WSL/12.png","1cb0346c73b83a776c2d5232ecb9158a"],["/img/WSL/13.png","1e707bfd0eccade50dbf4d4dadd377d9"],["/img/WSL/14.png","e183852744f4918cc5c5b631dc9634d4"],["/img/WSL/15.png","f16855180b47409b9aa4e062de0e0e1f"],["/img/WSL/16.png","a36c71a41e788fcda6ed6d6a95818391"],["/img/WSL/17.png","f464bc4d9d18f61d234e556c968b8683"],["/img/WSL/18.png","6d2f9bd36572b57767b769dbe22e3267"],["/img/WSL/19.png","fa3861dc7f40f1aca7fe7d4ef13415c6"],["/img/WSL/2.png","ae744d0981c1477e20a8f3bbc7260c1b"],["/img/WSL/20.png","2ce6a25659c8b4007c05ff253647bafb"],["/img/WSL/21.png","71f930aac1d2db7df516d307c9057273"],["/img/WSL/22.png","a0e3894e20d7c7614ce54923d0800862"],["/img/WSL/23.png","f4b1cc4712fa89014cb10d52263bdc2f"],["/img/WSL/24.png","fffb45350eff59d588e67bc046b53c89"],["/img/WSL/25.png","3225843d24bf15e7a82932ef96382715"],["/img/WSL/26.png","78adb7ce1d46503e2842a6852619d224"],["/img/WSL/27.png","cd655080a0b3c14762c290593d0d228e"],["/img/WSL/28.png","aad3cd2acb8b080cf5d2349b3d2a8348"],["/img/WSL/29.png","f9f20df4569cca687130eb5821d827d3"],["/img/WSL/3.png","e1c0555d05dbba86e0a6c64b12c2480d"],["/img/WSL/30.png","b5c437e2306274893e42f13ae30251b2"],["/img/WSL/4.png","aa911e2aa92f15544dc6549341b25084"],["/img/WSL/5.png","b1539452ecd00c85a010d324c0ce5339"],["/img/WSL/6.png","35ffd46c76a1cb747ca2e9e73041a7eb"],["/img/WSL/7.png","35ffd46c76a1cb747ca2e9e73041a7eb"],["/img/WSL/8.png","e15f7bcdcdab132387b641fa46424ba6"],["/img/WSL/9.png","3acbd7127a7a9431fa30670235e8cd7e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","85eb15106e5ca210d5d5c79d439c24d7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sweetalert.js","a38c8fcf1f8fb10a3ea6e4b650340de3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","c946a2a191c152af81dec38e335761c3"],["/live2d-widget/README.html","7fe125bbe99edf11a2653a0f88d4e9d6"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","9214bc5446cd3a8a40ba118a23b1c3b9"],["/live2d-widget/demo/demo.html","d4e9c026e0b8b69c5327aee5b5069e8a"],["/live2d-widget/demo/login.html","76f038433ac61c3d9176e9cd3d6c044c"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","85aef69a57f70ca34b1da98da0a854c8"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/music/index.html","e5321f76f83be884b0887852955917f8"],["/page/2/index.html","36d4e086a44b8d10e744a5f1e187e331"],["/page/3/index.html","e0139e1e2df5cc37c06457941d988253"],["/page/4/index.html","233cd546480da3f55e98ee3e01801b89"],["/posts/2891e33e/index.html","d6ea6ee074149c9aec9748609f507a6d"],["/posts/3e101a1c/index.html","4134a4d15223d0de15f10a110be42278"],["/posts/48ced98/index.html","caeeca66fbfc42d40a8d12b27365a45f"],["/posts/4d0f8001/index.html","d357429e9c2a0e91e96dfa4ba233fc5e"],["/posts/53427649/index.html","536388756032ea94bacb5eec62c79b40"],["/posts/67214f12/index.html","fde34b12f08dc10b37725ff1b8627339"],["/posts/70f38985/index.html","31f264412b30d80faca83e01e82dc343"],["/posts/744e4646/index.html","eca1c6eb2a96bc9abf45a4a35fb662ae"],["/posts/7949d787/index.html","67cd0b138a7a91b2e86051f3ba8532c5"],["/posts/83ff2157/index.html","5e18a9e6f37a5115882bcc990fe4ef8b"],["/posts/9e1e9509/index.html","f74f344e5c8d627c452ae3670f7a1d67"],["/posts/a806c713/index.html","4c33ed176058fb7caf09294ebc5a57ab"],["/posts/a8ef42b/index.html","8355bf20f3e756c65b57464ba71a38c5"],["/posts/beeac218/index.html","46032588ba3ba1141b82ba1228a95963"],["/posts/e66f6c3/index.html","e6c3382cabc1d03c2d24911034d7e854"],["/posts/f1673a6/index.html","2182a692cc108b4493febe133cfee891"],["/sw-register.js","b1f8e8450e54f5bdc73fa360c02872be"],["/tags/index.html","5a01d391e93d72e001a4091ca8d88680"]];
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
