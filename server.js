const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta GET de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Ruta POST para procesar datos del frontend
app.post('/api/message', (req, res) => {
  const { message } = req.body;
  const responseMessage = `Received your message: ${message}`;
  res.json({ response: responseMessage });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
