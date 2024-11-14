<template>
  <main>
    <header>
      <h1>Todo App</h1>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
    </header>
  </main>

  <div class="task-list">
    <div v-for="task in taskStore.tasks" :key="task.id">
      <TaskDetail :task="task" />
    </div>
  </div>
</template>
<script setup>
import TaskDetail from "./components/TaskDetail.vue";
import { useTaskStore } from "./stores/TaskStore";

const taskStore = useTaskStore();
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

.task-list {
  max-width: 640px;
  margin: 20px auto;
}
</style>
