import { proxy } from "valtio";

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Valtio implementation
interface Store {
  todos: Todo[];
  newTodo: string;
  addTodo: () => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

const store = proxy<Store>({
  todos: [],
  newTodo: "",
  toggleTodo: (id: number) => {
    store.todos = toggleTodo(store.todos, id);
  },
  updateTodo: (id: number, text: string) => {
    store.todos = updateTodo(store.todos, id, text);
  },
  removeTodo: (id: number) => {
    store.todos = removeTodo(store.todos, id);
  },
  addTodo: () => {
    store.todos = addTodo(store.todos, store.newTodo);
    store.newTodo = "";
  },
});

export default store;
