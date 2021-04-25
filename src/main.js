import "./public-path";
import Vue from "vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

// Vue.use(ElementUI); // import router from "./router";
import store from "./store";
import router from "./router";
// import AsciinemaPlayer from "@secrets/asciinema-player-vue";

// import { mount } from "@alicloud/console-os-vue-portal";
Vue.config.productionTip = false;
// Vue.use(AsciinemaPlayer);
// export default mount({
//   el: "#app",
//   router,
//   store,
//   render: (h) => h(App)
// });

// new Vue({
//   el: "#app",
//   router,
//   store,
//   render: (h) => h(App)
// });

let __router = null;
let instance = null;
function render(props = {}) {
  const { container, mainRouter, http } = props;
  if (http) {
    Vue.prototype.http = http;
  }
  if (mainRouter) {
    Vue.prototype.mainRouter = mainRouter;
  }
  // if (ElementUI) {
  //   Vue.use(ElementUI);
  // }
  __router = router;
  instance = new Vue({
    router: __router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app");

  // if (ElementUI) {
  //   Vue.use(ElementUI);
  // }
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  __router = null;
}
