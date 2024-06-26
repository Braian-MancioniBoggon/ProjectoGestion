import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const createPedido = (pedido) => api.post('/pedidos', pedido);
export const getPedidos = () => api.get('/pedidos');