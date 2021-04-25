<template>
  <div id="root">
    <div id="nav">
      <router-link class="h1" to="/">子应用首页</router-link> |
      <router-link class="h1" to="/page1">子应用page1</router-link>
      <el-button type="success" @click="goto('/third')">mainAppThird</el-button>
    </div>
    <h2>SubApp Page View</h2>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goto(url) {
      // 调用父应用路由
      this.mainRouter.push({
        path: url
      });
      // window.history.pushState({}, "", url);
    }
  }
};
</script>
<style lang="less">
#root {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b;
    }
  }
}
.h1 {
  color: green;
}
</style>
