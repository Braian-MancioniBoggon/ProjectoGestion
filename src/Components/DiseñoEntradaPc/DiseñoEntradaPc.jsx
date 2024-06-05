import React, { useState } from 'react'
import { VStack, Flex, IconButton, Img, Box, Text, Heading, Input, Checkbox, Divider, Badge } from '@chakra-ui/react'
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineDriveFileRenameOutline, MdOutlineRemoveRedEye, MdDeleteOutline, MdOutlineFindInPage, MdOutlineFileCopy, MdOutlineWhatsapp } from "react-icons/md";

const DiseñoEntradaPc = () => {
    const [tareaRecibida, setTareaRecibida] = useState("")
    const [tareas, setTareas] = useState([])
    const recibirTarea = (e) => {
        setTareaRecibida(e.target.value)
    }

    const crearTarea = (nombreTarea) => {
        if (nombreTarea.trim() != ""){
            const tareaNueva = {nombreTarea}
            setTareas([...tareas, tareaNueva])
        }
        setTareaRecibida("")
    }
    const agregarTarea = () => {
        crearTarea(tareaRecibida)
        console.log(tareas)
    }
    return(
        <IconContext.Provider value={{ style: { verticalAlign: 'middle', fill:"", fontSize:"22px" } }}>
            <VStack>
                <Divider />
                <Flex w={"100%"} direction={'row'}>
                    <Flex direction={'column'} flexGrow={1} p={5}>
                        <Flex w={"max-content"} fontSize={"14px"}>22/05/2024</Flex>
                        <Flex w={"max-content"} fontSize={"20px"} fontWeight={"bolder"} lineHeight={"22px"} maxW={"110px"} p={"4px 0px"}>Juan</Flex>
                        <Flex w={"max-content"} maxW={"110px"}>0914766183</Flex>
                    </Flex>
                    <Flex direction={"column"} flexGrow={2} p={5}>
                        <Flex w={"100%"}>Un patito en 3D para llevar puesto en lacabeza Un patito en 3D para llevar puesto en la cabeza Unpatito en 3D para llevar puesto en la cabeza Un patito en 3Dpara llevar puesto en la cabeza </Flex>
                    </Flex>
                    <Flex direction={"column"} flexGrow={1} p={5}>
                        <Flex w={"max-content"} justifyContent={"flex-end"}>Total: $3000</Flex>
                        <Flex w={"max-content"} justifyContent={"flex-end"} p={"6px 0px"}>Seña: $1000</Flex>
                        <Flex w={"max-content"} justifyContent={"flex-end"}>Saldo: $2000</Flex>
                    </Flex>
                    <Flex direction={"column"} flexGrow={1} p={5}>
                        <Flex w={"max-content"} justifyContent={"center"}   >Factura <Checkbox defaultChecked ml={"5px"}></Checkbox></Flex>
                        <Flex w={"max-content"} justifyContent={"center"} p={"6px 0px"}><Badge variant='solid' colorScheme='green'>Finalizado</Badge></Flex>
                    </Flex>
                    <Flex direction={"column"} justifyContent={"center"} flexGrow={1} p={5}>
                        <Flex direction={'row'}>
                            <IconButton isRound='true' icon={<MdOutlineDriveFileRenameOutline />}  color="" bg="" _hover={{ bg:"" }}></IconButton>
                            <IconButton isRound='true' icon={<MdOutlineWhatsapp />}  color="" bg="" _hover={{ bg:"" }}></IconButton>
                        </Flex>
                        <Flex direction={'row'}>
                            <IconButton isRound='true' icon={<MdOutlineFileCopy />}  color="" bg="" _hover={{ bg:"" }}></IconButton>
                            <IconButton isRound='true' icon={<MdDeleteOutline />}  color="" bg="" _hover={{ bg:"" }}></IconButton>
                        </Flex>
                    </Flex>
                </Flex>
            </VStack>
        </IconContext.Provider>
    )
}

export { DiseñoEntradaPc }