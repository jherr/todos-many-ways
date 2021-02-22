import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import {
  useAppSelector,
  useAppDispatch,
  update,
  remove,
  toggle,
} from "../store";

function TodoListItems() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <>
      {todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            checked={todo.done}
            onClick={() => dispatch(toggle(todo.id))}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) =>
              dispatch(update({ id: todo.id, text: evt.target.value }))
            }
          />
          <Button onClick={() => dispatch(remove(todo.id))}>Delete</Button>
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
