import { atom } from "jotai";

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

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

// Atoms
export const todosAtom = atom<Todo[]>([]);

export const newTodoAtom = atom<string>("");

export const toggleTodoAtom = atom(
  () => "",
  (get, set, id: number) => {
    set(todosAtom, toggleTodo(get(todosAtom), id));
  }
);

export const updateTodoAtom = atom(
  () => "",
  (get, set, { id, text }: { id: number; text: string }) => {
    set(todosAtom, updateTodo(get(todosAtom), id, text));
  }
);

export const removeTodoAtom = atom(
  () => "",
  (get, set, id: number) => {
    set(todosAtom, removeTodo(get(todosAtom), id));
  }
);

export const addTodoAtom = atom(
  () => "",
  (get, set) => {
    set(todosAtom, addTodo(get(todosAtom), get(newTodoAtom)));
    set(newTodoAtom, "");
  }
);
