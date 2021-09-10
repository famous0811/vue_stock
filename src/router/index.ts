import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Landing from "../pages/Landing.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: () => import("../components/layout/index.vue"),
    children: [
      {
        path: "/main",
        name: "landing",
        component: Landing,
      },
      {
        path: "chart",
        name: "Chart",
        component: () => import("../pages/Chart.vue"),
      },
      {
        path: "kospi",
        name: "kospi",
        component: () => import("../pages/kospi.vue"),
      },
      {
        path: "nyse",
        name: "nyse",
        component: () => import("../pages/Chart.vue"),
      },
      {
        path: "news",
        name: "news",
        component: () => import("../pages/Chart.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/signup",
    name: "signUp",
    component: () => import("../pages/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next("/main");
  }
  next();
});

export default router;
