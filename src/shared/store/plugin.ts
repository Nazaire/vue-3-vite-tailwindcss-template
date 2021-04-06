import { App } from "vue";
import store from "@/store";

export default {
  install: (app: App, options = {}) => {
    app.config.globalProperties.$store = store;
  },
};
