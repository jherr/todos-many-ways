import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";

import {
  Todo,
  TodosType,
  SetTodosType,
  toggleTodo,
  removeTodo,
  updateTodo,
} from "../store";

function TodoListItems({
  todos,
  todosSet,
}: {
  todos: TodosType;
  todosSet: SetTodosType;
}) {
  return (
    <>
      {todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            onClick={() => {
              todosSet((tl) => toggleTodo(tl, todo.id));
            }}
            checked={todo.done}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => {
              todosSet((tl) => updateTodo(tl, todo.id, evt.target.value));
            }}
          />
          <Button
            onClick={() => {
              todosSet((tl) => removeTodo(tl, todo.id));
            }}
          >
            Delete
          </Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList({
  todos,
  todosSet,
}: {
  todos: TodosType;
  todosSet: SetTodosType;
}) {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems todos={todos} todosSet={todosSet} />
    </>
  );
}

export default TodoList;
