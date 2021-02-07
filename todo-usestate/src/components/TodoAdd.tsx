import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

import { SetTodosType, addTodo } from "../store";

function TodoAdd({ todosSet }: { todosSet: SetTodosType }) {
  const [text, textSet] = React.useState("");

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={text}
        onChange={(evt) => textSet(evt.target.value)}
        placeholder="New todo"
      />
      <Button
        onClick={() => {
          todosSet((tl) => addTodo(tl, text));
          textSet("");
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;
