import React, { useState, useEffect } from 'react';
import { VStack, Divider, Modal, ModalOverlay, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, IconButton } from '@chakra-ui/react';
import { DiseñoEntradaPc } from '../DiseñoEntradaPc/DiseñoEntradaPc';
import { Formulario } from '../Formulario/Formulario';
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineFindInPage } from "react-icons/md";
import { createPedido, getPedidos } from '../../api/api';

const Cuerpo = () => {
    const [pedidos, setPedidos] = useState([]);
    const [fechaActual, setFechaActual] = useState(new Date().toLocaleDateString());
  
    const fetchPedidos = async () => {
      const response = await getPedidos();
      setPedidos(response.data);
    };

    useEffect(() => {
      fetchPedidos();
    }, []);
  
    const agregarPedido = async (nombre, telefono, detalle, total, seña, factura, estado) => {
      const pedidoNuevo = { nombre, telefono, fecha: fechaActual, detalle, total, seña, factura, estado };
      const response = await createPedido(pedidoNuevo);
      setPedidos([...pedidos, response.data]);
    };

    const borrarPedido = async (nombre) => {
      // Implementa la lógica para borrar un pedido en el backend y actualizar el estado
    };

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
              <ModalCloseButton />
              <ModalBody>
                <Formulario cerrarModal={onClose} agregarPedido={agregarPedido} />
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

          {pedidos.map((pedido, index) => (
            <DiseñoEntradaPc key={index} pedido={pedido} borrarPedido={borrarPedido}/>
          ))}
          <Divider />
        </VStack>
    );
}

export { Cuerpo };
