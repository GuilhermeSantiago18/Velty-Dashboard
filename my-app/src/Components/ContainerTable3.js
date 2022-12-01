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

export default function ContainerTable3() {
  return (
    <>
      <Text className="first-text-table">Tipos de plano</Text>
      <Text className="second-text-table">2 tipos em uso</Text>
      <TableContainer marginTop="10px">
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
              <Td>Construtoras</Td>
              <Td>312 Clientes</Td>
              <Td>123,90</Td>
            </Tr>
            <Tr>
              <Td>Clientes finais</Td>
              <Td>312 Clientes</Td>
              <Td>123,90</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
