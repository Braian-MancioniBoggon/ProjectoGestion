import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Flex, useColorMode } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Cuerpo } from './Components/Cuerpo/Cuerpo'
import { ListaDePrecios } from './Components/ListaDePrecios/ListaDePrecios'

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const esOscuro = colorMode === "dark";

  return (
      <Router basename="/ProyectoGestion/">
        <Flex>
          <Flex>
            <Header esOscuro={esOscuro} toggleColorMode={toggleColorMode}/>
          </Flex>
          <Flex direction="column" width="100%">
            <Routes>
              <Route path="/" element={<Cuerpo esOscuro={esOscuro}/>} />
              <Route path="/lista-de-precios" element={<ListaDePrecios esOscuro={esOscuro}/>} />
            </Routes>
          </Flex>
        </Flex>
      </Router>
  )
}

export default App