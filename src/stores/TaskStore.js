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
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    },
    toggleFavorite(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isFavorite = !task.isFavorite;
    },
  },
});
