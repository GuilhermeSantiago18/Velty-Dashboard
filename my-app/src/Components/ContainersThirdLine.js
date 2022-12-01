import { Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Vector4 from "../Images/Svg/Vector4.svg";
import '../Style/ContainersThirdLine.css';

export default function ContainersThirdLine() {
  return (
    <Grid h="196px" templateColumns="repeat(4, 1fr)" gap={4}>
    <GridItem borderRadius="20px" bg="#FFFFFF">
        <div className="containers-third" borderRadius='50%'>
          <Image
            src={Vector4}
            width="16px"
            marginLeft="20px"
            position="absolute"
            marginTop='13px'
          ></Image>
        </div>
        <Text className="text-number-container-third">R$ 312.321</Text>
        <Text className="text-container-third">Cotações Realizadas</Text>
        <Text className="number-final-third">+ 15,3% (+223)</Text>
        </GridItem>
    <GridItem borderRadius="20px" bg="#FFFFFF" />
    <GridItem borderRadius="20px" bg="#FFFFFF" />
    <GridItem borderRadius="20px" bg="#FFFFFF" />
  </Grid>
  )
}
