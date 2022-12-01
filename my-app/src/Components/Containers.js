import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import '../Style/Containers.css'

export default function Containers() {
  return (
    
    <Grid h="310px" templateColumns="repeat(4, 1fr)" gap={4}>
      <GridItem  borderRadius='20px' colSpan={1} bg='#EC7A7A'>
      <FontAwesomeIcon icon={faCircleDollarToSlot} width='90px' fontSize='56px' color="#FFFFFF" className="icon-container"/>
      </GridItem>
      
      <GridItem  borderRadius='20px' bg='#7A85EC' />
      <GridItem borderRadius='20px' bg="#65D5AC" />
    </Grid>
    
  );
}
