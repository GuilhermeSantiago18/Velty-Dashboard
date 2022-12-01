import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import '../Style/ContainersSecondLine.css'

export default function ContainersSecondLine() {
  return (
    <Grid h="95px" templateColumns="repeat(6, 1fr)" gap={4}>
      <GridItem borderRadius="20px" bg="#FFFFFF" >
        <Text className="text">Clientes Ativos</Text>
        <Text className="number">3.312</Text>
        <Text className="numberFinal">+ 2,6% (+12)</Text>
      </GridItem>
      <GridItem borderRadius="20px" bg="#FFFFFF" />
      <GridItem borderRadius="20px" bg="#FFFFFF" />
      <GridItem borderRadius="20px" bg="#FFFFFF" />
      <GridItem borderRadius="20px" bg="#FFFFFF" />
      <GridItem borderRadius="20px" bg="#FFFFFF" />
    </Grid>
  );
}
