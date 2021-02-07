import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useProxy } from "valtio";

import store from "../store";

function TodoAdd() {
  const snapshot = useProxy(store);

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={snapshot.newTodo}
        onChange={(evt) => (store.newTodo = evt.target.value)}
        placeholder="New todo"
      />
      <Button
        onClick={() => {
          store.todos.push({
            id: Math.max(0, Math.max(...store.todos.map(({ id }) => id))) + 1,
            text: store.newTodo,
            done: false,
          });
          store.newTodo = "";
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;
