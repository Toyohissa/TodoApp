<script setup lang="ts">
import { ref } from "vue";
import Todo from "./components/Todo.vue";
import { useTodoStore } from "./pinia/todo.pinia";
const useTodo = useTodoStore();
const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    useTodo.addTodo({
      content: newTodo.value,
      done: false,
      editing: false,
    });
    newTodo.value = "";
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-start pt-5">
    <div
      class="flex shadow-2xl shadow-green-600 items-start justify-center border p-5 rounded-md w-[500px] h-[500px] overflow-scroll"
    >
      <div class="flex flex-col items-center gap-3">
        <h1 class="text-green-600 text-5xl">Todos</h1>

        <input
          v-model="newTodo"
          class="rounded-md border border-green-600 px-4 py-2 cursor-pointer hover:scale-110 transition-all outline-none"
          type="text"
          @keyup.enter="addTodo"
          placeholder="Add todo"
          name=""
          id=""
        />
        <div>
          <Todo></Todo>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
