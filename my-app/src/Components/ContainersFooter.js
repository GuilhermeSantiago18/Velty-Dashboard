import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import ContainerTable from './ContainerTable'

export default function ContainersFooter() {
  return (
    <Grid h="370px" templateColumns="repeat(3, 1fr)" gap={4}>
    <GridItem borderRadius="20px" bg="#FFFFFF" >
      <ContainerTable />
    </GridItem>
    <GridItem borderRadius="20px" bg="#FFFFFF" />
    <GridItem borderRadius="20px" bg="#FFFFFF" />
  </Grid>
  )
}
