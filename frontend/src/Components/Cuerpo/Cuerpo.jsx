import React, { useState, useEffect } from 'react';
import { VStack, Divider, Modal, ModalOverlay, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, IconButton } from '@chakra-ui/react';
import { DiseñoEntradaPc } from '../DiseñoEntradaPc/DiseñoEntradaPc';
import { Formulario } from '../Formulario/Formulario';
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineFindInPage } from "react-icons/md";
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
            <Flex w={"100%"} direction={'column'}>
              <Flex direction={'row'} maxW={"300px"} justifyContent='flex-start' pl={{base:"0px", sm:"0px", md:"30px"}}  pr={{base:"0px", sm:"0px", md:"30px"}} >
                  <IconButton isRound='true' icon={<MdOutlineAddBox />} color="" bg="" _hover={{ bg:"" }} onClick={() => {
                                                      setTituloModal("Cargar pedido");
                                                      setMostrarPedido(false);
                                                      setPedidoToEdit("");
                                                      setOverlay(<OverlayCartel />)
                                                      onOpen()
                                                    }}>
                  </IconButton>
                  <IconButton isRound='true' icon={<MdOutlineFindInPage />} color="" bg="" _hover={{ bg:"" }}></IconButton>
              </Flex>
            </Flex>
          </IconContext.Provider>

          {pedidos.map((pedido) => (
            <DiseñoEntradaPc key={pedido._id} pedido={pedido} borrarPedido={() => borrarPedido(pedido._id)} handleEditClick={handleEditClick} verPedido={verPedido} />
          ))}
          <Divider />
        </VStack>
    );
}

export { Cuerpo };
