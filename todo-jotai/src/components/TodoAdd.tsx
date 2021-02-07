import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { newTodoAtom, addTodoAtom } from "../store";

function TodoAdd() {
  const [text, textSet] = useAtom(newTodoAtom);
  const [, addTodo] = useAtom(addTodoAtom);

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={text}
        onChange={(evt) => textSet(evt.target.value)}
        placeholder="New todo"
      />
      <Button onClick={() => addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
