import React, { useState } from 'react'
import { VStack, Flex, IconButton, Img, Box, Text, Heading, Input, Checkbox, Divider, Badge, Link } from '@chakra-ui/react'
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineDriveFileRenameOutline, MdOutlineRemoveRedEye, MdDeleteOutline, MdOutlineFindInPage, MdOutlineFileCopy, MdOutlineWhatsapp } from "react-icons/md";

const DiseñoEntradaPc = ({pedido, modificarPedido, borrarPedido}) => {
    const [whatsappLink, setWhatsappLink] = useState(`https://wa.me/+54${pedido.telefono}`)
    return(
        <IconContext.Provider value={{ style: { verticalAlign: 'middle', fill:"", fontSize:"22px" } }}>
            <VStack w={"100%"}>
                <Divider />
                <Flex w={"100%"} direction={'row'}>
                    <Flex direction={'column'} alignItems={"start"} flexGrow={1} p={5}>
                        <Flex w={"max-content"} fontSize={"14px"}>{pedido.fecha}</Flex>
                        <Flex w={"max-content"} fontSize={"20px"} fontWeight={"bolder"} lineHeight={"22px"} maxW={"110px"} p={"4px 0px"}>{pedido.nombre}</Flex>
                        <Flex w={"max-content"} maxW={"110px"}>{pedido.telefono}</Flex>
                    </Flex>
                    <Flex direction={"column"} alignItems={"start"} flexGrow={50} p={5}>
                        <Flex w={"100%"}>{pedido.detalle}</Flex>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"} flexGrow={1} p={5}>
                        <Flex w={"max-content"} justifyContent={"flex-end"}>Total: ${pedido.total}</Flex>
                        <Flex w={"max-content"} justifyContent={"flex-end"} p={"6px 0px"}>Seña: ${pedido.seña}</Flex>
                        <Flex w={"max-content"} justifyContent={"flex-end"}>Saldo: ${pedido.total - pedido.seña}</Flex>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"} flexGrow={1} p={5}>
                        <Flex w={"max-content"} justifyContent={"center"} >Factura <Checkbox isDisabled isChecked={pedido.factura} ml={"5px"}></Checkbox></Flex>
                        <Flex w={"max-content"} justifyContent={"center"} p={"6px 0px"}><Badge variant='solid' colorScheme='green'>{pedido.estado}</Badge></Flex>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} flexGrow={1} p={5}>
                        <Flex direction={'row'}>
                            <IconButton isRound='true' icon={<MdOutlineDriveFileRenameOutline />} onClick={() => modificarPedido}  color="" bg="" _hover={{ bg:"" }}></IconButton>
                            <Link href={whatsappLink} isExternal>
                                <IconButton isRound='true' icon={<MdOutlineWhatsapp />}  color="" bg="" _hover={{ bg:"" }} ></IconButton>
                            </Link>
                        </Flex>
                        <Flex direction={'row'}>
                            <IconButton isRound='true' icon={<MdOutlineFileCopy />}  color="" bg="" _hover={{ bg:"" }}></IconButton>
                            <IconButton isRound='true' icon={<MdDeleteOutline />}  color="" bg="" _hover={{ bg:"" }} onClick={() => borrarPedido(pedido.nombre)}></IconButton>
                        </Flex>
                    </Flex>
                </Flex>
            </VStack>
        </IconContext.Provider>
    )
}

export { DiseñoEntradaPc }