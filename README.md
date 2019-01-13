# WaveSurfer Audio Player
### for Vue 
## Test Package! Do not use

A Vue.js wrapper for the wavesurfer.js library.

This is a basic media play for Vue. Used as a test ground for my first public npm module. Please do not use. I won't be able to support others using this package until I am more confident with what I am doing. Tips, advance and support is welcome to help me improve though!

At the moment Vue Runtime Helpers needs to be installed as a peer dependency, so once you have installed this module. Install the runtime helpers with:

`npm install --save vue-runtime-helpers`

Once installed the component can be used like so:
```
import WaveSurferPlayer from 'wavesurfer-player-vue'
export default {
  template: `<wave-surfer-player :name="wsName" :audio="audioURL"></wave-surfer-player>`,
  components: {
    WaveSurferPlayer
  },
  data() {
    return {
      audioURL: 'http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3',
      wsName: 'test'
    }
  }
}
```

Currently the some of Wavesurver's options are exposed via properties. Here are the currently available properties/options:

- name : Name of the of the Wavesurfer element, requires a string. Default: "waveform".
- audio : Required. A string with the URL to the audio file.
- progressColor : A hex colour string, Colour of the progress along the wave image. Default: "#555".
- waveColor : A hex colour string, Colour of the wave image. Default: "#999".
- cursorColor : A hex colour string, Colour of the cursor that moves along the wave image. Default: "#333".
- cursorWidth :Name of the of the Wavesurfer element, requires a string. Default: 1.
- height : A number of pixels defining the height of the wave form. Default: 128.
- fillParent : Boolean, allows the filling of the  wave form to the parent container. Default: false.
- combinedPlay : Boolean, display a combined play/pause buttons or display separate play and pause buttons. Default: true.

Events and methods are not yet exposed for use external to the component.

If you would like to help develop this component please send me a message via git hub. The source is freely available from github.

A big thank you to the WaveSurfer.js team for the library they created and maintain. Visit their [website](https://wavesurfer-js.org/) for more information.