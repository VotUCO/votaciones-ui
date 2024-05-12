import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VotesView from "../views/VotesView.vue";
import VotingView from "../views/VotingView.vue";
import CreateVotationView from "../views/CreateVotationView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/votes",
    name: "votes",
    component: VotesView,
  },
  {
    path: "/voting",
    name: "votes",
    component: VotingView,
  },
  {
    path: "/createVote",
    name: "createVote",
    component: CreateVotationView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
