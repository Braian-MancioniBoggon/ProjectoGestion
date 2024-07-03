const express = require('express');
const Pedido = require('../models/Pedido');

const router = express.Router();

router.post('/', async (req, res) => {
  const pedido = new Pedido(req.body);
  await pedido.save();
  res.status(201).send(pedido);
});

router.get('/', async (req, res) => {
  const pedidos = await Pedido.find();
  res.status(200).send(pedidos);
});

router.put('/:id', async (req, res) => {
  const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).send(pedido);
});

router.delete('/:id', async (req, res) => {
  await Pedido.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedPedido = await Pedido.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).send(updatedPedido);
});

module.exports = router;
