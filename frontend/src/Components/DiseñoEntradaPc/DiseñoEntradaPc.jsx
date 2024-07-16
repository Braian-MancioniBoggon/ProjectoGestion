import React, { useState } from 'react';
import { VStack, Flex, IconButton, Img, Box, Text, Heading, Input, Checkbox, Divider, Badge, Link, Tooltip } from '@chakra-ui/react';
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineDriveFileRenameOutline, MdOutlineRemoveRedEye, MdDeleteOutline, MdOutlineFindInPage, MdOutlineFileCopy, MdOutlineWhatsapp } from "react-icons/md";
import { TbReceiptDollar } from "react-icons/tb";

const DiseñoEntradaPc = ({pedido, handleEditClick, borrarPedido, verPedido}) => {
    const [whatsappLink, setWhatsappLink] = useState(`https://wa.me/+54${pedido.telefono}`);

    const colorEstadoPedido = (estadoPedido) => {
        switch (estadoPedido) {
            case "En proceso":
                return "purple";
            case "Finalizado":
                return "green";
            default:
                return "red";
        }
      }

    return(
        <IconContext.Provider value={{ style: { verticalAlign: 'middle', fill:"", fontSize:"22px" } }}>
            <VStack w={"100%"}>
                <Divider />
                <Flex w={"100%"} direction={'row'}>
                    <Flex direction={'column'} alignItems={"start"} flexGrow={1} p={5}>
                        <Flex w={"max-content"} fontSize={"14px"}>{pedido.fecha}</Flex>
                        <Flex w={"max-content"} fontSize={"20px"} fontWeight={"bolder"} lineHeight={"22px"} minW={"175px"} maxW={"175px"} p={"4px 0px"}>{pedido.nombre}</Flex>
                        <Flex w={"max-content"} maxW={"110px"}>{pedido.telefono}</Flex>
                    </Flex>
                    <Flex direction={"column"} alignItems={"start"} flexGrow={50} p={5}>
                        <Flex w={"100%"} whiteSpace="pre-wrap">{pedido.detalle}</Flex>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"} flexGrow={1} p={5}>
                        <Flex w={"max-content"} justifyContent={"flex-end"}>Total: ${pedido.total}</Flex>
                        <Flex w={"max-content"} justifyContent={"flex-end"} p={"6px 0px"}>Seña: ${pedido.seña}</Flex>
                        <Flex w={"max-content"} justifyContent={"flex-end"}>Saldo: ${pedido.total - pedido.seña}</Flex>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"} flexGrow={1} p={5}>
                        <Flex w={"max-content"} justifyContent={"center"} >Factura <Checkbox  isChecked={pedido.factura} ml={"5px"} colorScheme='green'></Checkbox></Flex>
                        <Flex w={"max-content"} justifyContent={"center"} p={"6px 0px"}><Badge variant='solid' colorScheme={colorEstadoPedido(pedido.estado)}>{pedido.estado}</Badge></Flex>
                    </Flex>
                    <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} flexGrow={1} p={5}>
                        <Flex direction={'row'}>
                            <Tooltip label='Editar' placement='top' openDelay={250} hasArrow>
                                <IconButton isRound='true' icon={<MdOutlineDriveFileRenameOutline />} onClick={() => handleEditClick(pedido)}  color="" bg="" _hover={{ bg:"" }}></IconButton>
                            </Tooltip>
                            <Tooltip label='Enviar mensaje' placement='top' openDelay={250} hasArrow>
                                <Link href={whatsappLink} isExternal>
                                    <IconButton isRound='true' icon={<MdOutlineWhatsapp />}  color="" bg="" _hover={{ bg:"" }} ></IconButton>
                                </Link>
                            </Tooltip>
                        </Flex>
                        <Flex direction={'row'}>
                            <Tooltip label='Ver' placement='bottom' openDelay={250} hasArrow>
                                <IconButton isRound='true' icon={<TbReceiptDollar />} onClick={() => verPedido(pedido)} color="" bg="" _hover={{ bg:"" }}></IconButton>
                            </Tooltip>
                            <Tooltip label='Eliminar' placement='bottom' openDelay={250} hasArrow>
                                <IconButton isRound='true' icon={<MdDeleteOutline />} color="" bg="" _hover={{ bg:"" }} onClick={() => borrarPedido(pedido.nombre)}></IconButton>
                            </Tooltip>
                        </Flex>
                    </Flex>
                </Flex>
            </VStack>
        </IconContext.Provider>
    );
}

export { DiseñoEntradaPc };
