import { makeAutoObservable } from "mobx";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

class Todos {
  todos: Todo[] = [];
  newTodo: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    this.todos = [
      ...this.todos,
      {
        id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
        text: this.newTodo,
        done: false,
      },
    ];
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
