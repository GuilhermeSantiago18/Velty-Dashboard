import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

export default function ContainersFooter() {
  return (
    <Grid h="351px" marginRight='19px' templateColumns="repeat(3, 1fr)" gap={4}>
    <GridItem borderRadius="20px" bg="#FFFFFF" />
    <GridItem borderRadius="20px" bg="#FFFFFF" />
    <GridItem borderRadius="20px" bg="#FFFFFF" />
  </Grid>
  )
}
