<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Enter new task" v-model="newTask" />
    <button>Add Task</button>
  </form>
</template>

<script setup>
import { useTaskStore } from "../stores/TaskStore";
import { ref } from "vue";

const taskStore = useTaskStore();

const newTask = ref("");

function handleSubmit() {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFavorite: false,
      id: Math.floor(Math.random() * 10000),
    });

    newTask.value = "";
  }
}
</script>
