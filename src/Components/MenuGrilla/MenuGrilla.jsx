import React, { useState } from 'react'
import { VStack, Flex, IconButton, Img, Box, Text, Heading, Input } from '@chakra-ui/react'
import { IconContext } from 'react-icons';
import { MdOutlineAddBox, MdOutlineDriveFileRenameOutline, MdOutlineRemoveRedEye, MdDeleteOutline, MdOutlineFindInPage, MdOutlineFileCopy } from "react-icons/md";

const MenuGrilla = () => {
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
                <Flex w={"100%"} direction={'column'}>
                    <Flex direction={'row'} maxW={"300px"} justifyContent='space-between' pl={{base:"0px", sm:"0px", md:"30px"}}  pr={{base:"0px", sm:"0px", md:"30px"}} >
                        <IconButton isRound='true' icon={<MdOutlineAddBox />} color="" bg="" _hover={{ bg:"" }} onClick={agregarTarea}></IconButton>
                        <IconButton isRound='true' icon={<MdOutlineDriveFileRenameOutline />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton isRound='true' icon={<MdOutlineRemoveRedEye />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton isRound='true' icon={<MdDeleteOutline />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton isRound='true' icon={<MdOutlineFindInPage />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton isRound='true' icon={<MdOutlineFileCopy />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                    </Flex>
                    <Flex direction={'row'} textAlign={"center"} justifyContent='space-between' w="100%" pl={{base:"0px", sm:"0px", md:"30px"}}  pr={{base:"0px", sm:"0px", md:"30px"}} >
                        <Flex direction={'column'}>
                            Ingreso
                            <Input />
                        </Flex>
                        <Flex direction={'column'}>
                            Cliente
                            <Input />
                        </Flex>
                        <Flex direction={'column'}>
                            Contacto
                            <Input />
                        </Flex>
                        <Flex direction={'column'} minW={"400px"}>
                            Descripción
                            <Input  onChange={recibirTarea} value={tareaRecibida} />
                        </Flex>
                        <Flex direction={'column'}>
                            Presupuesto
                            <Input />
                        </Flex>
                        <Flex direction={'column'}>
                            Total
                            <Input />
                        </Flex>
                        <Flex direction={'column'}>
                            Seña
                            <Input />
                        </Flex>
                        <Flex direction={'column'}>
                            Saldo
                            <Input />
                        </Flex>
                        <Flex direction={'column'}>
                            Estado
                            <Input />
                        </Flex>
                        <Flex direction={'column'}>
                            Entregado
                            <Input />
                        </Flex>
                        <Flex direction={'column'}>
                            Acciones
                            <Input />
                        </Flex>
                    </Flex>
                </Flex>
            </VStack>
        </IconContext.Provider>
    )
}

export { MenuGrilla }