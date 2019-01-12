<template>
  <div id="app">
    <wave-surfer :name="wsName" :audio="audioURL"></wave-surfer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import WaveSurfer from './components/WaveSurfer'
export default {
  name: "app",
  components: {
    HelloWorld,
    WaveSurfer
  },
  data() {
    return {
      audioURL: 'http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3',
      wsName: 'test'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
