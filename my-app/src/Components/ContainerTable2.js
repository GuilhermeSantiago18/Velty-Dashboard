import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import '../Style/ContainerTable.css'
  
  export default function ContainerTable2() {
    return (
      <>
      <Text className="first-text-table">Categorias</Text>
      <Text className="second-text-table">4 categorias em uso</Text>
      <TableContainer marginTop='10px'>
      <Table variant='simple' colorScheme='whiteAlpha'>
        <Thead className="line-table">
          <Tr className="line-table">
            <Th>CLUBE</Th>
            <Th>CLIENTES</Th>
            <Th>PREÇO</Th>
          </Tr>
        </Thead >
        
        <Tbody className='tbody'>
          <Tr>
            <Td>6 vendas</Td>
            <Td>312 Clientes</Td>
            <Td>123,90</Td>
          </Tr>
          <Tr>
            <Td>12 vendas</Td>
            <Td>312 Clientes</Td>
            <Td>123,90</Td>
          </Tr>
          <Tr>
            <Td>24 vendas</Td>
            <Td>312 Clientes</Td>
            <Td>123,90</Td>
          </Tr>
          <Tr>
            <Td>Personalizado</Td>
            <Td>312 Clientes</Td>
            <Td >123,90</Td>
          </Tr>
          </Tbody>
         
      </Table>
    </TableContainer>
    </>
    );
  }
  