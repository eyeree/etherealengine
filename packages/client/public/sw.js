if(!self.define){let e,a={};const c=(c,i)=>(c=new URL(c+".js",i).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let d={};const o=e=>c(e,s),n={module:{uri:s},exports:d,require:o};a[s]=Promise.all(i.map((e=>n[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-0f3da494"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"63a03842ef90572c4c47ed7a13cc2bfe"},{url:"android-chrome-512x512.png",revision:"c5367cd493885f3ec26d34183a136cd6"},{url:"apple-touch-icon.png",revision:"9d3d5ee16ca2dc97d2cc997c056f66db"},{url:"browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"clouds/cloud.png",revision:"bd58125c90a159f73c34c3eb9698fef1"},{url:"corto/attribute.js",revision:"374750562a96b3c11a2e1a10746ac164"},{url:"corto/base64.min.js",revision:"a30a36111bc49f1e66682dfb614bd4cd"},{url:"corto/buffer.js",revision:"afef1274140e406ad84f2666ed54615f"},{url:"corto/corto.em.js",revision:"0325278b9657d1d495c9cf8f43938c32"},{url:"corto/corto.js",revision:"c4ebf810598c700227989064b0898c75"},{url:"corto/cortodecoder.js",revision:"1d0ab444dbbe475c41692e95b1ca8a1a"},{url:"corto/CORTOLoader.js",revision:"2161b793677193992cbc4000050441a4"},{url:"corto/cortoworker.js",revision:"e4d000a698bb54ac613fba1ec33aa86f"},{url:"corto/ieee754.js",revision:"3891a7650f3c35ce862fe98a5e0db409"},{url:"corto/MTLLoader.js",revision:"a8462355bc569ed356113c24756e375a"},{url:"corto/tunstall.js",revision:"b0b291df22be39eb788110852ebbebf9"},{url:"cubemap/readme.txt",revision:"aaed0013d845535269df03a1d6ade4a9"},{url:"facetracking/face_expression_model-weights_manifest.json",revision:"1eee5a2eea5ea5652904a2af88333dc1"},{url:"facetracking/tiny_face_detector_model-weights_manifest.json",revision:"5bab50532388f5da9b4cd85b15adc11c"},{url:"favicon-16x16.png",revision:"a15a465ca5003b8748bc5fd974a3b1be"},{url:"favicon-32x32.png",revision:"e8697feaf0168dfdc35f907ded90aed0"},{url:"favicon.ico",revision:"0d1af53a5684f0232bb0aa57b5b50616"},{url:"fonts/IBMPlexSans-Regular.json",revision:"94643ab58f45a2e75cc03d8a2c7f5fa0"},{url:"fonts/IBMPlexSans-Regular.ttf",revision:"c02b4dc6554c116e4c40f254889d5871"},{url:"hdr/cubemap/skyboxsun25deg/skyboxsun25degtest.txt",revision:"3b8e55e27c8cbeab8e4ec64e257d8503"},{url:"hdr/equirectangular/skyCubemap1.png",revision:"1ad477b6a8bdae447d4bae13fcc5bc69"},{url:"hdr/equirectangular/skyCubemap2_red.png",revision:"1e061bc0d51ea9f995ea0bd19de7de59"},{url:"hdr/equirectangular/skyCubemap2.png",revision:"1785c8a51d91541591d53e8ecf67cec2"},{url:"hdr/mvp-cloud-skybox.png",revision:"635084f6e00f6c28ac62e857d4c02c3f"},{url:"icons/back-btn-shadow.png",revision:"135a08cc7cbd43ec2255f23673e95d67"},{url:"icons/back-btn.png",revision:"480fc409f2be470e1d0e0d24cbcbd450"},{url:"icons/pause-shadow.png",revision:"6d80959e1065316607dba4a3676d762b"},{url:"icons/pause.png",revision:"4cd66202253819679e27d20a7653d2c4"},{url:"icons/play-shadow.png",revision:"c44303efd5714c90b615885896659c94"},{url:"icons/play.png",revision:"ad5810a03f534911d1b92c989671ba03"},{url:"itemLight.png",revision:"a8d4d461f3c268acc148c2c78027afb1"},{url:"itemPlate.png",revision:"f4c1d9ccc65190da7a13414a42c7b98c"},{url:"loader_decoders/basis/basis_transcoder.js",revision:"53fba6ce35e877767191ef41f26291aa"},{url:"loader_decoders/draco_decoder.js",revision:"cd3e53d09acfffb1ce5d6074aac3d74b"},{url:"loader_decoders/draco_encoder.js",revision:"b3c687f18f58015e032d5d4b5c5c33e8"},{url:"loader_decoders/draco_wasm_wrapper.js",revision:"76d5f06fb95f804621f8d04f798cf118"},{url:"mstile-150x150.png",revision:"6fa5dbe82c07314c540deb7040e16618"},{url:"onboarding/lmb.svg",revision:"e660a57a13eb0824cb256144eb51e0f4"},{url:"onboarding/mmb.svg",revision:"47371a12f2e0f4126249fc87b3a5c405"},{url:"onboarding/rmb.svg",revision:"c4e5ad68dffa357f82b3b55e6d915245"},{url:"onboarding/wasd.svg",revision:"f95ac5ab7fd5e31bde6e7c3ad422b791"},{url:"placeholders/default-silhouette.svg",revision:"403cb9f69bbfff5826c49c57b88ccd10"},{url:"projects/default-project/avatars/CyberbotBlack.png",revision:"1e486feb7f2bfed8fb024bc014fd754d"},{url:"projects/default-project/avatars/CyberbotBlue.png",revision:"0eb76316bf1de39ea51af1cdc2f5673f"},{url:"projects/default-project/avatars/CyberbotCyan.png",revision:"53e41ab3224ba9d9b9e4bbbd31585f30"},{url:"projects/default-project/avatars/CyberbotGold.png",revision:"f3a6c047397341694a6bb320395f695c"},{url:"projects/default-project/avatars/CyberbotGreen.png",revision:"61884ba700e94a0bb889491fb250a35d"},{url:"projects/default-project/avatars/CyberbotPink.png",revision:"45c9802afd35f8dec79f965377a2ceea"},{url:"projects/default-project/avatars/CyberbotRed.png",revision:"48753728328db8f7d4817a1eb3099904"},{url:"projects/default-project/avatars/CyberbotSilver.png",revision:"a1e3c89d27b4ff05ccb16a1f875a1f4c"},{url:"projects/default-project/avatars/CyberbotYellow.png",revision:"5f44a956a5c6f2dd10210965e8aea748"},{url:"projects/default-project/drop-shadow.png",revision:"e9668f56c6e7fb8163ea43d9e93910c0"},{url:"safari-pinned-tab.svg",revision:"8885a5031bc603b469318628d4aa5b5f"},{url:"static/Avatar.png",revision:"d4bbbe00af341ec5a751c104a8746f88"},{url:"static/bg.png",revision:"35d95a18d45ac55dc9d8f58bb67f2d01"},{url:"static/boomerman.png",revision:"f92e29cde179117eb29756aafa507c55"},{url:"static/boomerwoman.png",revision:"ba3fcdf5b47d04e02a8a15750a9f3290"},{url:"static/Chat.png",revision:"2a7ab08451441d2e2116820900d5501e"},{url:"static/Clap.svg",revision:"5dd97480602196c130a4f54b2ed819fe"},{url:"static/clap1.svg",revision:"c0de45b51a2f98f83a59106d4c92daf4"},{url:"static/Controller_Tutorial.png",revision:"d792b4335d89b7ab9aaa064afdc44993"},{url:"static/Cry.svg",revision:"76258b7b00109cceb03e48b928255fd2"},{url:"static/dance_new1.svg",revision:"44bad6bef11383bdd0a7c242c2159deb"},{url:"static/Dance1.png",revision:"841f80718c05765f42c9f1483fa4a270"},{url:"static/Dance1.svg",revision:"59c902d68ea8e238c964169ce1ef723d"},{url:"static/Dance2.png",revision:"20e0565cf87ebbdb74e554cd5b417b13"},{url:"static/Dance2.svg",revision:"8491f41255d58c6bc462022dd04ea18d"},{url:"static/Dance3.png",revision:"f898865e7c4a5ca784c9ada14f3a55d0"},{url:"static/Dance3.svg",revision:"fb063653dd20f29df91de1136fb3c9f3"},{url:"static/Dance4.png",revision:"1b7f2d996296cb88ce646f7bc8c8db83"},{url:"static/Dance4.svg",revision:"f0fdc86cba051270797e3daa63de03da"},{url:"static/Defeat.svg",revision:"51f1624129b9e95964d5611ee0260b42"},{url:"static/Desktop_Tutorial.png",revision:"da7ac285d3bb9fe0af81de5fb8d150b7"},{url:"static/discord.svg",revision:"297b7da16e61f4349cecd15bc15b276d"},{url:"static/DownArrow.png",revision:"d6d8a4ab94639d4e6a0a15f0a929b88f"},{url:"static/edit.png",revision:"4dc5efc9f3866c4758808df70043acd1"},{url:"static/editor/audio-icon.png",revision:"8969e6388ecf8e8e50fcfefbaef2a27c"},{url:"static/editor/dot.png",revision:"72442a8fbc9d9c0a07fd68192892883e"},{url:"static/editor/link-icon.png",revision:"33022e4ece55028f7b75d1a8a94a4816"},{url:"static/editor/media-error.png",revision:"19a251258c94bb2318e43e9be669ae5e"},{url:"static/editor/metadata-icon.png",revision:"859028740cf9535c5f5207630c5a523c"},{url:"static/editor/spawn-point.png",revision:"8a18dd30176da34baa817ea2181faf13"},{url:"static/EmoteIcon.svg",revision:"f7b92cdf199ff2df6dc844f454fc4b04"},{url:"static/Erik.png",revision:"5fb722a9781d07b7216eb3868a40375a"},{url:"static/ethereal_mark.png",revision:"e9492b7fc613d7ec1f8facfbdecf952e"},{url:"static/etherealengine.png",revision:"763a89c6a43722d79e0b01b17e4b1d90"},{url:"static/Geoff.png",revision:"fbc54341daf8245196d422173b42224a"},{url:"static/github.svg",revision:"e04620ea8906599758a29f7534bd782d"},{url:"static/grinning.svg",revision:"9d8b0cfaa0412695ac3e309fef5c3b00"},{url:"static/Jace.png",revision:"4172cf134fc1749509372ce890f7af2c"},{url:"static/Jump.svg",revision:"58113d5a35bdf4e0bdb783e4279791f3"},{url:"static/Karthik.png",revision:"368550e212ed25003aa934ebc93a50a2"},{url:"static/Kiss.svg",revision:"82442bfcac8a33b15ac8989dbebbeeff"},{url:"static/kiss1.svg",revision:"e3cb34e8c29a179317f64b738da3d711"},{url:"static/Laugh.svg",revision:"a8936d0b4c317a641a221b6062f11049"},{url:"static/Laughing.svg",revision:"3bf75e6b4653d0699c293d55a8d3f37b"},{url:"static/logo.svg",revision:"bb17304cc903d145c9cfc5f645b284ea"},{url:"static/main-background.png",revision:"e8e90f020d5f1311e57945fcc821f729"},{url:"static/mamoru.png",revision:"a62e513f747ed4ce89a035443e693365"},{url:"static/Microphone-on.png",revision:"553ccac35973c7aa9be6629284ba4b2b"},{url:"static/Microphone.png",revision:"fdbadd9d7f9d3b5d6b0c513271e5e19c"},{url:"static/middleagedman.png",revision:"4638e2b1151f76cfb7d4d499bacf68e2"},{url:"static/middleagedwoman.png",revision:"c70dd6c88c98f3c11f3693369b30a386"},{url:"static/Mobile_Tutorial.png",revision:"55db0b39b408a472d5ae0bf06dd8773e"},{url:"static/Nvidia_control_panel1.png",revision:"a3b4467a1c8fc1d755f4a02176c44c2a"},{url:"static/Nvidia_windows_prefs.png",revision:"98e2e327e9e5598af181e61f53da5e71"},{url:"static/Oval.png",revision:"a0026b3c3a273148fac0152072bc79de"},{url:"static/Plus.png",revision:"dedaf7e8d244052eb912d6721ee7457f"},{url:"static/restart.svg",revision:"4294dbff07de2643d7dbc0cd94e1c541"},{url:"static/Rightdisable.png",revision:"cc78a7836d57c84d74dff409caa97461"},{url:"static/Rightenable.png",revision:"3f2d9e4b7bced198e4ae2f9c39ee6d89"},{url:"static/Rose.png",revision:"dd2ed49f8e4982dba001dd3e51508988"},{url:"static/sad.svg",revision:"7bcdc370ff916af91ffc6b51ea009f4e"},{url:"static/Send.png",revision:"e48c49dacf6239e2fe36fd33a30e30db"},{url:"static/Share.png",revision:"237622c3730b4d9281870612982ded08"},{url:"static/Sonny.png",revision:"add31d49da133036d9a75bc1897fad4b"},{url:"static/Subtract.svg",revision:"a7becae6c99176ef1bdc4ec9d188743a"},{url:"static/usagi.png",revision:"d81aeb01be30091071b23c31f4b89a01"},{url:"static/victory.svg",revision:"cd8753aa2b81761e85fdafc0968d5ef6"},{url:"static/Wave.png",revision:"b7b36dac807e770bc88a4a56ae1cf218"},{url:"static/Wave.svg",revision:"4d2afe0c44aff468a2e5c1e6d0e21080"},{url:"static/XR_Tutorial.png",revision:"e924603af5b2c39fd09550b2cf6d8f2a"},{url:"sw.js.map",revision:"0b9af5de36cd7e517f9682e6daa35215"},{url:"workbox-700044d1.js.map",revision:null},{url:"workbox-e0499f3d.js.map",revision:null},{url:"workers/generateBVHAsync.worker.js",revision:"b1f77c563b22487b89a3cb9ca59423ae"},{url:"workers/three-mesh-bvh.umd.cjs.js",revision:"a649fbe97f887aeddd660cc8e99dd2c1"},{url:"workers/three.min.js",revision:"bdf0f4bad52598a4b2e8d252d9912ccc"},{url:"/manifest.webmanifest",revision:"1.2.0"},{url:"/sw.js",revision:"1.2.0"},{url:"/index.html",revision:"1.2.0"},{url:"android-chrome-192x192.png",revision:"63a03842ef90572c4c47ed7a13cc2bfe"},{url:"android-chrome-512x512.png",revision:"c5367cd493885f3ec26d34183a136cd6"},{url:"apple-touch-icon.png",revision:"9d3d5ee16ca2dc97d2cc997c056f66db"},{url:"favicon-16x16.png",revision:"a15a465ca5003b8748bc5fd974a3b1be"},{url:"favicon-32x32.png",revision:"e8697feaf0168dfdc35f907ded90aed0"},{url:"mstile-150x150.png",revision:"6fa5dbe82c07314c540deb7040e16618"},{url:"manifest.webmanifest",revision:"53a4b513f744ff4c015d51533370887b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{allowlist:[/^\/.*/,/^\/*/]})),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
