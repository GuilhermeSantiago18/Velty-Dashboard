import { Grid, GridItem, Center, Image } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header";
import Filterdata from "../Components/Filterdata";
import Search from "../Components/Search";
import Containers from "../Components/Containers";
import ContainersSecondLine from "../Components/ContainersSecondLine";
import ContainersThirdLine from "../Components/ContainersThirdLine";
import ContainersFooter from "../Components/ContainersFooter";
import Sidebar from "../Components/Sidebar";

export default function Home() {
  return (
    <Grid
      bg='#F4F7FE'
      padding='0 1% 0 0'
      h="1600px"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={4}
    >
      <GridItem colSpan="2" rowSpan="5" bg="#FFFFFF">
        <Sidebar />
      </GridItem>
      <GridItem marginTop="49px" colSpan="7">
        <Header />
        <Filterdata />
      </GridItem>
      <GridItem colSpan="3" marginTop="55px">
        <Center h="80px">
          <Search />
        </Center>
      </GridItem>
      <GridItem mt="20" colSpan="10">
        <Containers />
      </GridItem>
      <GridItem mt="2" colSpan="10">
        <ContainersSecondLine />
      </GridItem>
      <GridItem mt="2" colSpan="10">
        <ContainersThirdLine />
      </GridItem>
      <GridItem mt="2" marginBottom="400px" colSpan="10">
        <ContainersFooter />
      </GridItem>
    </Grid>
  );
}
