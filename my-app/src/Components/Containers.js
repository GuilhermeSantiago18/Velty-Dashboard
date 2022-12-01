import { Grid, GridItem, Text, Image } from "@chakra-ui/react";
import React from "react";
import "../Style/Containers.css";
import Vector from "../Images/Svg/Vector.svg";
import Vector2 from "../Images/Svg/Vector2.svg";
import Vector3 from "../Images/Svg/Vector3.svg";

export default function Containers() {
  return (
    <Grid h="320px" templateColumns="repeat(4, 1fr)" gap={4}>
      <GridItem borderRadius="20px" bg="#EC7A7A">
        <div className="containers" borderRadius="50%">
          <Image
            src={Vector}
            width="16px"
            marginLeft="20px"
            position="absolute"
            marginTop="13px"
          ></Image>
        </div>
        <Text className="text-number-container">R$ 312.321,00</Text>
        <Text className="text-container">Receita Total</Text>
        <div className="line-container" />
        <Text className="second-number">R$ 67,20</Text>
        <Text className="second-text">Média por cliente</Text>
      </GridItem>

      <GridItem borderRadius="20px" bg="#7A85EC">
        <div className="containers" borderRadius="50%">
          <Image
            marginTop="13px"
            src={Vector2}
            width="16px"
            marginLeft="20px"
            position="absolute"
          ></Image>
        </div>
        <Text className="text-number-container">R$ 74.421,00</Text>
        <Text className="text-container">Lucro Total</Text>
        <div className="line-container" />
        <Text className="second-number">R$ 42,30</Text>
        <Text className="second-text">Média por cliente</Text>
      </GridItem>

      <GridItem borderRadius="20px" bg="#65D5AC;">
        <div className="containers" borderRadius="50%">
          <Image
            src={Vector3}
            width="16px"
            marginLeft="20px"
            position="absolute"
            marginTop="13px"
          ></Image>
        </div>
        <Text className="text-number-container">R$ 3,12</Text>
        <Text className="text-container">Lucro por venda</Text>
        <div className="line-container" />
        <Text className="second-number">R$ 12,40</Text>
        <Text className="second-text">Média por cliente</Text>
      </GridItem>
    </Grid>
  );
}
