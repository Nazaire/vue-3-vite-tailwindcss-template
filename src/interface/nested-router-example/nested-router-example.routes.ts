import NestedRouterExampleLayout from "./NestedRouterExample.layout.vue";
import PageOnePage from "./PageOne.page.vue";
import PageTwoPage from "./PageTwo.page.vue";

export const NestedRouterExampleRoutes = {
  path: "/nested-router-example",
  component: NestedRouterExampleLayout,
  children: [
    { path: "", redirect: "/nested-router-example/one" },
    { path: "one", component: PageOnePage },
    { path: "two", component: PageTwoPage },

    // ...other sub routes
  ],
};
