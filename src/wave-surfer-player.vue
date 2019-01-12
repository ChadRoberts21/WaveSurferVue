<template>
    <div>
        <div :id="name"></div>
        <div>
            <!-- controls -->
            <span class="media-controles">
                <span v-if="combinedPlay">
                    <button @click="playPause" class="bttn playPause">
                    <span v-if="playing">
                        <font-awesome-icon :icon="pauseIcon" size="2x"/>
                    </span>
                    <span v-if="!playing">
                        <font-awesome-icon :icon="playIcon" size="2x"/>
                    </span>
                </button>
                </span>
                <span v-if="!combinedPlay">
                    <button @click="play" class="bttn play">
                        <font-awesome-icon :icon="playIcon"/>
                    </button>
                    <button @click="pause" class="bttn pause">
                        <font-awesome-icon :icon="pauseIcon"/>
                    </button>
                </span>
                <button @click="stop" class="bttn stop">
                    <font-awesome-icon :icon="stopIcon"/>
                </button>
            </span>
            <span class="volume-controles">
                <span>
                    {{ currentTime }}/{{ getDuration }}
                </span>
                <span>
                    <input type="range" min="1" max="100" v-model="volume" @input="setVolume">
                </span>
                <button @click="mute" class="bttn mute">
                    <span v-if="muted">
                        <font-awesome-icon :icon="muteIcon"/>
                    </span>
                    <span v-if="!muted">
                        <font-awesome-icon :icon="volumeUpIcon"/>
                    </span>
                </button>
                
            </span>
        </div>
    </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faPause, faStop, faVolumeMute, faVolumeUp, faVolumeDown} from '@fortawesome/free-solid-svg-icons'
export default {
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
        FontAwesomeIcon
    },
    data() {
        return{
            wavesurfer: null,
            currentTime:"0:00",
            timeInterval: null,
            volume: 100,
            playing: false,
            muted: false,
            playIcon: faPlay,
            pauseIcon: faPause,
            stopIcon: faStop,
            muteIcon: faVolumeMute,
            volumeUpIcon: faVolumeUp,
            volumeDownIcon: faVolumeDown
        }
    },
    methods: {
        timeDisplay(time){
            // Hours, minutes and seconds
            let hrs = Math.floor(time / 3600);
            let mins = Math.floor((time % 3600) / 60);
            let secs = Math.floor(time % 60);
            // Output like "1:01" or "4:03:59" or "123:03:59"
            let output = '';
            if (hrs > 0) {
                output += '' + hrs + ':' + (mins < 10 ? '0' : '');
            }
            output += '' + mins + ':' + (secs < 10 ? '0' : '');
            output += '' + secs;
            return output;
        },
        playPause(){
            this.playing = this.wavesurfer.isPlaying()
            if(this.playing){
                this.pause()
            }
            else{
                this.play()
            }
            this.playing = this.wavesurfer.isPlaying()
        },
        play() {
            this.timeInterval = setInterval(() => {
                this.currentTime = this.timeDisplay(this.wavesurfer.getCurrentTime())
            }, 1000);
            this.wavesurfer.play()
        },
        pause() {
            this.wavesurfer.pause()
        },
        stop() {
            this.wavesurfer.stop()
            this.timeInterval = null
            this.currentTime = this.timeDisplay(0)
        },
        mute() {
            this.muted = this.getMute
            this.wavesurfer.setMute(!this.muted)
            this.muted = this.getMute
        },
        setVolume(){
            let floatValue = this.volume/100
            this.wavesurfer.setVolume(Number.parseFloat(floatValue.toFixed(2)))
        }
    },
    computed: {
        id(){
            return `#${this.name}`
        },
        getDuration(){
            if(this.wavesurfer){
                return this.timeDisplay(this.wavesurfer.getDuration())
            }
            else{
                return null
            }
        },
        getPlaybackRate(){
            if(this.wavesurfer){
                return this.wavesurfer.getPlaybackRate()
            }
            else{
                return null
            }
        },
        getVolume(){
            if(this.wavesurfer){
                return this.wavesurfer.getVolume()
            }
            else{
                return null
            }
        },
        getMute(){
            if(this.wavesurfer){
                return this.wavesurfer.getMute()
            }
            else{
                return false
            }
        }
    },
    watch: {
        audio(newValue, oldValue) {
            this.wavesurfer.load(newValue)
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.wavesurfer = WaveSurfer.create({
                container: this.id,
                waveColor: this.waveColor,
                progressColor: this.progressColor,
                cursorColor: this.cursorColor,
                cursorWidth: this.cursorWidth,
                height: this.height,
                fillParent: this.fillParent,
                loopSelection: this.loopSelection,
                interact: this.interact,
                removeMediaElementOnDestroy: this.removeMediaElementOnDestroy
            })
            
            this.wavesurfer.load(this.audio)
        })
    },
    beforeDestroy(){
        this.wavesurfer.destroy()
    }
}
</script>

<style>
.bttn{
    background-color: aqua;
    align-items: flex-start;
    text-align: center;
    cursor: default;
    color: #000;
    background-color: #00000000;
    box-sizing: border-box;
    padding: 8px 10px;;
    border-width: 0px;
    border-style: none;
    border-color: none;
    border-image: initial;
}
.bttn:hover{
    background-color: #00000050;
    border-radius: 100%;
    padding: 8px 10px;
}
.bttn:focus{
    outline: none;
}
.media-controles{
    float: left;
}
.volume-controles{
    float: right;
}
input[type=range] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  background: transparent; /* Otherwise white in Chrome */
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

/*Styling the thumb in Chrome*/
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background: #000;
  cursor: pointer;
  margin-top: -4px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
}

/*Styling the track in Chrome*/
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  background: #00000025;
  border-radius: 15px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #00000045;
}
</style>