import React from 'react'
import { ChakraProvider  } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Cuerpo } from './Components/Cuerpo/Cuerpo'
import { MenuGrilla } from './Components/MenuGrilla/MenuGrilla'

function App() {

  return (
    <ChakraProvider>
      <Header/>
      <MenuGrilla />
      <Cuerpo/>
    </ChakraProvider>
  )
}

export default App