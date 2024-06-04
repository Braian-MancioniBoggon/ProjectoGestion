import React, { useState } from 'react'
import { VStack, Flex, IconButton, Img, Box, Text, Heading, Input, Checkbox, Divider, Badge } from '@chakra-ui/react'
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineDriveFileRenameOutline, MdOutlineRemoveRedEye, MdDeleteOutline, MdOutlineFindInPage, MdOutlineFileCopy } from "react-icons/md";

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
                        <Flex w={"max-content"}>22/05/2024</Flex>
                        <Flex w={"max-content"}>Juan</Flex>
                        <Flex w={"max-content"}>0914766183</Flex>
                    </Flex>
                    <Flex direction={"column"} flexGrow={2} p={5}>
                        <Flex w={"100%"}>Un patito en 3D para llevar puesto en lacabeza Un patito en 3D para llevar puesto en la cabeza Unpatito en 3D para llevar puesto en la cabeza Un patito en 3Dpara llevar puesto en la cabeza </Flex>
                    </Flex>
                    <Flex direction={"column"} flexGrow={1} p={5}>
                        <Flex w={"max-content"} justifyContent={"flex-end"}>Total: $3000</Flex>
                        <Flex w={"max-content"} justifyContent={"flex-end"}>Seña: $1000</Flex>
                        <Flex w={"max-content"} justifyContent={"flex-end"}>Saldo: $2000</Flex>
                    </Flex>
                    <Flex direction={"column"} flexGrow={1} p={5}>
                        <Flex w={"max-content"} justifyContent={"center"}>Factura <Checkbox defaultChecked ml={"5px"}></Checkbox></Flex>
                        <Flex w={"max-content"} justifyContent={"center"}><Badge variant='solid' colorScheme='green'>Finalizado</Badge></Flex>
                    </Flex>
                </Flex>
            </VStack>
        </IconContext.Provider>
    )
}

export { DiseñoEntradaPc }