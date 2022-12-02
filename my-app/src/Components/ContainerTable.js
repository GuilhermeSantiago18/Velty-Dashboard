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
import "../Style/ContainerTable.css";

export default function ContainerTable() {
  return (
    <>
      <Text className="first-text-table">Planos</Text>
      <Text className="second-text-table">123 planos ativos</Text>
      <TableContainer marginTop="10px" width='100%'>
        <Table variant="simple" colorScheme="whiteAlpha">
          <Thead className="line-table">
            <Tr className="line-table">
              <Th>CLUBE</Th>
              <Th>CLIENTES</Th>
              <Th>PREÇO</Th>
            </Tr>
          </Thead>

          <Tbody className="tbody">
            <Tr>
              <Td>Estagiário</Td>
              <Td>312 Clientes</Td>
              <Td>123,90</Td>
            </Tr>
            <Tr>
              <Td>Diretoria</Td>
              <Td>312 Clientes</Td>
              <Td>123,90</Td>
            </Tr>
            <Tr>
              <Td>Geral</Td>
              <Td>312 Clientes</Td>
              <Td>123,90</Td>
            </Tr>
            <Tr>
              <Td>Almoxarifado</Td>
              <Td>312 Clientes</Td>
              <Td>123,90</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
