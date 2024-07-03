import React, { useState, useEffect } from 'react'
import { Field, Form, Formik } from 'formik';
import { VStack, Modal, ModalOverlay, Button, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalFooter, FormControl, FormLabel, Input, FormErrorMessage, Flex, Select, Checkbox, Textarea } from '@chakra-ui/react'

const Formulario = ({cerrarModal, agregarPedido, actualizarPedido, pedidoToEdit, setPedidoToEdit, editando }) => {

    const [initialValues, setInitialValues] = useState({
      nombre: '',
      telefono: '',
      detalle: '',
      total: '',
      seña: '',
      factura: false,
      estado: 'Sin iniciar'
    });

    useEffect(() => {
      if (pedidoToEdit) {
        setInitialValues({
          nombre: pedidoToEdit.nombre,
          telefono: pedidoToEdit.telefono,
          detalle: pedidoToEdit.detalle,
          total: pedidoToEdit.total,
          seña: pedidoToEdit.seña,
          factura: pedidoToEdit.factura,
          estado: pedidoToEdit.estado
        });
      } else {
        setInitialValues({
          nombre: '',
          telefono: '',
          detalle: '',
          total: '',
          seña: '',
          factura: false,
          estado: 'Sin iniciar'
        });
      }
    }, [pedidoToEdit]);

    function campoObligatorio(value) {
      let error
      if (!value) {
        error = "Campo obligatorio"
      }
      return error
    }

    function validarTelefono(value) {
      let error
      if (!value) {
          error = "Campo obligatorio"
      } else if (value.startsWith('0') || value.startsWith('+54')) {
          error = "El número no puede comenzar con 0 ni con +54"
      }
      return error
    }

    return(
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            if (!values.seña) {values.seña = 0;}
            if (pedidoToEdit) {
              actualizarPedido(pedidoToEdit._id, values);
            } else {
              agregarPedido(values.nombre, values.telefono, values.detalle, values.total, values.seña, values.factura, values.estado);
            }
            cerrarModal()
            setPedidoToEdit(undefined)
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
              <Field name='telefono' validate={validarTelefono}>
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
                    <Textarea {...field} placeholder='' />
                    <FormErrorMessage>{form.errors.detalle}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex justifyContent={"space-evenly"} alignItems={"center"} textAlign={"center"} paddingTop={"10px"}>
                <Flex w={"150px"}>
                  <Field name='total'>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.total && form.touched.total}>
                        <FormLabel>Total</FormLabel>
                        <Input {...field} placeholder='' />
                        <FormErrorMessage>{form.errors.total}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex w={"150px"}>
                  <Field name='seña'>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.seña && form.touched.seña}>
                        <FormLabel>Seña</FormLabel>
                        <Input {...field} placeholder='' />
                        <FormErrorMessage>{form.errors.seña}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
              </Flex>
              <Flex justifyContent={"space-evenly"} alignItems={"center"} textAlign={"center"} paddingTop={"16px"}>
                <Flex w={"150px"}>
                  <Field name='estado' w={"150px"}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.estado && form.touched.estado}>
                        <Select {...field}>
                          <option value='Sin iniciar'>Sin iniciar</option>
                          <option value='En proceso'>En proceso</option>
                          <option value='Finalizado'>Finalizado</option>
                        </Select>
                        <FormErrorMessage>{form.errors.estado}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex w={"150px"}>
                  <Field name='factura' w={"150px"}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.factura && form.touched.factura}><Checkbox {...field} ml={"5px"}>Factura</Checkbox>
                      <FormErrorMessage>{form.errors.factura}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
              </Flex>
              <Flex p={"16px 0px"} justifyContent={"flex-end"}>
                <Button isLoading={props.isSubmitting} type='submit' marginRight={"5px"}>Guardar</Button>
                  <Button onClick={cerrarModal}>Cerrar</Button>
              </Flex>
            </Form>
          )}
        </Formik>
    )
}

export { Formulario }