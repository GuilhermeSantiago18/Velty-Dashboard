import { Center, Grid, Input, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faMoon,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import elipse5 from "../Images/Svg/elipse5.svg";

export default function Search() {
  const [searchInfo, setSearchInfo] = useState("");

  const handleChange = ({ target }) => {
    setSearchInfo(target.value);
  };

  return (
    <Grid
      display="flex"
      bg="#FFFFFF"
      height="61px"
      borderRadius="30px"
      w="100%"
      maxWidth="422px"
      marginTop="20px"
      templateColumns="repeat(5, 1fr)"
      gap={10}
    >
      <Input
        className="input-search"
        marginLeft="10px"
        placeholder="Busca"
        paddingLeft="35px"
        w="214px"
        borderRadius="49px"
        size="md"
        type="text"
        id="search"
        marginTop="10px"
        onChange={handleChange}
        value={searchInfo}
      />
      <Center gap={6} marginRight="18px">
        <FontAwesomeIcon icon={faBell} color="#A3AED0" marginLeft="20px" />
        <FontAwesomeIcon
          icon={faMoon}
          fontSize="22px"
          color="#A3AED0"
          marginTop="10px"
        />
        <FontAwesomeIcon
          icon={faCircleExclamation}
          color="#A3AED0"
          marginTop="10px"
        />
        <Image
          src={elipse5}
          borderRadius="20px"
          width="100%"
          maxWidth="50px"
          marginLeft="8px"
        />
      </Center>
    </Grid>
  );
}
