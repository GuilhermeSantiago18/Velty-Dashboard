import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ContainerTable from "./ContainerTable";
import ContainerTable2 from "./ContainerTable2";
import ContainerTable3 from "./ContainerTable3";

export default function ContainersFooter() {
  return (
    <Grid h="370px" width="100%" templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem borderRadius="20px" bg="#FFFFFF">
        <ContainerTable />
      </GridItem>
      <GridItem borderRadius="20px" bg="#FFFFFF">
        <ContainerTable2 />
      </GridItem>
      <GridItem borderRadius="20px" bg="#FFFFFF">
        <ContainerTable3 />
      </GridItem>
    </Grid>
  );
}
