import TestPage from "./Test.page.vue";

export const PagesRoutes = [
  { path: "/pages", redirect: "/pages/test" },
  { path: "/pages/test", component: TestPage },
];
