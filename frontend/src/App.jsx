import React, { useState } from 'react'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Cuerpo } from './Components/Cuerpo/Cuerpo'
import { MenuGrilla } from './Components/MenuGrilla/MenuGrilla'

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const esOscuro = colorMode === "dark";

  return (
    <ChakraProvider>
      <Header esOscuro={esOscuro} toggleColorMode={toggleColorMode}/>
      <Cuerpo esOscuro={esOscuro}/>
    </ChakraProvider>
  )
}

export default App