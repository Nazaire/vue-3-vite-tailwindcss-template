import { PagesRoutes } from "./pages/pages.routes";
import Home from "./Home.page.vue";
import { NestedRouterExampleRoutes } from "./nested-router-example/nested-router-example.routes";

// const NestedRoute = () => import("./nested/nested.index.vue");

export const AppRoutes = [
  // UserHome will be rendered inside User's <router-view>
  // when /user/:id is matched
  { path: "", redirect: "/home" },

  { path: "/home", component: Home },

  // Unwrap all pages routes
  NestedRouterExampleRoutes,
  ...PagesRoutes,
];
