<template>
  <main>
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm></TaskForm>
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favorite'">Favorite tasks</button>
    </nav>

    <div class="loading" v-if="isLoading">Loading tasks...</div>

    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favorite'">
      <p>You have {{ favoriteCount }} tasks in your favorite list</p>
      <div v-for="task in favorite" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="reset-button">
      <button @click="taskStore.$reset">Reset</button>
    </div>
  </main>
</template>
<script setup>
import TaskForm from "./components/TaskForm.vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const taskStore = useTaskStore();

const { tasks, isLoading, favorite, totalCount, favoriteCount } =
  storeToRefs(taskStore);

taskStore.getTasks();

const filter = ref("all");
</script>

<style scoped>
header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header img {
  max-width: 60px;
}
header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
}

.new-task-form {
  display: flex;
  justify-content: center;
}

nav {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

nav button {
  margin: 10px 10px;
}

.task-list {
  max-width: 640px;
  margin: 20px auto;
}

.reset-button {
  display: flex;
  justify-content: center;
}
</style>
