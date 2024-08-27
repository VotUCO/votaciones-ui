import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import VotesView from "@/views/VotesView.vue";
import VotingView from "@/views/VotingView.vue";
import RegisterUserView from "@/views/RegisterUserView.vue";
import CreateVotationView from "@/views/CreateVotationView.vue";
import LogInView from "@/views/LogInView.vue";
//import CreateVotationView from "../views/CreateVotationView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  //{
  //  path: "/about",
  //  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //  component: () =>
  //    import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //},
  {
    path: "/votes2",
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
  {
    path: "/login",
    name: "login",
    component: LogInView,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/register2",
    name: "register",
    component: RegisterUserView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
