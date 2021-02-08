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
            onClick={() => (todo.done = !todo.done)}
            checked={todo.done}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => (todo.text = evt.target.value)}
          />
          <Button
            onClick={() => {
              store.removeTodo(todo.id);
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
