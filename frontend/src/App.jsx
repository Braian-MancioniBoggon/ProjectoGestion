import React, { useState } from 'react'
import { ChakraProvider, Flex, useColorMode } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Cuerpo } from './Components/Cuerpo/Cuerpo'
import { MenuGrilla } from './Components/MenuGrilla/MenuGrilla'

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const esOscuro = colorMode === "dark";

  return (
    <ChakraProvider>
      <Flex w={"100%"}>
        <Header esOscuro={esOscuro} toggleColorMode={toggleColorMode}/>
        <Cuerpo esOscuro={esOscuro}/>
      </Flex>
    </ChakraProvider>
  )
}

export default App