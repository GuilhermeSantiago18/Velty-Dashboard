import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

export default function ContainersThirdLine() {
  return (
    <Grid h="196px" templateColumns="repeat(4, 1fr)" gap={4}>
    <GridItem borderRadius="20px" bg="#FFFFFF" />
    <GridItem borderRadius="20px" bg="#FFFFFF" />
    <GridItem borderRadius="20px" bg="#FFFFFF" />
    <GridItem borderRadius="20px" bg="#FFFFFF" />
  </Grid>
  )
}
