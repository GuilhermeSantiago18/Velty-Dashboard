import { Grid, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function Filterdata() {
  return (
    <Grid
      height="61px"
      bg="#FFFFFF"
      borderRadius="30px"
      w="644px"
      marginTop="22px"
      templateColumns="repeat(3, 1fr)"
      gap={5}
    >
      <Text marginLeft="30px" marginTop="16px" className="filter-data">
        {" "}
        Filtrar por data
      </Text>
      <Input
        className="input-filter-data"
        w="214px"
        borderRadius="49px"
        placeholder="Data inicial"
        size="md"
        type="text"
        marginTop="10px"
      />
      <Input
        className="input-filter-data"
        w="214px"
        borderRadius="49px"
        placeholder="Data final"
        size="md"
        type="text"
        marginTop="10px"
        marginRight="16px"
      />
    </Grid>
  );
}
