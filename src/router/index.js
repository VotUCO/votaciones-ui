import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import VotingView from "@/views/VotingView.vue";
import RegisterUserView from "@/views/RegisterUserView.vue";
import CreateVotationView from "@/views/CreateVotationView.vue";
import LogInView from "@/views/LogInView.vue";
import OAuthLoginRedirect from "@/components/OAuthLoginRedirect.vue";
//import CreateVotationView from "../views/CreateVotationView.vue";
import NotFound from "@/components/NotFound.vue";
import VoteChecker from "@/components/VoteChecker.vue";
import VotingChecker from "@/components/VotingChecker.vue";
import ScoringVoteView from "@/views/ScoringVoteView.vue";
import SchuzleVoteView from "@/views/SchuzleVoteView.vue";
import PublishVoteView from "@/views/PublishVoteView.vue";
import ModifyVotingView from "@/views/ModifyVotingView.vue";
import UserListView from "@/views/UserListView.vue";
import RegisterFormAdminView from "@/views/RegisterFormAdminView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      authRequired: false,
      adminRequired: false,
    },
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
    path: "/voting",
    name: "votes",
    component: VotingView,
    meta: {
      authRequired: true,
      adminRequired: false,
    },
  },
  {
    path: "/createVote",
    name: "createVote",
    component: CreateVotationView,
    meta: {
      authRequired: true,
      adminRequired: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterUserView,
    meta: {
      authRequired: false,
      adminRequired: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LogInView,
    meta: {
      hideNavbar: true,
      authRequired: false,
      adminRequired: false,
    },
  },
  {
    path: "/login/oauth",
    name: "loginOAuth",
    component: OAuthLoginRedirect,
    meta: {
      authRequired: false,
      adminRequired: false,
    },
  },
  {
    path: "/vote/checker",
    name: "voteChecker",
    component: VoteChecker,
    meta: {
      authRequired: true,
      adminRequired: false,
    },
  },
  {
    path: "/voting/checker",
    name: "votingChecker",
    component: VotingChecker,
    meta: {
      authRequired: true,
      adminRequired: false,
    },
  },
  {
    path: "/vote/scoring",
    name: "scoringVote",
    component: ScoringVoteView,
    meta: {
      authRequired: true,
      adminRequired: false,
    },
  },
  {
    path: "/vote/schuzle",
    name: "schuzleVote",
    component: SchuzleVoteView,
    meta: {
      authRequired: true,
      adminRequired: false,
    },
  },
  {
    path: "/publish",
    name: "publishVote",
    component: PublishVoteView,
  },
  {
    path: "/modify",
    name: "modifyView",
    component: ModifyVotingView,
  },
  {
    path: "/adminUsers",
    name: "usersList",
    component: UserListView,
  },
  {
    path: "/admin/createUser",
    name: "createUserAdmin",
    component: RegisterFormAdminView,
    meta: {
      authRequired: false,
      adminRequired: true,
    },
  },
  { path: "/:pathMatch(.*)*", name: "404erroe", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired === true) {
    if (localStorage.getItem("accessToken") !== "null") {
      if (to.meta.adminRequired === true) {
        if (localStorage.getItem("rol") === "admin") {
          return next();
        } else {
          router.push("/404");
        }
      } else {
        return next();
      }
    } else {
      router.push("/404");
    }
  } else {
    return next();
  }
});

export default router;
