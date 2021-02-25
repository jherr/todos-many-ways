import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { getTodos } from "../store";

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button
        onClick={() =>
          getTodos(
            "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
          )
        }
      >
        Load
      </Button>
    </Grid>
  );
}

export default TopBar;
