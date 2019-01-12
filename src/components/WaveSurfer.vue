<template>
<div>
    <div :id="name"></div>
    wavesurfer element
    <div>
        current time: {{ currentTime }}, 
        duration: {{ getDuration }}, 
        mute: {{ getMute }}, 
        playback: {{ getPlaybackRate }}, 
        volume: {{ getVolume }}/ {{volume}}
    </div>
    <div>
        <button @click="play">play</button>
        <button @click="pause">pause</button>
        <button @click="stop">stop</button>
        <input type="range" min="1" max="100" v-model="volume" @input="setVolume">
    </div>
</div>
    
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
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
        }
    },
    data() {
        return{
            wavesurfer: null,
            currentTime:null,
            timeInterval: null,
            volume: 100
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
            this.currentTime = null
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
                return null
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

</style>