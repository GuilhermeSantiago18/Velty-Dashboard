import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Pex from "../Images/Pex.jpg";
import {
  faHouse,
  faCartShopping,
  faSquarePollVertical,
  faUser,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import "../Style/Sidebar.css";

export default function Sidebar() {
  return (
    <Grid templateRows="repeat(30, 1fr)" height="1152px">
      <Image marginLeft="34px" marginTop="34.75px" src={Pex} alt="Pex Image" />
      <GridItem
        marginRight="34px"
        gap={4}
        rowSpan={2}
        display="flex"
        marginTop="50px"
        marginLeft="40px"
      >
        <FontAwesomeIcon icon={faHouse} color="#4318FF" />
        <Text className="single-sidebar">Dashboard</Text>
      </GridItem>
      <GridItem
        marginRight="34px"
        gap={4}
        rowSpan={2}
        display="flex"
        marginTop="50px"
        marginLeft="40px"
      >
        <FontAwesomeIcon icon={faCartShopping} color="#A3AED0" />
        <Text className="all-sidebar">Vendas</Text>
      </GridItem>
      <GridItem
        marginRight="34px"
        gap={4}
        rowSpan={2}
        display="flex"
        marginTop="50px"
        marginLeft="40px"
      >
        <FontAwesomeIcon icon={faSquarePollVertical} color="#A3AED0" />
        <Text className="all-sidebar">Relatórios</Text>
      </GridItem>
      <GridItem
        marginRight="34px"
        gap={4}
        rowSpan={2}
        display="flex"
        marginTop="50px"
        marginLeft="40px"
      >
        <FontAwesomeIcon icon={faChartBar} color="#A3AED0" />
        <Text className="all-sidebar">Lojas Parceiras</Text>
      </GridItem>
      <GridItem
        marginRight="34px"
        gap={4}
        rowSpan={2}
        display="flex"
        marginTop="50px"
        marginLeft="40px"
      >
        <FontAwesomeIcon icon={faUser} color="#A3AED0" />
        <Text className="all-sidebar">Clientes</Text>
      </GridItem>
    </Grid>
  );
}
