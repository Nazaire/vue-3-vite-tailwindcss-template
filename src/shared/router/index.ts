import { createRouter, createWebHashHistory } from "vue-router";
import { AppRoutes } from "~/interface/app.routes";

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: AppRoutes, // short for `routes: routes`
});

// Router transition based on path depth
router.afterEach((to, from) => {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;

  // if toDepth < fromDepth
  //     fade out to right, fade in from left
  // else
  //     fade out to left, fade in from right

  if (toDepth < fromDepth) {
    from.meta.xyz = "fade out-right-2 duration-2";
    to.meta.xyz = "fade in-left-2 out-left-2 duration-2";
  } else {
    from.meta.xyz = "fade out-left-2 duration-2";
    to.meta.xyz = "fade in-right-2 out-left-2 duration-2";
  }
});

export default router;
