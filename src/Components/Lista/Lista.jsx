import React from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import { Tarea } from '../Tarea/Tarea'

const Lista = ({seleccionMenu, borrarTarea, eliminarTareaHistorial, finalizarTarea, menuPrincipal}) => {
    return(
        <Box borderRadius="15px" bgColor="#e6e6e6" p="20px"  w={{base:"300px", sm:"400px", md:"500px", lg:"600px"}} maxW="600px" marginBottom="20px">
            <Stack spacing="15px">
                {seleccionMenu == 0 && <Text fontWeight="300">{menuPrincipal ? "Add a Task" : "No Tasks in history"}</Text>}
                {seleccionMenu.map((tarea, indice) => (
                    <Box key={indice}>
                        <Tarea tarea={tarea} borrarTarea={borrarTarea} eliminarTareaHistorial={eliminarTareaHistorial} menuPrincipal={menuPrincipal} finalizarTarea={finalizarTarea} indice={indice}/>
                    </Box>
                ))}                
            </Stack>
        </Box>
    )
}

export { Lista }