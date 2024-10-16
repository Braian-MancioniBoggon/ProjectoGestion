const express = require('express');
const Modificador = require('../models/Modificador');

const router = express.Router();

router.post('/', async (req, res) => {
  const modificador = new Modificador(req.body);
  await modificador.save();
  res.status(201).send(modificador);
});

router.get('/', async (req, res) => {
  const modificadores = await Modificador.find();
  res.status(200).send(modificadores);
});

router.put('/:id', async (req, res) => {
  const modificador = await Modificador.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).send(modificador);
});

router.delete('/:id', async (req, res) => {
  await Modificador.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedModificador = await Modificador.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).send(updatedModificador);
});

module.exports = router;