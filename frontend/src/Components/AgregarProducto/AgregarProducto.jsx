import React, { useState, useEffect } from 'react'
import { Field, Form, Formik } from 'formik';
import { VStack, Modal, ModalOverlay, Button, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalFooter, FormControl, FormLabel, Input, FormErrorMessage, Flex, Select, Checkbox, Textarea } from '@chakra-ui/react'


const AgregarProducto = ({cerrarModal}) => {

    const [initialValues, setInitialValues] = useState({
      nombre: '',
      valor: '',
      clase: ''
    });

    function campoObligatorio(value) {
      let error
      if (!value) {
        error = "Campo obligatorio"
      }
      return error
    }

    return(
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            cerrarModal()
          }}
        >
          {(props) => (
            <Form>
              <Field name='nombre' validate={campoObligatorio}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.nombre && form.touched.nombre}>
                    <FormLabel>Nombre</FormLabel>
                    <Input {...field} placeholder='' autoComplete='off'  />
                    <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
                <Field name='valor'  validate={campoObligatorio}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.valor && form.touched.valor}>
                        <FormLabel pt="15px">Valor</FormLabel>
                        <Input {...field} placeholder='' autoComplete='off'  />
                        <FormErrorMessage>{form.errors.valor}</FormErrorMessage>
                      </FormControl>
                    )}
                </Field>
                <Field name='clase'>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.clase && form.touched.clase}>
                        <FormLabel pt="15px">Clase</FormLabel>
                        <Select {...field}>
                          <option value='General'>General</option>
                          <option value='General'>General</option>
                          <option value='General'>General</option>
                        </Select>
                        <FormErrorMessage>{form.errors.clase}</FormErrorMessage>
                      </FormControl>
                    )}
                </Field>
              <Flex p={"16px 0px"} justifyContent={"flex-end"}>
                <Button isLoading={props.isSubmitting} type='submit' marginRight={"5px"}>Guardar</Button>
                  <Button onClick={cerrarModal}>Cerrar</Button>
              </Flex>
            </Form>
          )}
        </Formik>
    )
}

export { AgregarProducto }