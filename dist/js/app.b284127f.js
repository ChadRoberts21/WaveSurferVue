(function(e){function t(t){for(var o,i,u=t[0],s=t[1],l=t[2],p=0,f=[];p<u.length;p++)i=u[p],r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("wave-surfer",{attrs:{name:e.wsName,audio:e.audioURL}})],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:e.name}}),n("div",[n("span",{staticClass:"media-controles"},[e.combinedPlay?n("span",[n("button",{staticClass:"bttn playPause",on:{click:e.playPause}},[e.playing?n("span",[n("font-awesome-icon",{attrs:{icon:e.pauseIcon,size:"2x"}})],1):e._e(),e.playing?e._e():n("span",[n("font-awesome-icon",{attrs:{icon:e.playIcon,size:"2x"}})],1)])]):e._e(),e.combinedPlay?e._e():n("span",[n("button",{staticClass:"bttn play",on:{click:e.play}},[n("font-awesome-icon",{attrs:{icon:e.playIcon}})],1),n("button",{staticClass:"bttn pause",on:{click:e.pause}},[n("font-awesome-icon",{attrs:{icon:e.pauseIcon}})],1)]),n("button",{staticClass:"bttn stop",on:{click:e.stop}},[n("font-awesome-icon",{attrs:{icon:e.stopIcon}})],1)]),n("span",{staticClass:"volume-controles"},[n("span",[e._v("\n                "+e._s(e.currentTime)+"/"+e._s(e.getDuration)+"\n            ")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.volume,expression:"volume"}],attrs:{type:"range",min:"1",max:"100"},domProps:{value:e.volume},on:{input:e.setVolume,__r:function(t){e.volume=t.target.value}}})]),n("button",{staticClass:"bttn mute",on:{click:e.mute}},[e.muted?n("span",[n("font-awesome-icon",{attrs:{icon:e.muteIcon}})],1):e._e(),e.muted?e._e():n("span",[n("font-awesome-icon",{attrs:{icon:e.volumeUpIcon}})],1)])])])])},u=[],s=(n("7f7f"),n("82a3")),l=n.n(s),c=(n("c5f6"),n("b9b7")),p=n.n(c),f=n("ad3d"),m=n("c074"),v={name:"wavesurfer",props:{name:{type:String,required:!0,default:"waveform"},audio:{type:String,required:!0},progressColor:{type:String,default:"#555"},waveColor:{type:String,default:"#999"},cursorColor:{type:String,default:"#333"},cursorWidth:{type:Number,default:1},height:{type:Number,default:128},fillParent:{type:Boolean,default:!1},loopSelection:{type:Boolean,default:!0},interact:{type:Boolean,default:!0},removeMediaElementOnDestroy:{type:Boolean,default:!0},combinedPlay:{type:Boolean,default:!0}},components:{FontAwesomeIcon:f["a"]},data:function(){return{wavesurfer:null,currentTime:"0:00",timeInterval:null,volume:100,playing:!1,muted:!1,playIcon:m["b"],pauseIcon:m["a"],stopIcon:m["c"],muteIcon:m["e"],volumeUpIcon:m["f"],volumeDownIcon:m["d"]}},methods:{timeDisplay:function(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60),o=Math.floor(e%60),r="";return t>0&&(r+=t+":"+(n<10?"0":"")),r+=n+":"+(o<10?"0":""),r+=""+o,r},playPause:function(){this.playing=this.wavesurfer.isPlaying(),this.playing?this.pause():this.play(),this.playing=this.wavesurfer.isPlaying()},play:function(){var e=this;this.timeInterval=setInterval(function(){e.currentTime=e.timeDisplay(e.wavesurfer.getCurrentTime())},1e3),this.wavesurfer.play()},pause:function(){this.wavesurfer.pause()},stop:function(){this.wavesurfer.stop(),this.timeInterval=null,this.currentTime=this.timeDisplay(0)},mute:function(){this.muted=this.getMute,this.wavesurfer.setMute(!this.muted),this.muted=this.getMute},setVolume:function(){var e=this.volume/100;this.wavesurfer.setVolume(l()(e.toFixed(2)))}},computed:{id:function(){return"#".concat(this.name)},getDuration:function(){return this.wavesurfer?this.timeDisplay(this.wavesurfer.getDuration()):null},getPlaybackRate:function(){return this.wavesurfer?this.wavesurfer.getPlaybackRate():null},getVolume:function(){return this.wavesurfer?this.wavesurfer.getVolume():null},getMute:function(){return!!this.wavesurfer&&this.wavesurfer.getMute()}},watch:{audio:function(e,t){this.wavesurfer.load(e)}},mounted:function(){var e=this;this.$nextTick(function(){e.wavesurfer=p.a.create({container:e.id,waveColor:e.waveColor,progressColor:e.progressColor,cursorColor:e.cursorColor,cursorWidth:e.cursorWidth,height:e.height,fillParent:e.fillParent,loopSelection:e.loopSelection,interact:e.interact,removeMediaElementOnDestroy:e.removeMediaElementOnDestroy}),e.wavesurfer.load(e.audio)})},beforeDestroy:function(){this.wavesurfer.destroy()}},d=v,h=(n("8643"),n("2877")),y=Object(h["a"])(d,i,u,!1,null,null,null);y.options.__file="wave-surfer-player.vue";var w=y.exports,g={name:"app",components:{WaveSurfer:w},data:function(){return{audioURL:"http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3",wsName:"test"}}},b=g,_=(n("034f"),Object(h["a"])(b,r,a,!1,null,null,null));_.options.__file="App.vue";var P=_.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(P)}}).$mount("#app")},"64a9":function(e,t,n){},8643:function(e,t,n){"use strict";var o=n("a0a9"),r=n.n(o);r.a},a0a9:function(e,t,n){}});
//# sourceMappingURL=app.b284127f.js.map