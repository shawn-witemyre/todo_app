import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "play magic the gathering", isFav: false },
      { id: 2, title: "play warhammer 40k", isFav: false },
    ],
  }),
});
