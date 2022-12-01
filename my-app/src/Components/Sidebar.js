import { Grid, Image } from "@chakra-ui/react";
import React from "react";
import Pex from "../Images/Pex.jpg";

export default function Sidebar() {
  return (
    <Grid>
      <Image marginLeft="34px" marginTop="34.75px" src={Pex} alt="Pex Image" />
    </Grid>
  );
}
