import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  PayloadAction,
  configureStore,
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

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

const addTodoToList = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Redux toolkit implementation
interface State {
  todos: Todo[];
  newTodo: string;
}
const initialState: State = {
  todos: [],
  newTodo: "",
};

export const addTodo = createAction("addTodo");
export const setNewTodo = createAction<string>("setNewTodo");
export const update = createAction<{ id: number; text: string }>("update");
export const toggle = createAction<number>("toggle");
export const remove = createAction<number>("remove");

export const load = createAsyncThunk("load", async (url: string) => {
  const response = await fetch(url);
  return await response.json();
});

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(load.fulfilled, (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    })
    .addCase(setNewTodo, (state, action) => {
      state.newTodo = action.payload;
    })
    .addCase(addTodo, (state) => {
      state.todos = addTodoToList(state.todos, state.newTodo);
      state.newTodo = "";
    })
    .addCase(update, (state, action) => {
      state.todos = updateTodo(
        state.todos,
        action.payload.id,
        action.payload.text
      );
    })
    .addCase(remove, (state, action) => {
      state.todos = removeTodo(state.todos, action.payload);
    })
    .addCase(toggle, (state, action) => {
      state.todos = toggleTodo(state.todos, action.payload);
    });
});

const store = configureStore({
  reducer,
  devTools: true,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export default store;
