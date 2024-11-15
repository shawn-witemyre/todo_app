import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFavorite: false },
      { id: 2, title: "play Gloomhaven", isFavorite: true },
    ],
  }),
  getters: {
    favorite() {
      return this.tasks.filter((t) => t.isFavorite);
    },
    favoriteCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFavorite ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
});
