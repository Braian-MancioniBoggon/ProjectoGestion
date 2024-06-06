import React, { useState } from 'react'
import { Formik } from 'formik';
import { VStack, Modal, ModalOverlay, Button, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalFooter } from '@chakra-ui/react'

const CartelEmergente = () => {
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
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Cargar pedido</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Acá va el formulario para cargar o editar el objeto "pedido"</Text>
          </ModalBody>
          <ModalFooter>
            <Button marginRight={"5px"}>Guardar</Button>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </VStack>
    )
}

export { CartelEmergente }