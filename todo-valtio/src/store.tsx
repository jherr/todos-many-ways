import { proxy } from "valtio";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface Store {
  todos: Todo[];
  newTodo: string;
}

const store = proxy<Store>({
  todos: [],
  newTodo: "",
});

export default store;
