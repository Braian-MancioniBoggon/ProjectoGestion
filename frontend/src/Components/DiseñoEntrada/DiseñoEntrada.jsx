import React, { useState } from 'react'
import { VStack, Flex, IconButton, Img, Box, Text, Heading, Input, Checkbox, Divider, Badge } from '@chakra-ui/react'
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineDriveFileRenameOutline, MdOutlineRemoveRedEye, MdDeleteOutline, MdOutlineFindInPage, MdOutlineFileCopy } from "react-icons/md";

const DiseñoEntrada = () => {
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
                <Flex w={"500px"} direction={'column'}>
                    <Flex w={"100%"} direction={'row'}>
                        <Flex w={"100%"}  alignItems={"center"}><Badge variant='solid' colorScheme='green'>Finalizado</Badge></Flex>
                        <Flex w={"100%"}  justifyContent={"flex-end"}>22/05/2024</Flex>
                    </Flex>
                    <Flex w={"100%"} direction={'row'}>
                        <Flex w={"100%"} direction={"column"}>
                            <Flex w={"100%"}>Juan</Flex>
                            <Flex w={"100%"}>02914766183</Flex>
                            <Flex w={"100%"}>Un patito en 3D para llevar puesto en la cabeza Un patito en 3D para llevar puesto en la cabeza Un patito en 3D para llevar puesto en la cabeza Un patito en 3D para llevar puesto en la cabeza </Flex>
                        </Flex>
                        <Flex w={"100%"} direction={"column"}>
                            <Flex w={"100%"} justifyContent={"flex-end"}>Factura  <Checkbox defaultChecked ml={"5px"}></Checkbox></Flex>
                            <Flex w={"100%"} justifyContent={"flex-end"}>Total: $3000</Flex>
                            <Flex w={"100%"} justifyContent={"flex-end"}>Seña: $1000</Flex>
                            <Flex w={"100%"} justifyContent={"flex-end"}>Saldo: $2000</Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </VStack>
        </IconContext.Provider>
    )
}

export { DiseñoEntrada }