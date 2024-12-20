import React from 'react'
import { NavLink } from "react-router-dom";
import { MdOutlineWhatsapp, MdStorefront, MdInsertChartOutlined, MdFolderOpen, MdFacebook, MdSunny, MdBedtime, MdAssignment } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { VStack, Flex, Img, Box, IconButton, useColorMode, Text, Heading, Tooltip } from '@chakra-ui/react'
import { IconContext } from 'react-icons';

const Header = ({esOscuro, toggleColorMode}) => {
    
    return(
        <IconContext.Provider value={{ style: { verticalAlign: 'middle', fill:"", fontSize:"24px" } }}>
        <VStack h="100vh" width="60px" justifyContent={"center"} alignItems="flex-start">
                <Flex pos={"fixed"} direction={"column"} bgColor="" h="100vh" width="30px" borderRightRadius={"15px"} alignItems="center" justifyContent='space-between' pt="25px" pb="25px" pl={"30px"}  pr={"30px"} zIndex={"99"} backdropFilter={"blur(15px)"} boxShadow={"3px 3px 6px rgba(0, 0, 0, 0.5), -1px -1px 4px rgba(255, 255, 255, 0.5)"} transition={"0.5s"}>
                    <Flex direction={'column'} grow={1} width={"40px"} justifyContent='space-between'> 
                        <Flex direction={"column"} >
                            <NavLink to="/">
                                <Tooltip label='Home' placement='right' openDelay={250} hasArrow>
                                    <IconButton isRound='true' color="" bg="" _hover={{ bg:"" }}>
                                        <Img h="50px" width="auto" src={esOscuro ? "img/monogramaBlanco.png" : "img/monogramaNegro.png"} />
                                    </IconButton> 
                                </Tooltip>
                            </NavLink>
                        </Flex>
                        <Flex direction={"column"} >
                            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'darkGreen' : esOscuro ? "white" : "black", })}>
                                <Tooltip label='Pedidos' placement='right' openDelay={250} hasArrow>
                                    <IconButton isRound='true' icon={<MdAssignment />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                                </Tooltip>
                            </NavLink>
                            <NavLink to="/lista-de-precios" style={({ isActive }) => ({ color: isActive ? 'darkGreen' : esOscuro ? "white" : "black", })}>
                                <Tooltip label='Lista de precios' placement='right' openDelay={250} hasArrow>
                                    <IconButton isRound='true' icon={<MdInsertChartOutlined />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                                </Tooltip>
                            </NavLink>
                            <a href="https://drive.google.com/drive/folders/1BRCkqxSxWgLeZ3JCRijEB6cWCX_pV4Ze?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                <Tooltip label='Drive' placement='right' openDelay={250} hasArrow>
                                    <IconButton isRound='true' icon={<MdFolderOpen />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                                </Tooltip>
                            </a>
                            <a href="https://www.mercadolibre.com.ar/publicaciones/listado?filters=OMNI_ACTIVE|OMNI_INACTIVE|CHANNEL_NO_PROXIMITY_AND_NO_MP_MERCHANTS&page=1&sort=DEFAULT#!" target="_blank" rel="noopener noreferrer">
                                <Tooltip label='MercadoLibre' placement='right' openDelay={250} hasArrow>
                                    <IconButton isRound='true' icon={<MdStorefront />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                                </Tooltip>
                            </a>
                            <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <Tooltip label='Whatsapp' placement='right' openDelay={250} hasArrow>
                                    <IconButton isRound='true' icon={<MdOutlineWhatsapp />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                                </Tooltip>
                            </a>
                            <a href="https://www.instagram.com/cerberus.estampados" target="_blank" rel="noopener noreferrer">
                                <Tooltip label='Instagram' placement='right' openDelay={250} hasArrow>
                                    <IconButton isRound='true' icon={<RiInstagramLine />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                                </Tooltip>
                            </a>
                            <a href="https://www.facebook.com/cerberus.estampados" target="_blank" rel="noopener noreferrer">
                                <Tooltip label='Facebook' placement='right' openDelay={250} hasArrow>
                                    <IconButton isRound='true' icon={<MdFacebook />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                                </Tooltip>
                            </a>
                            <NavLink>
                                <Tooltip label='Vari' placement='right' openDelay={250} hasArrow>
                                    <IconButton isRound='true' color="" bg="" _hover={{ bg:"" }}>
                                        <Img h="24px" src={esOscuro ? "img/logoVari.png" : "img/logoVariAlt.png"} />
                                    </IconButton>
                                </Tooltip>
                            </NavLink>
                        </Flex>
                        <Flex direction={"column"} >
                            <Tooltip label={esOscuro ? "Modo claro" : "Modo oscuro"} placement='right' openDelay={250} hasArrow>
                                <IconButton  ml="" isRound='true' icon={esOscuro ? <MdSunny /> : <MdBedtime />} onClick={toggleColorMode} color="" bg="" _hover={{ bg:"" }}></IconButton>
                            </Tooltip>
                        </Flex>
                    </Flex>
                </Flex>
        </VStack>

        </IconContext.Provider>
    )
}

export { Header }