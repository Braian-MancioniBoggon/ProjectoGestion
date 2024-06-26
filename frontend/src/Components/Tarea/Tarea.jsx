import { Card, CardBody, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Tarea = ({tarea, borrarTarea, eliminarTareaHistorial, menuPrincipal, finalizarTarea, indice}) => {
    const iconoTareaRealizada = 'img/tareaRealizada.png' ;
    const iconoTareaSinRealizar = 'img/tareaSinRealizar.png' ;
    return(    
    <Card direction="row" overflow="hidden" variant="outline" bgColor="#ffffff" alignItems="center"borderRadius="15px" p="15px">
        <Image objectFit='cover' src={tarea.completada ? iconoTareaRealizada : iconoTareaSinRealizar} alt='Check' h="30px" cursor="pointer" onClick={() => finalizarTarea(tarea.nombreTarea) } />
        <CardBody paddingBlock="0px">
          <Text textDecor={tarea.completada ? "line-through" : "none"}>
            {tarea.nombreTarea}
          </Text>
        </CardBody>
        <Image objectFit='cover' src='img/eliminar.png' alt='Check' h="30px" cursor="pointer" onClick={() => menuPrincipal ? borrarTarea(tarea.nombreTarea) : eliminarTareaHistorial(tarea.nombreTarea)} />
    </Card>
    )
}

export { Tarea }