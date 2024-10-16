require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pedidosRouter = require('./routes/pedidos');
const productosRouter = require('./routes/productos');
const modificadoresRouter = require('./routes/modificadores');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.error('Error al conectar a MongoDB', err);
});

app.use('/api/pedidos', pedidosRouter);
app.use('/api/productos', productosRouter);
app.use('/api/modificadores', modificadoresRouter);

app.listen(3001, () => {
  console.log('Servidor corriendo en puerto 3001');
});

app.delete('/api/pedidos/:id', async (req, res) => {
  try {
    const pedidoId = req.params.id;
    await Pedido.findByIdAndDelete(pedidoId);
    res.status(200).send('Pedido eliminado');
  } catch (error) {
    res.status(500).send('Error al eliminar pedido');
  }
});

app.delete('/api/productos/:id', async (req, res) => {
  try {
    const productoId = req.params.id;
    await Producto.findByIdAndDelete(productoId);
    res.status(200).send('Producto eliminado');
  } catch (error) {
    res.status(500).send('Error al eliminar producto');
  }
});

app.delete('/api/modificadores/:id', async (req, res) => {
  try {
    const productoId = req.params.id;
    await Producto.findByIdAndDelete(productoId);
    res.status(200).send('Modificador eliminado');
  } catch (error) {
    res.status(500).send('Error al eliminar modificador');
  }
});