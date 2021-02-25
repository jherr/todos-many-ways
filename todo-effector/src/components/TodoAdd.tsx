import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useStore } from "effector-react";

import $store, { setNewTodo, addTodo } from "../store";

function TodoAdd() {
  const store = useStore($store);

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={store.newTodo}
        onChange={(evt) => setNewTodo(evt.target.value)}
      />
      <Button onClick={() => addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
