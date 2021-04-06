import { createApp } from "vue";
import App from "./interface/App.root.vue";
import router from "@/router";
import store from "@/store/plugin";
import VueAnimXyz from "@animxyz/vue3";
import vClickOutside from "@/directives/v-click-outside";
import Button from "@/components/Button.vue";
import Spinner from "@/components/Spinner.vue";

// CSS
import "@/css/index.css";
import "@animxyz/core";

const app = createApp(App);

// Vue Router
app.use(router);

// Register plugins
app.use(store);
app.use(VueAnimXyz);
// app.use(service);

// v-click-outside directive
app.directive("clickOutside", vClickOutside);

// Global components
app.component("Button", Button);
app.component("Spinner", Spinner);

app.mount("#app");
