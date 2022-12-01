import { Center, Grid, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Pex from "../Images/Pex.jpg";
import { faHouse, faCartShopping, faSquarePollVertical, faChartBar } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <Grid>
      <Image marginLeft="34px" marginTop="34.75px" src={Pex} alt="Pex Image" />
      <Center marginRight='34px' gap={5}>
      <FontAwesomeIcon icon={faHouse} />
      <Text>Dashboard</Text>
      </Center>
      <Center marginRight='34px' gap={5}>
      <FontAwesomeIcon icon={faCartShopping}  />
      <Text>Vendas</Text>
      </Center>
      <Center marginRight='34px' gap={5}>
      <FontAwesomeIcon icon={faSquarePollVertical} />
      <Text>Relatórios</Text>
      </Center>
      <Center marginRight='34px' gap={5}>
      <FontAwesomeIcon icon={faChartBar} />
      <Text>Lojas Parceiras</Text>
      </Center>
    </Grid>
  );
}
