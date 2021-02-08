import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";

import {
  Todo,
  useTodoContext,
  toggleTodo,
  removeTodo,
  updateTodo,
} from "../store";

function TodoListItems() {
  const [todos, todosSet] = useTodoContext();
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

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
