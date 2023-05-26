import Vue from "vue";
import VueRouter from "vue-router";
import Service from "../views/Service/index.vue";
import Home from "../views/Home";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "solution" */ "../views/Home"),
  },
  {
    path: '/solution',
    name: 'solution',
    redirect: 'openscheme',
    component: () => import( /* webpackChunkName: "solution" */ '../views/Solution/AllSolution.vue'),
    children: [
      {
        path: '/openscheme',
        name: 'enschede',
        component: () => import( /* webpackChunkName: "openscheme" */ '../views/Solution/Scheme/OpenScheme.vue'),
      },
      {
        path: '/carscheme',
        name: 'carscheme',
        component: () => import( /* webpackChunkName: "carscheme" */ '../views/Solution/Scheme/CarScheme.vue'),
      }
    ]
  },
  {
    path: "/devsecops",
    name: "devsecops",
    component: () =>
      import(/* webpackChunkName: "solution" */ "../views/DevSecOps"),
  },
  {
    path: "/service",
    name: "service",
    component: () =>
      import(/* webpackChunkName: "solution" */ "../views/Service/index.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "solution" */ "../views/About"),
  },
  {
    path: "/job",
    name: "job",
    component: () => import(/* webpackChunkName: "solution" */ "../views/Job"),
  },
];
const router = new VueRouter({
  routes,
  //导航栏动态添加类名 active
  linkExactActiveClass: "active",
});

export default router;
