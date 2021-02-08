<template>
  <div class="home">
    <asciinema-player-vue
      theme="tango"
      title="hello world"
      author="xubowen"
      authorImgUrl="https://iconfont.alicdn.com/t/431d51a3-6e5c-49ba-9c32-ddf358832252.png@200h_200w.jpg"
      authorUrl="https://www.baidu.com"
      startAt="0:03"
      poster="0:03"
      :speed="1"
      :fontSize="12"
      autoplay
      :src="data"
    ></asciinema-player-vue>
  </div>
</template>
<script>
import data from "./record.cast";
export default {
  components: {},
  data() {
    return {
      data: null
    };
  },
  methods: {
    setData() {
      this.data = data;
    }
  },
  mounted() {
    this.setData();
  }
};
</script>
<style scoped>
/* @import url("./css/asciinema-player.css"); */
</style>
