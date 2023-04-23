const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Si la ruta es "/", envía el archivo index.html
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error interno del servidor');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Archivo no encontrado');
  }
});

server.listen(8000, () => {
  console.log('Servidor iniciado en http://localhost:8000');
});
