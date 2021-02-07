import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { newTodoAtom, todosAtom } from "../store";

function TodoAdd() {
  const [text, textSet] = useAtom(newTodoAtom);
  const [, todosSet] = useAtom(todosAtom);

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
              id: Math.max(0, Math.max(...tl.map(({ id }) => id))) + 1,
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
