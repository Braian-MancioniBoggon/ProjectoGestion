import React from 'react'
import { Box, Flex, Image, Text, } from "@chakra-ui/react";

const Presupuesto = ({esOscuro, pedidoToEdit, setPedidoToEdit}) => {
    
    return (
        <Flex
        borderRadius='20px'
        h='345px'
        w={{ base: "315px", md: "345px" }}
        direction='column'>
        <Box p='10px'>
          <Flex w='100%' mb='10px'>
            <Image src={esOscuro ? "img/logoCerberus.png" : "img/logoCerberusAlt.png"} h='40px' me='auto' />
          </Flex>
        </Box>
            <Flex w='100%' p='10px' borderBottomLeftRadius='inherit' borderBottomRightRadius='inherit' height='100%' direction='column'>
                <Text fontWeight='600' w='100%' fontSize='3xl'>
                  {pedidoToEdit ? pedidoToEdit.nombre : ""}
                </Text>
                <Text fontWeight='600' w='100%' fontSize='l'>
                  {pedidoToEdit ? pedidoToEdit.telefono : ""}
                </Text>
                <Text
                  fontSize='sm'
                  color='gray.500'
                  lineHeight='24px'
                  fontWeight='500'
                  mb='revert'
                  mt='revert'>
                  {pedidoToEdit ? pedidoToEdit.detalle : ""}
                </Text>
                <Flex justifyContent={"space-around"} alignItems={"center"}>
                    <Flex w={"max-content"}>Total: ${pedidoToEdit ? pedidoToEdit.total : ""}</Flex>
                    <Flex w={"max-content"}>Seña: ${pedidoToEdit ? pedidoToEdit.seña : ""}</Flex>
                    <Flex w={"max-content"}>Saldo: ${pedidoToEdit ? pedidoToEdit.total - pedidoToEdit.seña : ""}</Flex>
                </Flex>
            </Flex>
        </Flex>
    );
  }

export { Presupuesto }