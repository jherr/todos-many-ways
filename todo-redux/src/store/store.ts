import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  SET_NEWTODO,
  SET_TODOS,
  ActionTypes,
} from "./actions";
import { Store } from "./types";

function todoReducer(
  state: Store = {
    todos: [],
    newTodo: "",
  },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case SET_NEWTODO:
      return {
        ...state,
        newTodo: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) => ({
          ...t,
          text: t.id === action.payload.id ? action.payload.text : t.text,
        })),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) => ({
          ...t,
          done: t.id === action.payload ? !t.done : t.done,
        })),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    case ADD_TODO:
      return {
        ...state,
        newTodo: "",
        todos: [
          ...state.todos,
          {
            id: Math.max(0, Math.max(...state.todos.map(({ id }) => id))) + 1,
            text: state.newTodo,
            done: false,
          },
        ],
      };
    default:
      return state;
  }
}

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
