import { defineStore } from "pinia";
import type { ITodoState } from "../ts/pinia/todo.types";

export const useTodoStore = defineStore("todo", {
  state: (): { todos: ITodoState[] } => ({
    todos: [],
  }),
  getters: {
    getAllTodos: (state) => state.todos,
  },
  actions: {
    addTodo(todo: ITodoState) {
      this.todos.push(todo);
    },
    deleteTodo(index: number) {
      this.todos.splice(index, 1);
    },
    toggleDone(index: number) {
      this.todos[index].done = !this.todos[index].done;
    },
  },
});
