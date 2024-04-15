const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/integrantes', (req, res) => {
  const data = {
    'integrantes': [
      {'nome': 'Nome Sobrenome1'},
      {'nome': 'Nome Sobrenome2'},
      // Adicione os outros integrantes aqui
    ]
  };
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});