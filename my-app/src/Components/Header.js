import React from "react";
import "../Style/Header.css";
import { Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Text className="subtitle-dashboard">Principal/Dashboard</Text>
      <Text className="title-dashboard">Velty Dashboard</Text>
    </div>
  );
}
