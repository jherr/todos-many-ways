import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useProxy } from "valtio";

import store, { Todo } from "../store";

function TodoListItems() {
  const snapshot = useProxy(store);
  return (
    <>
      {snapshot.todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            onClick={() => store.toggleTodo(todo.id)}
            checked={todo.done}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => store.updateTodo(todo.id, evt.target.value)}
          />
          <Button onClick={() => store.removeTodo(todo.id)}>Delete</Button>
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
