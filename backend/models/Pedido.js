const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  nombre: String,
  telefono: Number,
  fechaIngreso: { type: Date, default: Date.now },
  detalle: String,
  total: Number,
  seña: Number,
  factura: Boolean,
  estado: String
});

const Pedido = mongoose.model('Pedido', pedidoSchema);
module.exports = Pedido;