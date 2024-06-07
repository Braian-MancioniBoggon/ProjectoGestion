import React, { useState } from 'react'
import { VStack, Divider  } from '@chakra-ui/react'
import { DiseñoEntradaPc } from '../DiseñoEntradaPc/DiseñoEntradaPc'
import { CartelEmergente } from '../CartelEmergente/CartelEmergente'

const Cuerpo = () => {

    const [pedidos, setPedidos] = useState([])
    const [fechaActual, setFechaActual] = useState(new Date().toLocaleDateString());
    const [accionModal, setAccionModal] = useState("Cargar")
  
    const agregarPedido = (nombre, telefono, detalle, total, seña, factura, estado) => {
      const pedidoNuevo = {nombre, telefono, fecha: fechaActual, detalle, total, seña, factura, estado}
      setArregloPedidos([...arregloPedidos, pedidoNuevo])
    }
    const accionCargar = () => {
      setAccionModal("Cargar")
    }
    const accionModificar = () => {
      setAccionModal("Modificar")
    }
    const borrarPedido = (eliminarPedido) => {
      setArregloPedidos(arregloPedidos.filter(pedido => pedido.nombre !== eliminarPedido))
    }
  
    const [arregloPedidos, setArregloPedidos] = useState([
      {
      nombre: 'Juan',
      telefono: '2914142126',
      fecha: fechaActual,
      detalle: 'Un patito amarillo impreso en 3D para ponerce en la cabeza',
      total: 3000,
      seña: 1000,
      factura: true,
      estado: 'Sin iniciar'
      },{
      nombre: 'Santi',
      telefono: '2915275376',
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
            <CartelEmergente agregarPedido={agregarPedido} accionModal={accionModal} accionModificar={accionModificar} accionCargar={accionCargar}/>
            {arregloPedidos.map((pedido, index) => (
              <DiseñoEntradaPc key={index} pedido={pedido} borrarPedido={borrarPedido}/>
            ))}
            <Divider />
        </VStack>
    )
}

export { Cuerpo }