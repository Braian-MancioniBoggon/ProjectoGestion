const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
  fecha: String,
  fechaCompleta: String,
  detalle: String,
  total: Number,
  seña: Number,
  factura: Boolean,
  estado: String
});

const Pedido = mongoose.model('Pedido', PedidoSchema, 'pedidosCerberus');

module.exports = Pedido;