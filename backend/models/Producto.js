const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: String,
  categoria: String,
  costo: Number
});

const Producto = mongoose.model('Producto', ProductoSchema, 'preciosCerberus');

module.exports = Producto;