import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import '../Style/ContainersSecondLine.css'

export default function ContainersSecondLine() {
  return (
    <Grid h="95px" templateColumns="repeat(6, 1fr)" gap={4}>
      <GridItem borderRadius="20px" bg="#FFFFFF" >
        <Text className="text">Clientes ativos</Text>
        <Text className="number">3.312</Text>
        <Text className="numberFinal">+ 2,6% (+12)</Text>
      </GridItem>
      <GridItem borderRadius="20px" bg="#FFFFFF" >
        <Text className="text">Novos clientes</Text>
        <Text className="number">12</Text>
        <Text className="numberFinal">+ 15,3% (+2)</Text>
      </GridItem>
      <GridItem borderRadius="20px" bg="#FFFFFF" >
        <Text className="text">Clientes adicionados</Text>
        <Text className="number">42</Text>
        <Text className="numberFinal">+ 42,6% (+8)</Text>
      </GridItem>
      <GridItem borderRadius="20px" bg="#FFFFFF" >
        <Text className="text">LTV</Text>
        <Text className="number">R$ 142,32</Text>
        <Text className="ltv">- 22,6% (+R$ 12,20)</Text>
      </GridItem>
      <GridItem borderRadius="20px" bg="#FFFFFF" >
        <Text className="text">Turnover</Text>
        <Text className="number">24,3%</Text>
        <Text className="numberFinal">+ 42,6% (+3)</Text>
      </GridItem>
      <GridItem borderRadius="20px" bg="#FFFFFF" >
        <Text className="text">Turnover recuperado</Text>
        <Text className="number">54,42%</Text>
        <Text className="numberFinal">+ 32,6% (+6)</Text>
      </GridItem>
    </Grid>
  );
}
