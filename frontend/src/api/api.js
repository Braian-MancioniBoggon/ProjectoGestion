import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const createPedido = (pedido) => api.post('/pedidos', pedido);
export const getPedidos = () => api.get('/pedidos');
export const updatePedido = (id, pedido) => api.put(`/pedidos/${id}`, pedido);
export const deletePedido = (id) => api.delete(`/pedidos/${id}`);
export const buscarPedidosPorTelefono = (telefono) => api.get(`/pedidos/buscar/${telefono}`);