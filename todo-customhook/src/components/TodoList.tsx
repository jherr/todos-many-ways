import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";

import { Todo, useTodoContext } from "../store";

function TodoListItems() {
  const { todos, toggleTodo, updateTodo, removeTodo } = useTodoContext();
  return (
    <>
      {todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => toggleTodo(todo.id)} checked={todo.done} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => updateTodo(todo.id, evt.target.value)}
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
