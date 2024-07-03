import React, { useState, useEffect } from 'react';
import { VStack, Divider, Modal, ModalOverlay, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, IconButton } from '@chakra-ui/react';
import { DiseñoEntradaPc } from '../DiseñoEntradaPc/DiseñoEntradaPc';
import { Formulario } from '../Formulario/Formulario';
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineFindInPage } from "react-icons/md";
import { createPedido, getPedidos, updatePedido, deletePedido as eliminarPedidoBackend } from '../../api/api';

const Cuerpo = () => {
    const [pedidos, setPedidos] = useState([]);
    const [editando, setEditando] = useState(false);
    const [pedidoToEdit, setPedidoToEdit] = useState("");
    const [fechaActual, setFechaActual] = useState(new Date().toLocaleDateString());
  
    const fetchPedidos = async () => {
      const response = await getPedidos();
      setPedidos(response.data);
    };

    useEffect(() => {
      //fetchPedidos();
      getPedidos().then((response) => {
        setPedidos(response.data);
      });
    }, []);
  
    const agregarPedido = async (nombre, telefono, detalle, total, seña, factura, estado) => {
      const pedidoNuevo = { nombre, telefono, fecha: fechaActual, detalle, total, seña, factura, estado };
      const response = await createPedido(pedidoNuevo);
      setPedidos([...pedidos, response.data]);
    };

    const actualizarPedido = (id, updatedPedido) => {
      setEditando(true);
      updatePedido(id, updatedPedido).then((response) => {
        setPedidos(pedidos.map(p => (p._id === response.data._id ? response.data : p)));
        setPedidoToEdit(""); // Clear the form after editing
      });
    };
  
    const handleEditClick = (pedido) => {
      setPedidoToEdit(pedido);
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
        <VStack w={"100%"}>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
            <ModalContent>
              <ModalHeader>Cargar pedido</ModalHeader>
              <ModalCloseButton onClick={() => {
                    onClose();
                    setPedidoToEdit("");
                  }} />
              <ModalBody>
                <Formulario cerrarModal={() => {
                    onClose();
                    setPedidoToEdit("");
                  }}
                  agregarPedido={agregarPedido}
                  actualizarPedido={actualizarPedido}
                  pedidoToEdit={pedidoToEdit}
                  setPedidoToEdit={setPedidoToEdit}
                  editando={editando}/>
              </ModalBody>
            </ModalContent>
          </Modal>

          <IconContext.Provider value={{ style: { verticalAlign: 'middle', fill:"", fontSize:"22px" } }}>
            <Flex w={"100%"} direction={'column'}>
              <Flex direction={'row'} maxW={"300px"} justifyContent='flex-start' pl={{base:"0px", sm:"0px", md:"30px"}}  pr={{base:"0px", sm:"0px", md:"30px"}} >
                  <IconButton isRound='true' icon={<MdOutlineAddBox />} color="" bg="" _hover={{ bg:"" }} onClick={() => {
                                                      setOverlay(<OverlayCartel />)
                                                      onOpen()
                                                    }}>
                  </IconButton>
                  <IconButton isRound='true' icon={<MdOutlineFindInPage />} color="" bg="" _hover={{ bg:"" }}></IconButton>
              </Flex>
            </Flex>
          </IconContext.Provider>

          {pedidos.map((pedido) => (
            <DiseñoEntradaPc key={pedido._id} pedido={pedido} borrarPedido={() => borrarPedido(pedido._id)} handleEditClick={handleEditClick} />
          ))}
          <Divider />
        </VStack>
    );
}

export { Cuerpo };
