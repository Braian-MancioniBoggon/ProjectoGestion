const express = require('express');
const Producto = require('../models/Producto');

const router = express.Router();

router.post('/', async (req, res) => {
  const producto = new Producto(req.body);
  await producto.save();
  res.status(201).send(producto);
});

router.get('/', async (req, res) => {
  const productos = await Producto.find();
  res.status(200).send(productos);
});

router.put('/:id', async (req, res) => {
  const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).send(producto);
});

router.delete('/:id', async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedProducto = await Producto.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).send(updatedProducto);
});

module.exports = router;