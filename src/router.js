import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("./views/LoginView.vue"),
    meta: {
      protected: false,
    },
  },
  {
    path: "/users",
    name: "User",
    component: () => import("./views/UsersView.vue"),
    meta: {
      protected: true,
    },
    children: [
      {
        path: "",
        name: "User",
        component: () => import("./views/AllUserView.vue"),
        meta: {
          protected: true,
        },
      },
      {
        path: ":id",
        name: "UserProfileView",
        component: () => import("./views/UserProfileView.vue"),
        meta: {
          protected: true,
        },
      },
      {
        path: ":id/posts",
        name: "UserPostView",
        component: () => import("./views/UserPostView.vue"),
        meta: {
          protected: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.protected === false) {
    next();
  } else {
    const isAuthenicated = localStorage.getItem("isAuthenicated") === "true";
    if (isAuthenicated === false) {
      next("/");
    } else {
      next();
    }
  }
});

export default router;
