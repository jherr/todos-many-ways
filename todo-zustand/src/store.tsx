import create from "zustand";

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

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

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Zustand implementation
type Store = {
  todos: Todo[];
  newTodo: string;
  setTodos: (todos: Todo[]) => void;
  addTodo: () => void;
  updateTodo: (id: number, text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
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
    removeTodo: (id: number) =>
      set((state) => ({
        ...state,
        todos: removeTodo(state.todos, id),
      })),
    updateTodo: (id: number, text: string) =>
      set((state) => ({
        ...state,
        todos: updateTodo(state.todos, id, text),
      })),
    toggleTodo: (id: number) =>
      set((state) => ({
        ...state,
        todos: toggleTodo(state.todos, id),
      })),
    setNewTodo: (newTodo: string) =>
      set((state) => ({
        ...state,
        newTodo,
      })),
    addTodo: () =>
      set((state) => ({
        ...state,
        todos: addTodo(state.todos, state.newTodo),
        newTodo: "",
      })),
  })
);

export default useStore;
