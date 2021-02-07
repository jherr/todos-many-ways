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
            onClick={(evt) => {
              store.todos = snapshot.todos.map((t) => ({
                ...t,
                done: t.id === todo.id ? !t.done : t.done,
              }));
            }}
            checked={todo.done}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => {
              store.todos = snapshot.todos.map((t) => ({
                ...t,
                text: t.id === todo.id ? evt.target.value : t.text,
              }));
            }}
          />
          <Button
            onClick={() => {
              store.todos = snapshot.todos.filter((t) => t.id !== todo.id);
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
