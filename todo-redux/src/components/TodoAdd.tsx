import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { Store } from "../store/types";
import { setNewTodo, addTodo } from "../store/actions";

function TodoAdd() {
  const text = useSelector((state: Store) => state.newTodo);
  const dispatch = useDispatch();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={text}
        onChange={(evt) => dispatch(setNewTodo(evt.target.value))}
        placeholder="New todo"
      />
      <Button
        onClick={() => {
          dispatch(addTodo());
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;
