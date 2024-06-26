import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Cuerpo } from './Components/Cuerpo/Cuerpo'
import { MenuGrilla } from './Components/MenuGrilla/MenuGrilla'

function App() {

  return (
    <ChakraProvider>
      <Header/>
      <Cuerpo />
    </ChakraProvider>
  )
}

export default App