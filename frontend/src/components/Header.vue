<template>
  <div class="header">
    <div class="max_width_container flex flex-wrap justify-between">
      <nav>
        <router-link class="nav_item" to="/">Collections</router-link>
        <router-link class="nav_item" to="/dashboard">History</router-link>
      </nav>
      <button class="connect_wallet">Connect Wallet</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderVue",
});
</script>

<style scoped>
.header {
  @apply py-10 px-5;
  background-color: #01132b;
  -moz-box-shadow: 0 5px 5px #01132b;
  -webkit-box-shadow: 0 5px 5px #01132b;
  box-shadow: 0 5px 5px #01132b;
}
.nav_item {
  @apply text-white text-lg p-5 mx-5;
  transition: all .2s;
}
.nav_item:hover {
  text-shadow: 0 0 2px #fff;
}
.connect_wallet {
  @apply bg-white px-4 py-2 mx-5 text-sm font-extralight;
  border-radius: 100px;
  transition: all .3s;
}
.connect_wallet:hover{
  transform: scale(1.05);
  -moz-box-shadow: 0 0 5px #fff;
  -webkit-box-shadow: 0 0 5px #fff;
  box-shadow: 0 0 5px #fff;
}
</style>
