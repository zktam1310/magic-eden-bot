<template>
  <div id="app">
    <Header />
    <div class="max_width_container view_container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderVue from "./components/Header.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header: HeaderVue,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@200;400;600&display=swap");
html,
body {
  @apply bg-black;
}
#app {
  font-family: "Barlow", sans-serif;
}
.view_container {
  @apply py-10 px-5;
}
</style>
