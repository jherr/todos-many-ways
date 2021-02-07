import * as React from "react";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const useTodos = (initial: Todo[]) => React.useState<Todo[]>(initial);
export type TodosType = ReturnType<typeof useTodos>[0];
export type SetTodosType = ReturnType<typeof useTodos>[1];

export function addTodo(todos: Todo[], text: string) {
  return [
    ...todos,
    {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      text,
      done: false,
    },
  ];
}
