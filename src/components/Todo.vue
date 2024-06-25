<script setup lang="ts">
import { computed, ref } from "vue";
import { useTodoStore } from "../pinia/todo.pinia";

const useTodo = useTodoStore();
const chosenFilter = ref("All");

const todosToRender = computed(() => {
  const doneTodos = useTodo.getAllTodos.filter((todo) => todo.done === true);
  const pendingTodos = useTodo.getAllTodos.filter(
    (todo) => todo.done === false
  );
  if (chosenFilter.value === "All") return useTodo.getAllTodos;

  if (chosenFilter.value === "Done") return doneTodos;
  if (chosenFilter.value === "Pending") return pendingTodos;
  return [];
});

const deleteTodo = (content: string): void => {
  const index = useTodo.todos.findIndex((todo) => todo.content === content);
  if (index !== -1) useTodo.deleteTodo(index);
};

const toggleTodo = (content: string) => {
  const index = useTodo.todos.findIndex((todo) => todo.content === content);
  if (index !== -1) useTodo.toggleDone(index);
};
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex items-center gap-5">
      <h1
        @click="chosenFilter = 'All'"
        :class="chosenFilter === 'All' ? 'text-green-600' : ''"
        class="cursor-pointer hover:scale-110 transition-all"
      >
        All
      </h1>
      <h1
        @click="chosenFilter = 'Done'"
        :class="chosenFilter === 'Done' ? 'text-green-600' : ''"
        class="cursor-pointer hover:scale-110 transition-all"
      >
        Done
      </h1>
      <h1
        @click="chosenFilter = 'Pending'"
        :class="chosenFilter === 'Pending' ? 'text-green-600' : ''"
        class="cursor-pointer hover:scale-110 transition-all"
      >
        Pending
      </h1>
    </div>
    <div
      v-for="todo in todosToRender"
      :key="Math.random()"
      :class="todo.done ? 'bg-green-600 text-white' : ''"
      class="flex items-center w-96 rounded-md justify-between gap-5 border border-green-600 px-4 py-2 cursor-pointer hover:scale-110 transition-all"
    >
      <p>{{ todo.content }}</p>
      <div class="flex items-center justify-between gap-3">
        <div @click="deleteTodo(todo.content)">
          <i class="fa-solid fa-trash" :style="{ color: '#ff0000' }"></i>
        </div>
        <div @click="toggleTodo(todo.content)">
          <i
            v-if="!todo.done"
            class="fa-solid fa-check"
            :style="{ color: '#16a34a' }"
          ></i>
          <i
            v-if="todo.done"
            class="fa-solid fa-xmark"
            style="color: #ff0000"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
