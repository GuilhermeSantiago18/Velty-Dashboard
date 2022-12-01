import { Button, Input } from "@chakra-ui/react";
import React from "react";
import "../Style/Header.css";
import { Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Text className="subtitle-dashboard" color='#707EAE' fontSize="14px">Principal/Dashboard</Text>
      <Text className="title-dashboard">Velty Dashboard</Text>
    </div>
  );
}
