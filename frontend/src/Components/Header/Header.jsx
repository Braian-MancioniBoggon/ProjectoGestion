import React from 'react'
import { MdOutlineWhatsapp, MdStorefront, MdInsertChartOutlined, MdFolderOpen, MdFacebook, MdSunny, MdBedtime } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { VStack, Flex, Img, Box, IconButton, useColorMode, Text, Heading, Tooltip } from '@chakra-ui/react'
import { IconContext } from 'react-icons';

const Header = ({esOscuro, toggleColorMode}) => {
    
    return(
        <IconContext.Provider value={{ style: { verticalAlign: 'middle', fill:"", fontSize:"24px" } }}>
        <VStack h="100vh" w="60px" justifyContent={"center"} alignItems="flex-start" >
                <Flex pos={"fixed"} direction={"column"} bgColor="" h="100vh" w="30px" borderRightRadius={"15px"} alignItems="center" justifyContent='space-between' pt="25px" pb="25px" pl={"30px"}  pr={"30px"} boxShadow={"-10px 0px 25px 5px rgba(0,0,0,0.75)"}>
                    <Flex direction={'column'} grow={1} W={"40px"} justifyContent='space-between'> 
                        <Flex direction={"column"} >
                            <IconButton isRound='true' color="" bg="" _hover={{ bg:"" }}>
                                <Img h="50px" w="auto" src={esOscuro ? "img/monogramaBlanco.png" : "img/monogramaNegro.png"} />
                            </IconButton> 
                        </Flex>
                        <Flex direction={"column"} >
                            <Tooltip label='Ecxel' placement='right' openDelay={250} hasArrow>
                                <IconButton isRound='true' icon={<MdInsertChartOutlined />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                            </Tooltip>
                            <Tooltip label='Drive' placement='right' openDelay={250} hasArrow>
                                <IconButton isRound='true' icon={<MdFolderOpen />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                            </Tooltip>
                            <Tooltip label='MercadoLibre' placement='right' openDelay={250} hasArrow>
                                <IconButton isRound='true' icon={<MdStorefront />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                            </Tooltip>
                            <Tooltip label='Whatsapp' placement='right' openDelay={250} hasArrow>
                                <IconButton isRound='true' icon={<MdOutlineWhatsapp />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                            </Tooltip>
                            <Tooltip label='Instagram' placement='right' openDelay={250} hasArrow>
                                <IconButton isRound='true' icon={<RiInstagramLine />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                            </Tooltip>
                            <Tooltip label='Facebook' placement='right' openDelay={250} hasArrow>
                                <IconButton isRound='true' icon={<MdFacebook />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                            </Tooltip>
                            <Tooltip label='Vari' placement='right' openDelay={250} hasArrow>
                                <IconButton isRound='true' color="" bg="" _hover={{ bg:"" }}>
                                    <Img h="24px" src={esOscuro ? "img/logoVari.png" : "img/logoVariAlt.png"} />
                                </IconButton>
                            </Tooltip>
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