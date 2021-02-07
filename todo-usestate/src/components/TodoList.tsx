import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";

import { Todo, TodosType, SetTodosType } from "../store";

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
            onClick={(evt) => {
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
