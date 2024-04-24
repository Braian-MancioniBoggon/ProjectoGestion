import { Box, Flex, Image, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Lista } from '../Lista/Lista';
import { Menu } from '../Menu/Menu';

const Cuerpo = () => {
    const [menuPrincipal, setMenuPrincipal] = useState(true)
    const [tareaRecibida, setTareaRecibida] = useState("")
    const [tareas, setTareas] = useState([])
    const [historial, setHistorial] = useState([])
    const recibirTarea = (e) => {
        setTareaRecibida(e.target.value)
    }
    const seleccionarMenu = (seleccion) =>{
        setMenuPrincipal(seleccion)
    }
    const crearTarea = (nombreTarea) => {
        if (nombreTarea.trim() != ""){
            const tareaNueva = {nombreTarea, completada: false, eliminada: false}
            setTareas([...tareas, tareaNueva])
        }
        setTareaRecibida("")
    }
    const agregarTarea = () => {
        crearTarea(tareaRecibida)
    }
    const eliminarTarea = (borrarTarea) => {
        const tareaParaHistorial = {nombreTarea: borrarTarea, completada: false, eliminada: true}
        setTareas(tareas.filter(tarea => tarea.nombreTarea !== borrarTarea))
        setHistorial([...historial, tareaParaHistorial])
    }
    const eliminarTareaHistorial = (borrarTarea) => {
        setHistorial(historial.filter(tarea => tarea.nombreTarea !== borrarTarea))
    }
    const finalizarTarea = (nombreTarea) => {
        setTareas((listaTareas) => listaTareas.map (tarea => tarea.nombreTarea === nombreTarea ? {...tarea, completada: !tarea.completada} : tarea))
    }
    useEffect(() => {

    },[])
    return(
        <VStack fontSize="1.2rem" lineHeight="1.5" fontWeight="400" fontFamily="Roboto,sans-serif" w="100%">
            <Flex direction="row" w="77%" alignContent="center" justifyContent={{base:"center", sm:"center", md:"space-around"}}>
                <Box display={{base:"none", sm:"none", md:"block"}}>
                    <Menu seleccionarMenu={seleccionarMenu} menuPrincipal={menuPrincipal} direction={"column"} />
                </Box>
                <Flex direction="column" mt="50px">
                    <Flex direction="column">
                        <InputGroup size='xxl' w={{base:"300px", sm:"400px", md:"500px", lg:"600px"}} maxW="600px">
                            <Input w="100%" h="60px" pr="1.2rem"  p='15px' border="2px solid #e6e6e6" mb={{base:"0px", sm:"0px", md:"30px"}} borderRadius="20px" fontSize="1.2rem" onChange={recibirTarea} value={tareaRecibida} placeholder='Enter your Task' isDisabled={!menuPrincipal ? true : false}  variant={menuPrincipal ? "outline" : "filled"} focusBorderColor="#212529" borderWidth="thin"/>
                            <InputRightElement>
                                <Image src='img/agregar.png' alt='+' w="30px" cursor={menuPrincipal ? "pointer" : "no-drop"} top="15px" right="15px" position="relative" onClick={agregarTarea} />
                            </InputRightElement>
                        </InputGroup>
                        <Box display={{base:"block", sm:"block", md:"none"}}  mb={{base:"30px", sm:"30px", md:"0px"}}>
                            <Menu seleccionarMenu={seleccionarMenu} menuPrincipal={menuPrincipal} direction={"row"} />
                        </Box>
                    </Flex>
                        <Lista seleccionMenu={menuPrincipal ? tareas : historial} borrarTarea={eliminarTarea} eliminarTareaHistorial={eliminarTareaHistorial} finalizarTarea={finalizarTarea} menuPrincipal={menuPrincipal} />
                </Flex>
            </Flex>
        </VStack>
    )
}

export { Cuerpo }