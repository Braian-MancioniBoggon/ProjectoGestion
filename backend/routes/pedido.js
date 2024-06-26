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

module.exports = router;