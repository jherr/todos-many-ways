import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useAtom } from "jotai";

import {
  Todo,
  todosAtom,
  updateTodoAtom,
  removeTodoAtom,
  toggleTodoAtom,
} from "../store";

function TodoListItems() {
  const [todos] = useAtom(todosAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, removeTodo] = useAtom(removeTodoAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);

  return (
    <>
      {todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => toggleTodo(todo.id)} checked={todo.done} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) =>
              updateTodo({ id: todo.id, text: evt.target.value })
            }
          />
          <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
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
