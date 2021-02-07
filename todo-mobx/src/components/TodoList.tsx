import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react";

import store from "../store";

function TodoListItems() {
  return (
    <>
      {store.todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            onClick={(evt) => {
              store.todos = store.todos.map((t) => ({
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
              store.todos = store.todos.map((t) => ({
                ...t,
                text: t.id === todo.id ? evt.target.value : t.text,
              }));
            }}
          />
          <Button
            onClick={() => {
              store.todos = store.todos.filter((t) => t.id !== todo.id);
            }}
          >
            Delete
          </Button>
        </Flex>
      ))}
    </>
  );
}

const ObservedTodoListItems = observer(TodoListItems);

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <ObservedTodoListItems />
    </>
  );
}

export default TodoList;
