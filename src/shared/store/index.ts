import { reactive } from "vue";

/**
 * custom store built around the reactive api
 */
const store = {
  state: reactive({
    count: 0,
  }),

  incrementCount(value: number = 1) {
    this.state.count++;
  },
};

export default store;
