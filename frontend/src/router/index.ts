import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HistoryView from "../views/HistoryView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Collections",
    component: HomeView,
  },
  {
    path: "/history",
    name: "History",
    component: HistoryView,
  },
  {
    path: "*",
    name: "Page Not Found",
    component: PageNotFoundView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name + " | Magic Eden Bot";
  } else {
    document.title = "Magic Eden Bot";
  }
  next();
});

export default router;
