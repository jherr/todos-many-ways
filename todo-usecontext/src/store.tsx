import * as React from "react";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const useTodos = (initial: Todo[]) => React.useState<Todo[]>(initial);

const TodoContext = React.createContext<ReturnType<typeof useTodos> | null>(
  null
);

export const useTodoContext = () => React.useContext(TodoContext)!;

export function TodoProvider({ children }: { children: React.ReactNode }) {
  return (
    <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
  );
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];
