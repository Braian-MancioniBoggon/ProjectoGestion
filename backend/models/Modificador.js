const mongoose = require('mongoose');

const ModificadorSchema = new mongoose.Schema({
  nombre: String,
  valor: Number
});

const Modificador = mongoose.model('Modificador', ModificadorSchema, 'modificadoresCerberus');

module.exports = Modificador;