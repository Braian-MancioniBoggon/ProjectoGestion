import React from 'react'
import { MdOutlineWhatsapp, MdStorefront, MdInsertChartOutlined, MdFolderOpen, MdFacebook, MdSunny, MdBedtime } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { VStack, Flex, Img, Box, IconButton, useColorMode, Text, Heading } from '@chakra-ui/react'
import { IconContext } from 'react-icons';

const Header = ({esOscuro, toggleColorMode}) => {
    
    return(
        <IconContext.Provider value={{ style: { verticalAlign: 'middle', fill:"", fontSize:"30px" } }}>
        <VStack>
                <Flex bgColor="" h="130px" w="100%" alignItems="center" justifyContent='space-between'  pl={{base:"0px", sm:"0px",  md:"30px"}}  pr={{base:"0px", sm:"0px",  md:"30px"}} >
                    <Img h="40px" src={esOscuro ? "img/logoCerberus.png" : "img/logoCerberusAlt.png"} />
                    <Flex direction={'row'} grow={1} maxW={"700px"} justifyContent='space-between'> 
                        <IconButton isRound='true' color="" bg="" _hover={{ bg:"" }}>
                            <Img h="30px" src={esOscuro ? "img/logoVari.png" : "img/logoVariAlt.png"} />
                        </IconButton>
                        <IconButton isRound='true' icon={<MdInsertChartOutlined />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton isRound='true' icon={<MdFolderOpen />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton isRound='true' icon={<MdStorefront />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton isRound='true' icon={<MdOutlineWhatsapp />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton isRound='true' icon={<RiInstagramLine />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton isRound='true' icon={<MdFacebook />} color="" bg="" _hover={{ bg:"" }}></IconButton>
                        <IconButton  ml="" isRound='true' icon={esOscuro ? <MdSunny /> : <MdBedtime />} onClick={toggleColorMode} color="" bg="" _hover={{ bg:"" }}></IconButton>
                    </Flex>
                </Flex>
        </VStack>

        </IconContext.Provider>
    )
}

export { Header }