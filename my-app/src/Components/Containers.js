import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollar } from "@fortawesome/free-solid-svg-icons";

export default function Containers() {
  return (
    
    <Grid h="310px" templateColumns="repeat(4, 1fr)" gap={4}>
      <GridItem  borderRadius='20px' colSpan={1} bg='#EC7A7A'>
      <FontAwesomeIcon icon={faCircleDollar} />
      </GridItem>
      
      <GridItem  borderRadius='20px' bg='#7A85EC' />
      <GridItem borderRadius='20px' bg="#65D5AC" />
    </Grid>
    
  );
}
