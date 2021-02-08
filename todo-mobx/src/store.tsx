import { makeAutoObservable } from "mobx";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

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

class Todos {
  todos: Todo[] = [];
  newTodo: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  removeTodo(id: number) {
    this.todos = removeTodo(this.todos, id);
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo);
    this.newTodo = "";
  }

  load(url: string) {
    fetch(url)
      .then((resp) => resp.json())
      .then((tds: Todo[]) => (store.todos = tds));
  }
}

const store = new Todos();

export default store;
