import React, { useState } from 'react'
import { VStack, Divider  } from '@chakra-ui/react'
import { DiseñoEntradaPc } from '../DiseñoEntradaPc/DiseñoEntradaPc'
import { CartelEmergente } from '../CartelEmergente/CartelEmergente'

const Cuerpo = () => {

    const [pedidos, setPedidos] = useState([])
    const [fechaActual, setFechaActual] = useState(new Date().toLocaleDateString());
  
    const agregarPedido = (nombre, telefono, fecha, detalle, total, seña, factura, estado) => {
      if (nombre.trim() != "" && telefono.trim() != "" ){
        const pedidoNueva = {nombre, telefono, fecha, detalle, total, seña, factura, estado}
        setPedidos([...pedidos, pedidoNueva])
      }
    }
    const borrarPedido = (eliminarPedido) => {
      setArregloPedidos(arregloPedidos.filter(pedido => pedido.nombre !== eliminarPedido))
    }
  
    const [arregloPedidos, setArregloPedidos] = useState([
      {
      nombre: 'Juan',
      telefono: '2914332467',
      fecha: fechaActual,
      detalle: 'Un patito amarillo impreso en 3D para ponerce en la cabeza',
      total: 3000,
      seña: 1000,
      factura: true,
      estado: 'Sin iniciar'
      },{
      nombre: 'Santi',
      telefono: '2914399999',
      fecha: fechaActual,
      detalle: 'Un cuervo negro impreso en 3D para ponerlo como espantapajaro en el local',
      total: 10000,
      seña: 8000,
      factura: false,
      estado: 'En proceso'
      }
    ]);
  
    return(
        <VStack w={"100%"}>
            <CartelEmergente />
            {arregloPedidos.map((pedido, index) => (
              <DiseñoEntradaPc pedido={pedido} borrarPedido={borrarPedido}/>
            ))}
            <Divider />
        </VStack>
    )
}

export { Cuerpo }