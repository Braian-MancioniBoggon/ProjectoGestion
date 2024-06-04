import React from 'react'
import { ChakraProvider  } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Cuerpo } from './Components/Cuerpo/Cuerpo'
import { MenuGrilla } from './Components/MenuGrilla/MenuGrilla'
import { DiseñoEntrada } from './Components/DiseñoEntrada/DiseñoEntrada'
import { DiseñoEntradaPc } from './Components/DiseñoEntradaPc/DiseñoEntradaPc'

function App() {

  return (
    <ChakraProvider>
      <Header/>
      <MenuGrilla />
      <DiseñoEntradaPc/>
      <DiseñoEntrada/>
    </ChakraProvider>
  )
}

export default App