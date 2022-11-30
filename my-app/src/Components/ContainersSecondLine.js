import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export default function ContainersSecondLine() {
  return (
    <Grid h="95px" templateColumns="repeat(6, 1fr)" gap={4}>
      <GridItem borderRadius="20px" bg="#FFFFFF" />
      <GridItem borderRadius="20px" bg="#FFFFFF" />
      <GridItem borderRadius="20px" bg="#FFFFFF" />
      <GridItem borderRadius="20px" bg="#FFFFFF" />
      <GridItem borderRadius="20px" bg="#FFFFFF" />
      <GridItem borderRadius="20px" bg="#FFFFFF" />
    </Grid>
  );
}
