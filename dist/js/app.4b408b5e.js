(function(e){function t(t){for(var n,l,u=t[0],i=t[1],s=t[2],p=0,v=[];p<u.length;p++)l=u[p],o[l]&&v.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(v.length)v.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"1fd5":function(e,t,r){"use strict";var n=r("2cdb"),o=r.n(n);o.a},"2cdb":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("wave-surfer",{attrs:{name:e.wsName,audio:e.audioURL}})],1)},a=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",target:"_blank",rel:"noopener"}},[e._v("unit-mocha")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch",target:"_blank",rel:"noopener"}},[e._v("e2e-nightwatch")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],i={name:"HelloWorld",props:{msg:String}},s=i,c=(r("1fd5"),r("2877")),p=Object(c["a"])(s,l,u,!1,null,"422a3a28",null);p.options.__file="HelloWorld.vue";var v=p.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:e.name}}),e._v("\r\n    wavesurfer element\r\n    "),r("div",[r("button",{on:{click:e.play}},[e._v("play")])])])},h=[],d=(r("7f7f"),r("c5f6"),r("b9b7")),_=r.n(d),g={name:"wavesurfer",props:{name:{type:String,required:!0,default:"waveform"},audio:{type:String,required:!0},progressColor:{type:String,default:"#555"},waveColor:{type:String,default:"#999"},cursorColor:{type:String,default:"#333"},cursorWidth:{type:Number,default:1},height:{type:Number,default:128},fillParent:{type:Boolean,default:!1},loopSelection:{type:Boolean,default:!0},interact:{type:Boolean,default:!0},removeMediaElementOnDestroy:{type:Boolean,default:!0}},data:function(){return{wavesurfer:null}},methods:{play:function(){this.wavesurfer.playPause()}},computed:{id:function(){return"#".concat(this.name)}},mounted:function(){var e=this;this.$nextTick(function(){e.wavesurfer=_.a.create({container:e.id,waveColor:e.waveColor,progressColor:e.progressColor,cursorColor:e.cursorColor,cursorWidth:e.cursorWidth,height:e.height,fillParent:e.fillParent,loopSelection:e.loopSelection,interact:e.interact,removeMediaElementOnDestroy:e.removeMediaElementOnDestroy}),e.wavesurfer.load(e.audio)})}},m=g,b=Object(c["a"])(m,f,h,!1,null,null,null);b.options.__file="WaveSurfer.vue";var y=b.exports,w={name:"app",components:{HelloWorld:v,WaveSurfer:y},data:function(){return{audioURL:"http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3",wsName:"test"}}},j=w,k=(r("034f"),Object(c["a"])(j,o,a,!1,null,null,null));k.options.__file="App.vue";var S=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(S)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.4b408b5e.js.map