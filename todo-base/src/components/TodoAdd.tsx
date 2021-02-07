import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

function TodoAdd() {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo" />
      <Button>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
