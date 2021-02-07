import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

import { useTodoContext } from "../store";

function TodoAdd() {
  const [text, textSet] = React.useState("");
  const [, todosSet] = useTodoContext();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={text}
        onChange={(evt) => textSet(evt.target.value)}
        placeholder="New todo"
      />
      <Button
        onClick={() => {
          todosSet((tl) => [
            ...tl,
            {
              id: Math.max(...tl.map(({ id }) => id)) + 1,
              text,
              done: false,
            },
          ]);
          textSet("");
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;
