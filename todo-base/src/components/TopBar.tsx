import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

function TopBar() {
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button>Load</Button>
    </Grid>
  );
}

export default TopBar;
