import { atom } from "jotai";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const todosAtom = atom<Todo[]>([]);
export const newTodoAtom = atom<string>("");
export const addTodoAtom = atom(
  () => "",
  (get, set) => {
    const todos = get(todosAtom);
    set(todosAtom, [
      ...todos,
      {
        id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
        text: get(newTodoAtom),
        done: false,
      },
    ]);
    set(newTodoAtom, "");
  }
);
