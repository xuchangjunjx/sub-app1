import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import page1 from "./views/page1.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/sub-app1/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/page1",
      name: "page1",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/page1.vue")
    }
  ]
});
