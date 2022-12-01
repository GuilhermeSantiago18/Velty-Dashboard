import { Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Pex from "../Images/Pex.jpg";
import {
  faHouse,
  faCartShopping,
  faSquarePollVertical,
  faChartGantt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <Grid templateRows="repeat(30, 1fr)" height='1152px'>
      <Image
        marginLeft="34px"
        marginTop="34.75px"
        src={Pex}
        alt="Pex Image"
        
      />
      <GridItem marginRight="34px" gap={4} rowSpan={2} display='flex' marginTop='50px' marginLeft='40px'>
        <FontAwesomeIcon icon={faHouse} />
        <Text>Dashboard</Text>
      </GridItem>
      <GridItem marginRight="34px" gap={4} rowSpan={2} display='flex' marginTop='50px' marginLeft='40px'>
        <FontAwesomeIcon icon={faCartShopping} />
        <Text>Vendas</Text>
      </GridItem>
      <GridItem marginRight="34px" gap={4} rowSpan={2} display='flex' marginTop='50px' marginLeft='40px'>
        <FontAwesomeIcon icon={faSquarePollVertical} />
        <Text>Relatórios</Text>
      </GridItem>
      <GridItem marginRight="34px" gap={4} rowSpan={2} display='flex' marginTop='50px' marginLeft='40px'>
        <FontAwesomeIcon icon={faChartGantt} />
        <Text>Lojas Parceiras</Text>
      </GridItem>
      <GridItem marginRight="34px" gap={4} rowSpan={2} display='flex' marginTop='50px' marginLeft='40px'>
        <FontAwesomeIcon icon={faUser} />
        <Text>Clientes</Text>
      </GridItem>
    </Grid>
  );
}
