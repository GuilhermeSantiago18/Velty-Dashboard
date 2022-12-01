import { Center, Grid, Input } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faMoon,
  faBell,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <Grid
      bg="#FFFFFF"
      height='61px'
      borderRadius="30px"
      w="422px"
      marginTop="65px"
      templateColumns="repeat(5, 1fr)"
      gap={5}
    >
     
      <Input
         marginLeft='10px'
        placeholder="Busca"
        w="214px"
        borderRadius="49px"
        size="md"
        type="text"
        marginTop="10px"
      >
      </Input>
      <Center gap={7}>
      <FontAwesomeIcon icon={faBell} color="#A3AED0"/>
      <FontAwesomeIcon icon={faMoon} fontSize="22px" color="#A3AED0" marginTop="10px" />
      <FontAwesomeIcon icon={faCircleExclamation} color="#A3AED0" marginTop="10px"/>
      
      </Center>
    </Grid>
  );
}
