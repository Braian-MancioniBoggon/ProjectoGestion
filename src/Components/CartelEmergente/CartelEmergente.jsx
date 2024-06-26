import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import { VStack, Modal, ModalOverlay, Button, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalFooter, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { Formulario } from '../Formulario/Formulario';

const CartelEmergente = ({agregarPedido, accionModal}) => {
    const OverlayCartel = () => (
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayCartel />)

    return(
        <VStack>
        <Button
            onClick={() => {
              setOverlay(<OverlayCartel />)
              onOpen()
        }}
        >
            Cargar pedido
        </Button>
        <Button
            onClick={() => {
              setOverlay(<OverlayCartel />)
              onOpen()
        }}
        >
            Modificar pedido
        </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{accionModal} pedido</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formulario cerrarModal={onClose} agregarPedido={agregarPedido} />
          </ModalBody>
        </ModalContent>
      </Modal>
      </VStack>
    )
}

export { CartelEmergente }