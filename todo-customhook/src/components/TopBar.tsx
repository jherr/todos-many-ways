import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Todo, useTodoContext } from "../store";

function TopBar() {
  const { load } = useTodoContext();
  const onLoad = () => {
    fetch(
      "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
    )
      .then((resp) => resp.json())
      .then((tds: Todo[]) => load(tds));
  };

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  );
}

export default TopBar;
