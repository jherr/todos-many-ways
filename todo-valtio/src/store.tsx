import { proxy } from "valtio";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface Store {
  todos: Todo[];
  newTodo: string;
  addTodo: () => void;
}

const store = proxy<Store>({
  todos: [],
  newTodo: "",
  addTodo: () => {
    store.todos.push({
      id: Math.max(0, Math.max(...store.todos.map(({ id }) => id))) + 1,
      text: store.newTodo,
      done: false,
    });
    store.newTodo = "";
  },
});

export default store;
