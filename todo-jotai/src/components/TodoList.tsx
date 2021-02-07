import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { Todo, todosAtom } from "../store";

function TodoListItems() {
  const [todos, todosSet] = useAtom(todosAtom);
  return (
    <>
      {todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            onClick={() => {
              todosSet((tl) =>
                tl.map((t) => ({
                  ...t,
                  done: t.id === todo.id ? !t.done : t.done,
                }))
              );
            }}
            checked={todo.done}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => {
              todosSet((tl) =>
                tl.map((t) => ({
                  ...t,
                  text: t.id === todo.id ? evt.target.value : t.text,
                }))
              );
            }}
          />
          <Button
            onClick={() => {
              todosSet((tl) => tl.filter((t) => t.id !== todo.id));
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
