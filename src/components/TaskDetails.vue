<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)"
        >delete
      </i>

      <i class="material-icons" @click="taskStore.toggleFavorite(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../stores/TaskStore";

const props = defineProps(["task"]);

const taskStore = useTaskStore();
</script>

<style scoped>
.task {
  padding: 6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task i {
  cursor: pointer;
  color: #bbb;
}
</style>
