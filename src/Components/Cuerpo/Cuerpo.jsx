import React, { useState } from 'react'
import { VStack, Divider, Modal, ModalOverlay, Button, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, IconButton, Text, ModalFooter, FormControl, FormLabel, Input, FormErrorMessage   } from '@chakra-ui/react'
import { DiseñoEntradaPc } from '../DiseñoEntradaPc/DiseñoEntradaPc'
import { Field, Form, Formik } from 'formik';
import { Formulario } from '../Formulario/Formulario';
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineDriveFileRenameOutline, MdOutlineRemoveRedEye, MdDeleteOutline, MdOutlineFindInPage, MdOutlineFileCopy } from "react-icons/md";

const Cuerpo = () => {

    const [pedidos, setPedidos] = useState([])
    const [fechaActual, setFechaActual] = useState(new Date().toLocaleDateString());
  
    const agregarPedido = (nombre, telefono, detalle, total, seña, factura, estado) => {
      const pedidoNuevo = {nombre, telefono, fecha: fechaActual, detalle, total, seña, factura, estado}
      setArregloPedidos([...arregloPedidos, pedidoNuevo])
    }
    const borrarPedido = (eliminarPedido) => {
      setArregloPedidos(arregloPedidos.filter(pedido => pedido.nombre !== eliminarPedido))
    }
    
    const OverlayCartel = () => (
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayCartel />)


    const [arregloPedidos, setArregloPedidos] = useState([
      {
      nombre: 'Juan',
      telefono: '2914142126',
      fecha: fechaActual,
      detalle: 'Un patito amarillo impreso en 3D para ponerce en la cabeza',
      total: 3000,
      seña: 1000,
      factura: true,
      estado: 'Sin iniciar'
      },{
      nombre: 'Santi',
      telefono: '2915275376',
      fecha: fechaActual,
      detalle: 'Un cuervo negro impreso en 3D para ponerlo como espantapajaro en el local',
      total: 10000,
      seña: 8000,
      factura: false,
      estado: 'En proceso'
      }
    ]);
  
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


          {arregloPedidos.map((pedido, index) => (
            <DiseñoEntradaPc key={index} pedido={pedido} borrarPedido={borrarPedido}/>
          ))}
          <Divider />
        </VStack>
    )
}

export { Cuerpo }