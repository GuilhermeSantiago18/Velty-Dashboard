import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function Containers() {
  return (
    <Grid h="310px" templateColumns="repeat(4, 1fr)" gap={4}>
      <GridItem  borderRadius='20px' colSpan={1} bg='#EC7A7A' />
      <GridItem  borderRadius='20px' bg='#7A85EC' />
      <GridItem borderRadius='20px' bg="#65D5AC" />
    </Grid>
  );
}
