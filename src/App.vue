<template>
  <div id="app">
    <Navigation></Navigation>
    <TotalBar></TotalBar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import TotalBar from './components/TotalBar.vue'

export default {
  name: "App",
  components:{
    Navigation,
    TotalBar
  }  
}
</script>

<style scope src="../src/assets/styles.css">

</style>
