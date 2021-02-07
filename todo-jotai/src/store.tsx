import { atom } from "jotai";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const todosAtom = atom<Todo[]>([]);
export const newTodoAtom = atom<string>("");
