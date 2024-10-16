import React, { useState, useEffect } from 'react'
import { VStack, Flex, IconButton, Tooltip, TableContainer, Table, Thead, Tr, Td, Tbody, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { MdOutlineAddBox, MdOutlineDriveFileRenameOutline, MdOutlineSave, MdDeleteOutline } from "react-icons/md";
import axios from 'axios';
import { AgregarProducto } from '../AgregarProducto/AgregarProducto';
import { AgregarModificador } from '../AgregarModificador/AgregarModificador';

const ListaDePrecios = ({esOscuro}) => {

    const [tituloModal, setTituloModal] = useState("Nuevo producto");
    const [agregarProducto, setAgregarProducto] = useState(false);

    const Redondear = (numero) => {
      // Obtenemos el resto del número al dividir entre 100
      const resto = numero % 100;
    
      // Si el resto es menor a 50, redondeamos hacia abajo
      if (resto < 50) {
        return numero - resto;
      } else {
        // Si el resto es 50 o mayor, redondeamos hacia arriba
        return numero + (100 - resto);
      }
    }

    useEffect(() => {
      // Obtener productos y multiplicadores
      const fetchData = async () => {
        try {
          const productosResponse = await axios.get('/api/productos');
          const multiplicadoresResponse = await axios.get('/api/multiplicadores');
          setProductos(productosResponse.data);
          setMultiplicadores(multiplicadoresResponse.data);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };
  
      fetchData();
    }, []);

    // Función para obtener el multiplicador adecuado según la categoría
    const obtenerMultiplicador = (categoria) => {
      // Buscar el multiplicador basado en la categoría
      const multiplicador = multiplicadores.find(m => m.nombre === categoria);
      // Si no se encuentra, usar el valor "general"
      return multiplicador ? multiplicador.valor : multiplicadores.find(m => m.nombre === 'general').valor;
    };


    const OverlayCartel = () => (
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayCartel />);

    return(
        <VStack pl={"5px"}  mt={"40px"}>


            <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
              <ModalContent>
                <ModalHeader>{tituloModal}</ModalHeader>
                <ModalCloseButton onClick={() => {
                      onClose();
                      setAgregarProducto(false);
                    }} />
                <ModalBody>
                  {agregarProducto ? 
                    <AgregarProducto/> :
                    <AgregarModificador cerrarModal={() => {
                      onClose();
                    }}/>
                  }
                </ModalBody>
              </ModalContent>
            </Modal>


            <Flex flexDirection="row-reverse" alignItems="flex-start" justifyContent="space-evenly" w="100%" padding="20px">
              <TableContainer w="400px" borderColor="#e2e8f0" borderWidth="1px" borderRadius="12px">
                <Table layout="fixed">
                  <Thead>
                    <Tr>
                      <Td textAlign="left" fontWeight="bolder" fontSize="20px">Modificadores</Td>
                      <Td></Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Agregar Modificador' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineAddBox />} color="" bg="" _hover={{ bg:"" }} onClick={() => {
                                                      setTituloModal("Nuevo modificador");
                                                      setAgregarProducto(false);
                                                      setOverlay(<OverlayCartel />)
                                                      onOpen()
                                                    }}>
                          </IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td textAlign="left">General:</Td>
                      <Td textAlign="center">2,5</Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Editar' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                        <Tooltip label='Eliminar' placement='bottom' openDelay={250} hasArrow>
                            <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdDeleteOutline />} color="" bg="" _hover={{ bg:"" }} onClick={() => borrarModificador(modificador.nombre)}></IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td textAlign="left">Remeras:</Td>
                      <Td textAlign="center">1,75</Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Editar' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                        <Tooltip label='Eliminar' placement='bottom' openDelay={250} hasArrow>
                            <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdDeleteOutline />} color="" bg="" _hover={{ bg:"" }} onClick={() => borrarModificador(modificador.nombre)}></IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td textAlign="left">Buzos:</Td>
                      <Td textAlign="center">1,356</Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Editar' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                        <Tooltip label='Eliminar' placement='bottom' openDelay={250} hasArrow>
                            <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdDeleteOutline />} color="" bg="" _hover={{ bg:"" }} onClick={() => borrarModificador(modificador.nombre)}></IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td textAlign="left">Bolsas:</Td>
                      <Td textAlign="center">1,5</Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Editar' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                        <Tooltip label='Eliminar' placement='bottom' openDelay={250} hasArrow>
                            <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdDeleteOutline />} color="" bg="" _hover={{ bg:"" }} onClick={() => borrarModificador(modificador.nombre)}></IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

              <TableContainer borderColor="#e2e8f0" borderWidth="1px" borderRadius="12px">
                <Table>
                  <Thead>
                    <Tr>
                      <Td fontWeight="bolder" fontSize="20px">Lista de precios</Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Agregar Producto' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineAddBox />} color="" bg="" _hover={{ bg:"" }} onClick={() => {
                                                      setTituloModal("Nuevo producto");
                                                      setAgregarProducto(true);
                                                      setOverlay(<OverlayCartel />)
                                                      onOpen()
                                                    }}>
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
                        <Td>{item.nombre}</Td>
                        <Td>{item.costo}</Td>
                        <Td>{}</Td>
                        <Td>{Redondear()}</Td>
                      </Tr>
                    ))}
                  </Tbody> */}
                  <Tbody>
                    <Tr>
                      <Td textAlign="left"  >Taza</Td>
                      <Td textAlign="center">$2500</Td>
                      <Td textAlign="center">$3754</Td>
                      <Td textAlign="center">${Redondear(3754)}</Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Editar' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                        <Tooltip label='Eliminar' placement='bottom' openDelay={250} hasArrow>
                            <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdDeleteOutline />} color="" bg="" _hover={{ bg:"" }} onClick={() => borrarProducto(producto.nombre)}></IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td textAlign="left"  >Mousepad</Td>
                      <Td textAlign="center">$2500</Td>
                      <Td textAlign="center">$3754</Td>
                      <Td textAlign="center">$3800</Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Editar' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                        <Tooltip label='Eliminar' placement='bottom' openDelay={250} hasArrow>
                            <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdDeleteOutline />} color="" bg="" _hover={{ bg:"" }} onClick={() => borrarProducto(producto.nombre)}></IconButton>
                        </Tooltip>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td textAlign="left"  >Remera</Td>
                      <Td textAlign="center">$2500</Td>
                      <Td textAlign="center">$3754</Td>
                      <Td textAlign="center">$3800</Td>
                      <Td textAlign="right" fontWeight="bolder" fontSize="20px">
                        <Tooltip label='Editar' placement='bottom' openDelay={250} hasArrow>
                          <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}>
                          </IconButton>
                        </Tooltip>
                        <Tooltip label='Eliminar' placement='bottom' openDelay={250} hasArrow>
                            <IconButton isRound='true' fontSize="22px" h="20px" icon={<MdDeleteOutline />} color="" bg="" _hover={{ bg:"" }} onClick={() => borrarProducto(producto.nombre)}></IconButton>
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