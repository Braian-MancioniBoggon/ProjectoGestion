import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import { VStack, Modal, ModalOverlay, Button, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalFooter, FormControl, FormLabel, Input, FormErrorMessage, Flex } from '@chakra-ui/react'

const Formulario = ({cerrarModal, agregarPedido}) => {

    function campoObligatorio(value) {
      let error
      if (!value) {
        error = "Campo obligatorio"
      }
      return error
    }

    return(
        <Formik
          initialValues={{ 
                            nombre: '',
                            telefono: '',
                            detalle: '',
                            total: '',
                            seña: '',
                            factura: false,
                            estado: 'Sin iniciar'
                        }}
          onSubmit={(values, actions) => {
            if (!values.seña) {values.seña = 0;}
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
                actions.resetForm();
            }, 1000)
          }}
        >
          {(props) => (
            <Form>
              <Field name='nombre' validate={campoObligatorio}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.nombre && form.touched.nombre}>
                    <FormLabel>Nombre</FormLabel>
                    <Input {...field} placeholder='' />
                    <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='telefono' validate={campoObligatorio}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.telefono && form.touched.telefono}>
                    <FormLabel>Telefono</FormLabel>
                    <Input {...field} placeholder='' />
                    <FormErrorMessage>{form.errors.telefono}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='detalle' validate={campoObligatorio}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.detalle && form.touched.detalle}>
                    <FormLabel>Detalle</FormLabel>
                    <Input {...field} placeholder='' />
                    <FormErrorMessage>{form.errors.detalle}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='total' validate={campoObligatorio}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.total && form.touched.total}>
                    <FormLabel>Total</FormLabel>
                    <Input {...field} placeholder='' />
                    <FormErrorMessage>{form.errors.total}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='seña'>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.seña && form.touched.seña}>
                    <FormLabel>Seña</FormLabel>
                    <Input {...field} placeholder='' defaultValue={"0"} />
                    <FormErrorMessage>{form.errors.seña}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
                <Flex p={"16px 0px"} justifyContent={"flex-end"}>
                    <Button isLoading={props.isSubmitting} type='submit' marginRight={"5px"} onClick={() => agregarPedido( nombre.value, telefono.value, detalle.value, total.value, seña.value, factura.value, estado.value)}>Guardar</Button>
                    <Button onClick={cerrarModal}>Cerrar</Button>
                </Flex>
            </Form>
          )}
        </Formik>
    )
}

export { Formulario }