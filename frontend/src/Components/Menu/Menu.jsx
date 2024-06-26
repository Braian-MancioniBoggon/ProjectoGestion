import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const Menu = ({seleccionarMenu, menuPrincipal, direction}) => {
    return(
        <Flex direction={direction} mt={{base:"30px",sm:"30px", md:"50px"}}>
            <Flex direction="column">
                <Flex mb={{base:"0px", sm:"0px", md:"20px"}} cursor="pointer" h="33px" alignItems="center" onClick={() => seleccionarMenu(true)} marginInline="5px">
                    <Box display={{base:"none", sm:"none", md:"block"}} backgroundColor={!menuPrincipal ? "" : "#00B89F" } w="4px" h="40px" mr="4px"></Box>
                    <Image src='img/lista.png' alt='Lista de tareas' w="33px" h="33px" mr="10px" />
                    <Text h="fit-content">Tasks</Text>
                </Flex>
                <Box display={{base:"block", sm:"block", md:"none"}} backgroundColor={!menuPrincipal ? "" : "#00B89F" } w="100%" h="4px" mt="4px"></Box>
            </Flex>
            <Flex direction="column">
                <Flex mb={{base:"0px", sm:"0px", md:"20px"}} cursor="pointer" h="33px" alignItems="center" onClick={() => seleccionarMenu(false)} marginInline="5px">
                    <Box display={{base:"none", sm:"none", md:"block"}} backgroundColor={!menuPrincipal ? "#00B89F" : "" } w="4px" h="40px" mr="4px"></Box>
                    <Image src='img/historial.png' alt='Historial' w="33px" h="33px" mr="10px" />
                    <Text h="fit-content">History</Text>
                </Flex>
                <Box display={{base:"block", sm:"block", md:"none"}} backgroundColor={!menuPrincipal ? "#00B89F" : "" } w="100%" paddingInline="5px" h="4px" mt="4px"></Box>
            </Flex>
        </Flex>
    )
}

export { Menu }