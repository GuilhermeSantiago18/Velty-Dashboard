import { Grid, GridItem, Center, Image } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header";
import Filterdata from "../Components/Filterdata";
import Search from "../Components/Search";
import Pex from "../Images/Pex.jpg";
import Containers from "../Components/Containers";

export default function Home() {
  return (
    <Grid
      h="800px"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={4}
    >
      <GridItem colSpan="2" rowSpan="5" bg='red'>
        <Image src={Pex} alt="Dan Abramov" />
      </GridItem>
      <GridItem colSpan="8" bg="papayawhip">
        <Header />
      </GridItem>
      <GridItem colSpan="2" bg="papayawhip">
        <Center h="80px">
          <Search />
        </Center>
      </GridItem>
      <GridItem mt='20' colSpan="10">
        <Containers />
      </GridItem>
    </Grid>
  );
}
