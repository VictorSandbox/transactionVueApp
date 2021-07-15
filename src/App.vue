<template>
  <div id="app">
    <Navigation></Navigation>
    <TotalBar></TotalBar>
    <modal></modal>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import TotalBar from "./components/TotalBar.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Navigation,
    TotalBar,
    Modal,
  },
};
</script>

<style scope src="../src/assets/styles.css">
</style>
