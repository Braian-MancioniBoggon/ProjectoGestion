import React, { useState, useEffect } from 'react';
import { VStack, Divider, Modal, ModalOverlay, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, IconButton, InputGroup, Input, InputRightElement, Select, Tooltip, Heading, TableContainer, Table, Thead, Tr, Td, Tbody, Spacer } from '@chakra-ui/react';
import { DiseñoEntradaPc } from '../DiseñoEntradaPc/DiseñoEntradaPc';
import { Formulario } from '../Formulario/Formulario';
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineDriveFileRenameOutline, MdOutlineSave } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { createPedido, getPedidos, updatePedido, deletePedido as eliminarPedidoBackend } from '../../api/api';
import { Presupuesto } from '../Presupuesto/Presupuesto';
import { motion } from "framer-motion"

const Cuerpo = ({esOscuro}) => {
    const [pedidos, setPedidos] = useState([]);
    const [tituloModal, setTituloModal] = useState("Cargar pedido");
    const [pedidoToEdit, setPedidoToEdit] = useState("");
    const [fechaActual, setFechaActual] = useState(new Date().toLocaleDateString());
    const [mostrarPedido, setMostrarPedido] = useState(false);
  
    const fetchPedidos = async () => {
      const response = await getPedidos();
      const sortedPedidos = response.data.sort((a, b) => new Date(b.fechaCompleta) - new Date(a.fechaCompleta));
      setPedidos(sortedPedidos);
    };

    useEffect(() => {
      fetchPedidos();
    }, []);
  
    const agregarPedido = async (nombre, telefono, detalle, total, seña, factura, estado) => {
      const pedidoNuevo = { nombre, telefono, fecha: fechaActual, fechaCompleta: new Date(), detalle, total, seña, factura, estado };
      const response = await createPedido(pedidoNuevo);
      setPedidos([...pedidos, response.data]);
      fetchPedidos();
    };

    const actualizarPedido = (id, updatedPedido) => {
      updatePedido(id, updatedPedido).then((response) => {
        setPedidos(pedidos.map(p => (p._id === response.data._id ? response.data : p)));
        setPedidoToEdit("");
      });
    };
/*
    const verPedido = (id, mostrarPedido) => {
      updatePedido(id, mostrarPedido).then((response) => {
        setPedidos(pedidos.map(p => (p._id === response.data._id ? response.data : p)));
      });
    };
  */
    const verPedido = (pedido) => {
      setMostrarPedido(true);
      setPedidoToEdit(pedido);
      setTituloModal("");
      onOpen();
    };
  
    const handleEditClick = (pedido) => {
      setPedidoToEdit(pedido);
      setMostrarPedido(false);
      setTituloModal("Modificar pedido");
      onOpen();
    };

    const borrarPedido = async (id) => {
      try {
        await eliminarPedidoBackend(id);
        setPedidos(pedidos.filter(pedido => pedido._id !== id));
      } catch (error) {
        console.error('Error al eliminar pedido:', error);
      }
    }

    const OverlayCartel = () => (
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayCartel />);

    return(
        <VStack w={"100%"} pl={"5px"}>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
            <ModalContent>
              <ModalHeader>{tituloModal}</ModalHeader>
              <ModalCloseButton onClick={() => {
                    onClose();
                    setPedidoToEdit("");
                    setMostrarPedido(false);
                  }} />
              <ModalBody>
                {mostrarPedido ? 
                  <Presupuesto esOscuro={esOscuro}
                    pedidoToEdit={pedidoToEdit}
                    setPedidoToEdit={setPedidoToEdit}/> :
                  <Formulario cerrarModal={() => {
                      onClose();
                      setPedidoToEdit("");
                    }}
                    agregarPedido={agregarPedido}
                    actualizarPedido={actualizarPedido}
                    pedidoToEdit={pedidoToEdit}
                    setPedidoToEdit={setPedidoToEdit}/>
                }
              </ModalBody>
            </ModalContent>
          </Modal>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle', fill:"", fontSize:"22px" } }}>
            <Flex w={"100%"} mb={"40px"} direction={'column'}>
              <Flex w={"100%"} h={"50px"} left={"0px"} zIndex={"90"} direction={'row'} justifyContent='flex-start' pl={{base:"0px", sm:"0px", md:"70px"}}  pr={{base:"0px", sm:"0px", md:"30px"}}  alignItems={"center"} position={"fixed"} bg={esOscuro ? "#1a202c" : "#ffffff"} boxShadow={"0px 0px 25px -10px rgba(0,0,0,0.75)"}>
                <Tooltip label='Agregar pedido' placement='bottom' openDelay={250} hasArrow>
                  <IconButton isRound='true' ml={"10px"} mr={"10px"} icon={<MdOutlineAddBox />} color="" bg="" _hover={{ bg:"" }} onClick={() => {
                                                      setTituloModal("Cargar pedido");
                                                      setMostrarPedido(false);
                                                      setPedidoToEdit("");
                                                      setOverlay(<OverlayCartel />)
                                                      onOpen()
                                                    }}>
                  </IconButton>
                </Tooltip>
                  <InputGroup>
                    <Input placeholder='Buscar' />
                    <InputRightElement pointerEvents='none'>
                    <IoSearchOutline />
                    </InputRightElement>
                  </InputGroup>
                  <Flex alignItems={"center"} ml={"20px"}>
                    Mostrar: 
                    <Select ml={"10px"} width={"130px"}>
                      <option value='Todos'>Todos</option>
                      <option value='Sin iniciar'>Sin iniciar</option>
                      <option value='En proceso'>En proceso</option>
                      <option value='Finalizado'>Finalizado</option>
                    </Select>
                  </Flex>
              </Flex>
            </Flex>
          </IconContext.Provider>
          <Flex direction="column" width="100%" p="0px 20px">
            {pedidos.map((pedido) => (
              <DiseñoEntradaPc key={pedido._id} pedido={pedido} borrarPedido={() => borrarPedido(pedido._id)} handleEditClick={handleEditClick} verPedido={verPedido} />
            ))}
            <Divider />
          </Flex>

        </VStack>
    );
}

export { Cuerpo };
