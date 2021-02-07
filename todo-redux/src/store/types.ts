export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface Store {
  todos: Todo[];
  newTodo: string;
}
