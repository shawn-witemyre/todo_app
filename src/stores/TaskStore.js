import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    isLoading: false,
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
    async getTasks() {
      this.isLoading = true;
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();

      this.tasks = data;
      this.loading = false;
    },
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
