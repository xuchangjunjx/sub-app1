import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { mount } from "@alicloud/console-os-vue-portal";

Vue.config.productionTip = false;

export default mount({
  el: "#app",
  router,
  store,
  render: (h) => h(App)
});
