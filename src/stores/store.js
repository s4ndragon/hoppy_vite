import { defineStore } from "pinia";
import state from "./state";
import actions from "./actions";
import getters from "./getters";
// import actions from "./actions";
export const useStore = defineStore({
    id: "useStore",
    // state: () => ({
    //   counter: 0,
    // }),
    state: () => state,
    getters: getters,
    // {
    //   doubleCount: (state) => state.counter * 2,
    // },
    actions: actions,
});
