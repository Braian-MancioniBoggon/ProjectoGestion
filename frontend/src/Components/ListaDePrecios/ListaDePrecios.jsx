import React from 'react'
import { VStack, Flex, IconButton, Tooltip, TableContainer, Table, Thead, Tr, Td, Tbody } from '@chakra-ui/react';
import { MdOutlineAddBox, MdOutlineDriveFileRenameOutline, MdOutlineSave } from "react-icons/md";

const ListaDePrecios = ({esOscuro}) => {
    return(
        <VStack pl={"5px"}  mt={"40px"}>
            <Flex flexDirection="column" alignItems="center" w="100%" padding="20px">
              {/* <Heading as="h4">Modificadores</Heading>
              <Flex flexDirection="row" justifyContent="center">
                <Flex w="100%" justifyContent="center">
                  <Flex textAlign="right" p="10px">General:</Flex>
                  <Flex textAlign="left" p="10px">2,5</Flex>
                </Flex>
                <Flex w="100%" justifyContent="center">
                  <Flex textAlign="right" p="10px">Remeras:</Flex>
                  <Flex textAlign="left" p="10px">1,75</Flex>
                </Flex>
                <Flex w="100%" justifyContent="center">
                  <Flex textAlign="right" p="10px">Buzos:</Flex>
                  <Flex textAlign="left" p="10px">1,356</Flex>
                </Flex>
                <Flex w="100%" justifyContent="center">
                  <Flex textAlign="right" p="10px">Bolsas:</Flex>
                  <Flex textAlign="left" p="10px">1,5</Flex>
                </Flex>
              </Flex> */}
              <TableContainer w="100%">
                <Table layout="fixed">
                  <Thead>
                    <Tr>
                      <Td textAlign="center" fontWeight="bolder" fontSize="20px">Modificadores</Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Agregar Modificador' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineAddBox />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                        <Tooltip label='Editar Modificadores' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td textAlign="center">General:</Td>
                      <Td textAlign="center">2,5</Td>
                      <Td textAlign="center">Remeras:</Td>
                      <Td textAlign="center">1,75</Td>
                      <Td textAlign="center">Buzos:</Td>
                      <Td textAlign="center">1,356</Td>
                      <Td textAlign="center">Bolsas:</Td>
                      <Td textAlign="center">1,5</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

              <TableContainer w="100%" paddingTop="50px">
                <Table>
                  <Thead>
                    <Tr>
                      <Td fontWeight="bolder" fontSize="20px">Lista de precios</Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Agregar Producto' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineAddBox />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td textAlign="left" fontWeight="bolder">Producto</Td>
                      <Td textAlign="center" fontWeight="bolder">Costo</Td>
                      <Td textAlign="center" fontWeight="bolder">Precio</Td>
                      <Td textAlign="center" fontWeight="bolder">Precio Final</Td>
                      <Td></Td>
                    </Tr>
                  </Thead>
                  {/* <Tbody>
                    {productos.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.producto}</Td>
                        <Td>{item.costo}</Td>
                        <Td>{item.precio}</Td>
                        <Td>{item.precioFinal}</Td>
                      </Tr>
                    ))}
                  </Tbody> */}
                  <Tbody>
                    <Tr>
                      <Td textAlign="left"  >Taza</Td>
                      <Td textAlign="center">$2500</Td>
                      <Td textAlign="center">$3754</Td>
                      <Td textAlign="center">$3800</Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Editar Productos' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td textAlign="left"  >Mousepad</Td>
                      <Td textAlign="center">$2500</Td>
                      <Td textAlign="center">$3754</Td>
                      <Td textAlign="center">$3800</Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Editar Productos' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td textAlign="left"  >Remera</Td>
                      <Td textAlign="center">$2500</Td>
                      <Td textAlign="center">$3754</Td>
                      <Td textAlign="center">$3800</Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Editar Productos' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
        </VStack>
    )
}

export { ListaDePrecios }