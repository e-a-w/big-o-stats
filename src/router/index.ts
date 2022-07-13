import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GraphView from "../views/GraphView.vue";
import TableView from "../views/TableView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/graph",
      name: "graph",
      component: GraphView,
    },
    {
      path: "/table",
      name: "table",
      component: TableView,
    },
  ],
});

export default router;
