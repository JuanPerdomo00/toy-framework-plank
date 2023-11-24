import {createServer} from "node:net"

// Definir el puerto en el que el servidor estará escuchando
const PORT = 3000;

// Crear un servidor TCP
const server = createServer((socket) => {
  // Notificar cuando un cliente se conecta al servidor
  console.log('Cliente conectado:', socket.remoteAddress);

  // Manejar los datos recibidos desde el cliente
  socket.on('data', (data) => {
    console.log(`Mensaje del cliente: ${data}`);
  });

  // Manejar eventos de cierre de conexión
  socket.on('close', () => {
    console.log('Cliente desconectado');
  });

  // Manejar errores de conexión
  socket.on('error', (err) => {
    console.error('Error en la conexión:', err);
  });
});

// Escuchar en el puerto definido
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
