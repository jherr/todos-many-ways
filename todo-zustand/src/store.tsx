import create from "zustand";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Store = {
  todos: Todo[];
  newTodo: string;
  setTodos: (todos: Todo[]) => void;
  addTodo: () => void;
  setText: (id: number, text: string) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
  setNewTodo: (newTodo: string) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    todos: [],
    newTodo: "",
    setTodos: (todos: Todo[]) =>
      set((state) => ({
        ...state,
        todos,
      })),
    remove: (id: number) =>
      set((state) => ({
        ...state,
        todos: state.todos.filter((t) => t.id !== id),
      })),
    setText: (id: number, text: string) =>
      set((state) => ({
        ...state,
        todos: state.todos.map((t) => ({
          ...t,
          text: t.id === id ? text : t.text,
        })),
      })),
    toggle: (id: number) =>
      set((state) => ({
        ...state,
        todos: state.todos.map((t) => ({
          ...t,
          done: t.id === id ? !t.done : t.done,
        })),
      })),
    setNewTodo: (newTodo: string) =>
      set((state) => ({
        ...state,
        newTodo,
      })),
    addTodo: () =>
      set((state) => ({
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.max(0, Math.max(...state.todos.map(({ id }) => id))) + 1,
            text: state.newTodo,
            done: false,
          },
        ],
        newTodo: "",
      })),
  })
);

export default useStore;
