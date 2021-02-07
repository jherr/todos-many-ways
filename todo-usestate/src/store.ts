import * as React from "react";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const useTodos = (initial: Todo[]) => React.useState<Todo[]>([]);
export type TodosType = ReturnType<typeof useTodos>[0];
export type SetTodosType = ReturnType<typeof useTodos>[1];
