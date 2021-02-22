import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch, setNewTodo, addTodo } from "../store";

function TodoAdd() {
  const newTodo = useAppSelector((state) => state.newTodo);
  const dispatch = useAppDispatch();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={(evt) => dispatch(setNewTodo(evt.target.value))}
      />
      <Button onClick={() => dispatch(addTodo())}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
