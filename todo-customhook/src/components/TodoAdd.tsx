import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

import { useTodoContext } from "../store";

function TodoAdd() {
  const { newTodo, setNewTodo, addTodo } = useTodoContext();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={newTodo}
        onChange={(evt) => setNewTodo(evt.target.value)}
        placeholder="New todo"
      />
      <Button onClick={() => addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
