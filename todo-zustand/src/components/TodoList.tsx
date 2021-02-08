import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";

import useStore from "../store";

function TodoListItems() {
  const store = useStore((state) => state);

  return (
    <>
      {store.todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            onClick={(evt) => store.toggle(todo.id)}
            checked={todo.done}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => store.setText(todo.id, evt.target.value)}
          />
          <Button onClick={() => store.remove(todo.id)}>Delete</Button>
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
