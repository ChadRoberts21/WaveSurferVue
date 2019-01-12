(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('wavesurfer.js'), require('@fortawesome/vue-fontawesome'), require('@fortawesome/free-solid-svg-icons'), require('vue-runtime-helpers/normalize-component.js'), require('vue-runtime-helpers/inject-style/browser.js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'wavesurfer.js', '@fortawesome/vue-fontawesome', '@fortawesome/free-solid-svg-icons', 'vue-runtime-helpers/normalize-component.js', 'vue-runtime-helpers/inject-style/browser.js'], factory) :
    (global = global || self, factory(global.WaveSurferPlayer = {}, global.WaveSurfer, global.vueFontawesome, global.freeSolidSvgIcons, global.__vue_normalize__, global.__vue_create_injector__));
}(this, function (exports, WaveSurfer, vueFontawesome, freeSolidSvgIcons, __vue_normalize__, __vue_create_injector__) { 'use strict';

    WaveSurfer = WaveSurfer && WaveSurfer.hasOwnProperty('default') ? WaveSurfer['default'] : WaveSurfer;
    __vue_normalize__ = __vue_normalize__ && __vue_normalize__.hasOwnProperty('default') ? __vue_normalize__['default'] : __vue_normalize__;
    __vue_create_injector__ = __vue_create_injector__ && __vue_create_injector__.hasOwnProperty('default') ? __vue_create_injector__['default'] : __vue_create_injector__;

    //
    var script = {
        name:'wavesurfer',
        props:{
            name: {
                type: String,
                required: true,
                default: "waveform"
            },
            audio: { 
                type: String,
                required: true
            },
            progressColor: {
                type: String,
                default: "#555"
            },
            waveColor: {
                type: String,
                default: "#999"
            },
            cursorColor: {
                type: String,
                default: "#333"
            },
            cursorWidth: {
                type: Number,
                default: 1
            },
            height: { 
                type: Number,
                default: 128
            },
            fillParent: {
                type: Boolean,
                default:false
            },
            loopSelection: {
                type: Boolean,
                default: true
            },
            interact: {
                type: Boolean,
                default: true
            },
            removeMediaElementOnDestroy: {
                type: Boolean,
                default: true
            },
            combinedPlay: {
                type: Boolean,
                default: true
            }
        },
        components:{
            FontAwesomeIcon: vueFontawesome.FontAwesomeIcon
        },
        data: function data() {
            return {
                wavesurfer: null,
                currentTime:"0:00",
                timeInterval: null,
                volume: 100,
                playing: false,
                muted: false,
                playIcon: freeSolidSvgIcons.faPlay,
                pauseIcon: freeSolidSvgIcons.faPause,
                stopIcon: freeSolidSvgIcons.faStop,
                muteIcon: freeSolidSvgIcons.faVolumeMute,
                volumeUpIcon: freeSolidSvgIcons.faVolumeUp,
                volumeDownIcon: freeSolidSvgIcons.faVolumeDown
            }
        },
        methods: {
            timeDisplay: function timeDisplay(time){
                // Hours, minutes and seconds
                var hrs = Math.floor(time / 3600);
                var mins = Math.floor((time % 3600) / 60);
                var secs = Math.floor(time % 60);
                // Output like "1:01" or "4:03:59" or "123:03:59"
                var output = '';
                if (hrs > 0) {
                    output += '' + hrs + ':' + (mins < 10 ? '0' : '');
                }
                output += '' + mins + ':' + (secs < 10 ? '0' : '');
                output += '' + secs;
                return output;
            },
            playPause: function playPause(){
                this.playing = this.wavesurfer.isPlaying();
                if(this.playing){
                    this.pause();
                }
                else{
                    this.play();
                }
                this.playing = this.wavesurfer.isPlaying();
            },
            play: function play() {
                var this$1 = this;

                this.timeInterval = setInterval(function () {
                    this$1.currentTime = this$1.timeDisplay(this$1.wavesurfer.getCurrentTime());
                }, 1000);
                this.wavesurfer.play();
            },
            pause: function pause() {
                this.wavesurfer.pause();
            },
            stop: function stop() {
                this.wavesurfer.stop();
                this.timeInterval = null;
                this.currentTime = this.timeDisplay(0);
            },
            mute: function mute() {
                this.muted = this.getMute;
                this.wavesurfer.setMute(!this.muted);
                this.muted = this.getMute;
            },
            setVolume: function setVolume(){
                var floatValue = this.volume/100;
                this.wavesurfer.setVolume(Number.parseFloat(floatValue.toFixed(2)));
            }
        },
        computed: {
            id: function id(){
                return ("#" + (this.name))
            },
            getDuration: function getDuration(){
                if(this.wavesurfer){
                    return this.timeDisplay(this.wavesurfer.getDuration())
                }
                else{
                    return null
                }
            },
            getPlaybackRate: function getPlaybackRate(){
                if(this.wavesurfer){
                    return this.wavesurfer.getPlaybackRate()
                }
                else{
                    return null
                }
            },
            getVolume: function getVolume(){
                if(this.wavesurfer){
                    return this.wavesurfer.getVolume()
                }
                else{
                    return null
                }
            },
            getMute: function getMute(){
                if(this.wavesurfer){
                    return this.wavesurfer.getMute()
                }
                else{
                    return false
                }
            }
        },
        watch: {
            audio: function audio(newValue, oldValue) {
                this.wavesurfer.load(newValue);
            },
        },
        mounted: function mounted() {
            var this$1 = this;

            this.$nextTick(function () {
                this$1.wavesurfer = WaveSurfer.create({
                    container: this$1.id,
                    waveColor: this$1.waveColor,
                    progressColor: this$1.progressColor,
                    cursorColor: this$1.cursorColor,
                    cursorWidth: this$1.cursorWidth,
                    height: this$1.height,
                    fillParent: this$1.fillParent,
                    loopSelection: this$1.loopSelection,
                    interact: this$1.interact,
                    removeMediaElementOnDestroy: this$1.removeMediaElementOnDestroy
                });
                
                this$1.wavesurfer.load(this$1.audio);
            });
        },
        beforeDestroy: function beforeDestroy(){
            this.wavesurfer.destroy();
        }
    };

    /* script */
                var __vue_script__ = script;
                
    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [
        _c("div", { attrs: { id: _vm.name } }),
        _vm._v(" "),
        _c("div", [
          _c("span", { staticClass: "media-controles" }, [
            _vm.combinedPlay
              ? _c("span", [
                  _c(
                    "button",
                    { staticClass: "bttn playPause", on: { click: _vm.playPause } },
                    [
                      _vm.playing
                        ? _c(
                            "span",
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: _vm.pauseIcon, size: "2x" }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.playing
                        ? _c(
                            "span",
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: _vm.playIcon, size: "2x" }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.combinedPlay
              ? _c("span", [
                  _c(
                    "button",
                    { staticClass: "bttn play", on: { click: _vm.play } },
                    [_c("font-awesome-icon", { attrs: { icon: _vm.playIcon } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    { staticClass: "bttn pause", on: { click: _vm.pause } },
                    [_c("font-awesome-icon", { attrs: { icon: _vm.pauseIcon } })],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "bttn stop", on: { click: _vm.stop } },
              [_c("font-awesome-icon", { attrs: { icon: _vm.stopIcon } })],
              1
            )
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "volume-controles" }, [
            _c("span", [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.currentTime) +
                  "/" +
                  _vm._s(_vm.getDuration) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("span", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.volume,
                    expression: "volume"
                  }
                ],
                attrs: { type: "range", min: "1", max: "100" },
                domProps: { value: _vm.volume },
                on: {
                  input: _vm.setVolume,
                  __r: function($event) {
                    _vm.volume = $event.target.value;
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "bttn mute", on: { click: _vm.mute } }, [
              _vm.muted
                ? _c(
                    "span",
                    [_c("font-awesome-icon", { attrs: { icon: _vm.muteIcon } })],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.muted
                ? _c(
                    "span",
                    [
                      _c("font-awesome-icon", { attrs: { icon: _vm.volumeUpIcon } })
                    ],
                    1
                  )
                : _vm._e()
            ])
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      var __vue_inject_styles__ = function (inject) {
        if (!inject) { return }
        inject("data-v-95ba92c2_0", { source: "\n.bttn{\r\n    background-color: aqua;\r\n    align-items: flex-start;\r\n    text-align: center;\r\n    cursor: default;\r\n    color: #000;\r\n    background-color: #00000000;\r\n    box-sizing: border-box;\r\n    padding: 8px 10px;;\r\n    border-width: 0px;\r\n    border-style: none;\r\n    border-color: none;\r\n    border-image: initial;\n}\n.bttn:hover{\r\n    background-color: #00000050;\r\n    border-radius: 100%;\r\n    padding: 8px 10px;\n}\n.bttn:focus{\r\n    outline: none;\n}\n.media-controles{\r\n    float: left;\n}\n.volume-controles{\r\n    float: right;\n}\ninput[type=range] {\r\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\r\n  background: transparent; /* Otherwise white in Chrome */\n}\ninput[type=range]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\n}\ninput[type=range]:focus {\r\n  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n}\r\n\r\n/*Styling the thumb in Chrome*/\ninput[type=range]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  height: 16px;\r\n  width: 16px;\r\n  border-radius: 100%;\r\n  background: #000;\r\n  cursor: pointer;\r\n  margin-top: -4px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\n}\r\n\r\n/*Styling the track in Chrome*/\ninput[type=range]::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 8px;\r\n  cursor: pointer;\r\n  background: #00000025;\r\n  border-radius: 15px;\n}\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n  background: #00000045;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\chadr\\source\\repos\\WaveSurferVue/C:\\Users\\chadr\\source\\repos\\WaveSurferVue\\src\\wave-surfer-player.vue"],"names":[],"mappings":";AAiPA;IACA,uBAAA;IACA,wBAAA;IACA,mBAAA;IACA,gBAAA;IACA,YAAA;IACA,4BAAA;IACA,uBAAA;IACA,kBAAA;IACA,kBAAA;IACA,mBAAA;IACA,mBAAA;IACA,sBAAA;CACA;AACA;IACA,4BAAA;IACA,oBAAA;IACA,kBAAA;CACA;AACA;IACA,cAAA;CACA;AACA;IACA,YAAA;CACA;AACA;IACA,aAAA;CACA;AACA;EACA,yBAAA,CAAA,wDAAA;EACA,wBAAA,CAAA,+BAAA;CACA;AAEA;EACA,yBAAA;CACA;AAEA;EACA,cAAA,CAAA,kHAAA;CACA;;AAEA,+BAAA;AACA;EACA,yBAAA;EACA,aAAA;EACA,YAAA;EACA,oBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA,CAAA,mFAAA;CACA;;AAEA,+BAAA;AACA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,oBAAA;CACA;AAEA;EACA,sBAAA;CACA","file":"wave-surfer-player.vue","sourcesContent":["<template>\r\n    <div>\r\n        <div :id=\"name\"></div>\r\n        <div>\r\n            <!-- controls -->\r\n            <span class=\"media-controles\">\r\n                <span v-if=\"combinedPlay\">\r\n                    <button @click=\"playPause\" class=\"bttn playPause\">\r\n                    <span v-if=\"playing\">\r\n                        <font-awesome-icon :icon=\"pauseIcon\" size=\"2x\"/>\r\n                    </span>\r\n                    <span v-if=\"!playing\">\r\n                        <font-awesome-icon :icon=\"playIcon\" size=\"2x\"/>\r\n                    </span>\r\n                </button>\r\n                </span>\r\n                <span v-if=\"!combinedPlay\">\r\n                    <button @click=\"play\" class=\"bttn play\">\r\n                        <font-awesome-icon :icon=\"playIcon\"/>\r\n                    </button>\r\n                    <button @click=\"pause\" class=\"bttn pause\">\r\n                        <font-awesome-icon :icon=\"pauseIcon\"/>\r\n                    </button>\r\n                </span>\r\n                <button @click=\"stop\" class=\"bttn stop\">\r\n                    <font-awesome-icon :icon=\"stopIcon\"/>\r\n                </button>\r\n            </span>\r\n            <span class=\"volume-controles\">\r\n                <span>\r\n                    {{ currentTime }}/{{ getDuration }}\r\n                </span>\r\n                <span>\r\n                    <input type=\"range\" min=\"1\" max=\"100\" v-model=\"volume\" @input=\"setVolume\">\r\n                </span>\r\n                <button @click=\"mute\" class=\"bttn mute\">\r\n                    <span v-if=\"muted\">\r\n                        <font-awesome-icon :icon=\"muteIcon\"/>\r\n                    </span>\r\n                    <span v-if=\"!muted\">\r\n                        <font-awesome-icon :icon=\"volumeUpIcon\"/>\r\n                    </span>\r\n                </button>\r\n                \r\n            </span>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport WaveSurfer from 'wavesurfer.js'\r\nimport { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'\r\nimport { faPlay, faPause, faStop, faVolumeMute, faVolumeUp, faVolumeDown} from '@fortawesome/free-solid-svg-icons'\r\nexport default {\r\n    name:'wavesurfer',\r\n    props:{\r\n        name: {\r\n            type: String,\r\n            required: true,\r\n            default: \"waveform\"\r\n        },\r\n        audio: { \r\n            type: String,\r\n            required: true\r\n        },\r\n        progressColor: {\r\n            type: String,\r\n            default: \"#555\"\r\n        },\r\n        waveColor: {\r\n            type: String,\r\n            default: \"#999\"\r\n        },\r\n        cursorColor: {\r\n            type: String,\r\n            default: \"#333\"\r\n        },\r\n        cursorWidth: {\r\n            type: Number,\r\n            default: 1\r\n        },\r\n        height: { \r\n            type: Number,\r\n            default: 128\r\n        },\r\n        fillParent: {\r\n            type: Boolean,\r\n            default:false\r\n        },\r\n        loopSelection: {\r\n            type: Boolean,\r\n            default: true\r\n        },\r\n        interact: {\r\n            type: Boolean,\r\n            default: true\r\n        },\r\n        removeMediaElementOnDestroy: {\r\n            type: Boolean,\r\n            default: true\r\n        },\r\n        combinedPlay: {\r\n            type: Boolean,\r\n            default: true\r\n        }\r\n    },\r\n    components:{\r\n        FontAwesomeIcon\r\n    },\r\n    data() {\r\n        return{\r\n            wavesurfer: null,\r\n            currentTime:\"0:00\",\r\n            timeInterval: null,\r\n            volume: 100,\r\n            playing: false,\r\n            muted: false,\r\n            playIcon: faPlay,\r\n            pauseIcon: faPause,\r\n            stopIcon: faStop,\r\n            muteIcon: faVolumeMute,\r\n            volumeUpIcon: faVolumeUp,\r\n            volumeDownIcon: faVolumeDown\r\n        }\r\n    },\r\n    methods: {\r\n        timeDisplay(time){\r\n            // Hours, minutes and seconds\r\n            let hrs = Math.floor(time / 3600);\r\n            let mins = Math.floor((time % 3600) / 60);\r\n            let secs = Math.floor(time % 60);\r\n            // Output like \"1:01\" or \"4:03:59\" or \"123:03:59\"\r\n            let output = '';\r\n            if (hrs > 0) {\r\n                output += '' + hrs + ':' + (mins < 10 ? '0' : '');\r\n            }\r\n            output += '' + mins + ':' + (secs < 10 ? '0' : '');\r\n            output += '' + secs;\r\n            return output;\r\n        },\r\n        playPause(){\r\n            this.playing = this.wavesurfer.isPlaying()\r\n            if(this.playing){\r\n                this.pause()\r\n            }\r\n            else{\r\n                this.play()\r\n            }\r\n            this.playing = this.wavesurfer.isPlaying()\r\n        },\r\n        play() {\r\n            this.timeInterval = setInterval(() => {\r\n                this.currentTime = this.timeDisplay(this.wavesurfer.getCurrentTime())\r\n            }, 1000);\r\n            this.wavesurfer.play()\r\n        },\r\n        pause() {\r\n            this.wavesurfer.pause()\r\n        },\r\n        stop() {\r\n            this.wavesurfer.stop()\r\n            this.timeInterval = null\r\n            this.currentTime = this.timeDisplay(0)\r\n        },\r\n        mute() {\r\n            this.muted = this.getMute\r\n            this.wavesurfer.setMute(!this.muted)\r\n            this.muted = this.getMute\r\n        },\r\n        setVolume(){\r\n            let floatValue = this.volume/100\r\n            this.wavesurfer.setVolume(Number.parseFloat(floatValue.toFixed(2)))\r\n        }\r\n    },\r\n    computed: {\r\n        id(){\r\n            return `#${this.name}`\r\n        },\r\n        getDuration(){\r\n            if(this.wavesurfer){\r\n                return this.timeDisplay(this.wavesurfer.getDuration())\r\n            }\r\n            else{\r\n                return null\r\n            }\r\n        },\r\n        getPlaybackRate(){\r\n            if(this.wavesurfer){\r\n                return this.wavesurfer.getPlaybackRate()\r\n            }\r\n            else{\r\n                return null\r\n            }\r\n        },\r\n        getVolume(){\r\n            if(this.wavesurfer){\r\n                return this.wavesurfer.getVolume()\r\n            }\r\n            else{\r\n                return null\r\n            }\r\n        },\r\n        getMute(){\r\n            if(this.wavesurfer){\r\n                return this.wavesurfer.getMute()\r\n            }\r\n            else{\r\n                return false\r\n            }\r\n        }\r\n    },\r\n    watch: {\r\n        audio(newValue, oldValue) {\r\n            this.wavesurfer.load(newValue)\r\n        },\r\n    },\r\n    mounted() {\r\n        this.$nextTick(() => {\r\n            this.wavesurfer = WaveSurfer.create({\r\n                container: this.id,\r\n                waveColor: this.waveColor,\r\n                progressColor: this.progressColor,\r\n                cursorColor: this.cursorColor,\r\n                cursorWidth: this.cursorWidth,\r\n                height: this.height,\r\n                fillParent: this.fillParent,\r\n                loopSelection: this.loopSelection,\r\n                interact: this.interact,\r\n                removeMediaElementOnDestroy: this.removeMediaElementOnDestroy\r\n            })\r\n            \r\n            this.wavesurfer.load(this.audio)\r\n        })\r\n    },\r\n    beforeDestroy(){\r\n        this.wavesurfer.destroy()\r\n    }\r\n}\r\n</script>\r\n\r\n<style>\r\n.bttn{\r\n    background-color: aqua;\r\n    align-items: flex-start;\r\n    text-align: center;\r\n    cursor: default;\r\n    color: #000;\r\n    background-color: #00000000;\r\n    box-sizing: border-box;\r\n    padding: 8px 10px;;\r\n    border-width: 0px;\r\n    border-style: none;\r\n    border-color: none;\r\n    border-image: initial;\r\n}\r\n.bttn:hover{\r\n    background-color: #00000050;\r\n    border-radius: 100%;\r\n    padding: 8px 10px;\r\n}\r\n.bttn:focus{\r\n    outline: none;\r\n}\r\n.media-controles{\r\n    float: left;\r\n}\r\n.volume-controles{\r\n    float: right;\r\n}\r\ninput[type=range] {\r\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\r\n  background: transparent; /* Otherwise white in Chrome */\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n}\r\n\r\ninput[type=range]:focus {\r\n  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\r\n}\r\n\r\n/*Styling the thumb in Chrome*/\r\ninput[type=range]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  height: 16px;\r\n  width: 16px;\r\n  border-radius: 100%;\r\n  background: #000;\r\n  cursor: pointer;\r\n  margin-top: -4px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\r\n}\r\n\r\n/*Styling the track in Chrome*/\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 8px;\r\n  cursor: pointer;\r\n  background: #00000025;\r\n  border-radius: 15px;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n  background: #00000045;\r\n}\r\n</style>"]}, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__ = undefined;
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* style inject SSR */
      

      
      var component = __vue_normalize__(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        __vue_create_injector__,
        undefined
      );

    // Import vue component

    // Declare install function executed by Vue.use()
    function install(Vue) {
      if (install.installed) { return; }
      install.installed = true;
      Vue.component("wave-surfer-player", component);
    }

    // Create module definition for Vue.use()
    var plugin = {
      install: install
    };

    // Auto-install when vue is found (eg. in browser via <script> tag)
    var GlobalVue = null;
    if (typeof window !== "undefined") {
      GlobalVue = window.Vue;
    } else if (typeof global !== "undefined") {
      GlobalVue = global.Vue;
    }
    if (GlobalVue) {
      GlobalVue.use(plugin);
    }

    exports.install = install;
    exports.default = component;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
