<template>
  <div class="header">
    <div class="max_width_container flex flex-wrap justify-between">
      <nav>
        <router-link class="nav_item" to="/">Collections</router-link>
        <router-link class="nav_item" to="/history">History</router-link>
      </nav>
      <div class="flex flex-wrap justify-end items-center">
        <div>{{ time }}</div>
        <button class="connect_wallet" @click="connectWallet()">
          Connect Wallet
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
  name: "HeaderVue",
  data() {
    return {
      time: "",
    };
  },
  methods: {
    renderTimer() {
      setInterval(() => {
        this.time = moment().format("MMMM Do YYYY, h:mm:ss a");
      }, 1000);
    },
    async connectWallet() {
      if (!window.Slope) {
        return window.open("https://slope.finance/");
      }
      try {
        const slope = new window.Slope();
        const { msg, data } = await slope.connect();
        if (msg === "ok") {
          console.log(data.publicKey);
        } else {
          console.log(msg);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.renderTimer();
  },
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
  transition: all 0.2s;
}
.nav_item:hover {
  color: rgb(0, 255, 242);
  text-shadow: 0 0 10px rgb(0, 255, 242);
}
.connect_wallet {
  @apply bg-white text-black px-4 py-2 mx-5 text-sm font-extralight;
  border-radius: 100px;
  transition: all 0.3s;
}
.connect_wallet:hover {
  transform: scale(1.05);
  -moz-box-shadow: 0 0 5px #fff;
  -webkit-box-shadow: 0 0 5px #fff;
  box-shadow: 0 0 5px #fff;
}
</style>
