import { Grid, GridItem, Text, Image } from "@chakra-ui/react";
import React from "react";
import '../Style/Containers.css'
import Shadow from "../Images/Svg/Shadow.svg";
import Vector from "../Images/Svg/Vector.svg";

export default function Containers() {
  return (
    
    <Grid h="310px" templateColumns="repeat(4, 1fr)" gap={4}>
      <GridItem  borderRadius='20px' colSpan={1} bg='#EC7A7A'>
        <div className="containers" borderRadius='50%'>
      <Image src={Vector} width='16px' marginLeft='20px' position='absolute'></Image>
        </div>
        <Text className="text-number-container">R$ 312.321,00</Text>
        <Text className="text-container">Receita Total</Text>
        <div className="line-container" />
        <Text className="second-number">R$ 67,20</Text>
        <Text className="second-text">Média por cliente</Text>
      </GridItem>
      <GridItem  borderRadius='20px' bg='#7A85EC' />
      <GridItem borderRadius='20px' bg="#65D5AC" />
    </Grid>
    
  );
}
